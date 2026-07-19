import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { GuideLink } from '../data/guideLinks';

interface RelatedGuidesProps {
  heading?: string;
  intro?: string;
  guides: GuideLink[];
}

const RelatedGuides: React.FC<RelatedGuidesProps> = ({
  heading = 'Guides From Our Team',
  intro,
  guides,
}) => {
  if (!guides.length) return null;
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
          {intro && <p className="text-gray-600 max-w-2xl mx-auto">{intro}</p>}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g) => (
            <Link
              key={g.href}
              to={g.href}
              className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-shadow block"
            >
              <BookOpen className="h-6 w-6 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">{g.title}</h3>
              <span className="inline-flex items-center text-red-600 font-medium text-sm">
                Read the guide <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedGuides;
