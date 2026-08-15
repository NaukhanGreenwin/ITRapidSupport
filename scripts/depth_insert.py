#!/usr/bin/env python3
"""Insert depth-pass sections/FAQs into src/data/locations.ts.

The file mixes TS-style (single-quoted keys/values) and JSON-style (double-quoted)
entries, and section paragraphs may contain markdown links with [] and (), so
bracket matching has to skip string literals. Content is supplied as Python data
and serialised here so apostrophes never need hand-escaping.
"""
import re
import sys

PATH = 'src/data/locations.ts'


def scan_array(src, open_idx):
    """Return index just past the matching ] for the [ at open_idx, skipping strings."""
    assert src[open_idx] in '[{'
    depth = 0
    i = open_idx
    n = len(src)
    while i < n:
        c = src[i]
        if c in "'\"`":
            quote = c
            i += 1
            while i < n:
                if src[i] == '\\':
                    i += 2
                    continue
                if src[i] == quote:
                    break
                i += 1
            i += 1
            continue
        if c in '[{':
            depth += 1
        elif c in ']}':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError('unbalanced array')


def entry_bounds(src, slug):
    """Locate the top-level city object for a slug."""
    for pat in (f"slug: '{slug}'", f'"slug": "{slug}"'):
        for m in re.finditer(re.escape(pat), src):
            # only a top-level slug key sits at 4-space indent right after "  {\n"
            line_start = src.rfind('\n', 0, m.start()) + 1
            if src[line_start:m.start()] != '    ':
                continue
            start = src.rfind('\n  {\n', 0, line_start)
            if start == -1:
                continue
            start += 1
            end = scan_array(src, src.index('{', start))
            return start, end + 1
    raise KeyError(slug)


def q(text, style):
    if style == 'double':
        return '"' + text.replace('\\', '\\\\').replace('"', '\\"') + '"'
    return "'" + text.replace('\\', '\\\\').replace("'", "\\'") + "'"


def render_sections(items, style, indent='      '):
    k = (lambda s: f'"{s}"') if style == 'double' else (lambda s: s)
    out = []
    for it in items:
        lines = [f'{indent}{{', f'{indent}  {k("heading")}: {q(it["heading"], style)},',
                 f'{indent}  {k("paragraphs")}: [']
        for p in it['paragraphs']:
            lines.append(f'{indent}    {q(p, style)},')
        lines += [f'{indent}  ],', f'{indent}}},']
        out.append('\n'.join(lines))
    return '\n'.join(out)


def render_faqs(items, style, indent='      '):
    k = (lambda s: f'"{s}"') if style == 'double' else (lambda s: s)
    out = []
    for it in items:
        out.append('\n'.join([
            f'{indent}{{',
            f'{indent}  {k("question")}: {q(it["question"], style)},',
            f'{indent}  {k("answer")}: {q(it["answer"], style)},',
            f'{indent}}},',
        ]))
    return '\n'.join(out)


def append_to_array(entry, key, block):
    """Append rendered objects before the closing ] of entry[key]."""
    m = re.search(r'(?:\n    ' + key + r': \[|\n    "' + key + r'": \[)', entry)
    if not m:
        return None
    open_idx = entry.index('[', m.start())
    close_idx = scan_array(entry, open_idx)
    head = entry[:close_idx]
    # some existing entries omit the trailing comma on their last element;
    # appending straight after it produces `}\n{`, which esbuild rejects even
    # though tsc --noEmit lets it pass.
    if head.rstrip().endswith('}'):
        head = head.rstrip() + ',\n'
    return head + block + '\n    ' + entry[close_idx:]


def create_array(entry, key, block, style, after_key):
    """Insert a brand new sections: [...] array after another top-level key."""
    k = f'"{key}"' if style == 'double' else key
    m = re.search(r'\n    (?:' + after_key + r'|"' + after_key + r'"): \[', entry)
    open_idx = entry.index('[', m.start())
    close_idx = scan_array(entry, open_idx)
    tail_nl = entry.index('\n', close_idx)
    inject = f'\n    {k}: [\n{block}\n    ],'
    return entry[:tail_nl] + inject + entry[tail_nl:]


def apply(slug, sections=None, faqs=None, replacements=None):
    src = open(PATH, encoding='utf-8').read()
    start, end = entry_bounds(src, slug)
    entry = src[start:end]
    style = 'double' if '"slug":' in entry.split('\n')[1] else 'single'

    if replacements:
        for old, new in replacements:
            if old not in entry:
                raise ValueError(f'{slug}: replacement target not found: {old[:70]}')
            entry = entry.replace(old, new, 1)

    if faqs:
        block = render_faqs(faqs, style)
        out = append_to_array(entry, 'faqs', block)
        entry = out if out is not None else create_array(entry, 'faqs', block, style, 'highlights')

    if sections:
        block = render_sections(sections, style)
        out = append_to_array(entry, 'sections', block)
        entry = out if out is not None else create_array(entry, 'sections', block, style, 'faqs')

    open(PATH, 'w', encoding='utf-8').write(src[:start] + entry + src[end:])
    print(f'{slug}: +{len(sections or [])} sections, +{len(faqs or [])} faqs, style={style}')


if __name__ == '__main__':
    print(entry_bounds(open(PATH, encoding='utf-8').read(), sys.argv[1]))
