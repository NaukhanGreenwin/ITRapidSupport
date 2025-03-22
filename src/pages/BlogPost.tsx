import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Share2, Clock, ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent } from '../components/AnalyticsTracker';
import PageTransition from '../components/PageTransition';

// All blog posts data - in a real app this would come from an API or database
const allBlogPosts = [
  {
    id: "1",
    title: "The Rising Threat of Ransomware and How to Protect Your Organization",
    content: [
      "Ransomware attacks have increased by 150% in the last year, with organizations of all sizes falling victim to these devastating cyber threats. The average ransom payment has also increased, now exceeding $200,000 per incident, with some demands reaching millions of dollars.",
      "But the ransom itself is only part of the cost. Organizations face significant downtime, recovery expenses, and potential reputational damage that can far exceed the ransom amount. Understanding this evolving threat landscape is essential for developing effective protection strategies.",
      "## What Makes Ransomware So Dangerous",
      "Modern ransomware attacks have evolved into sophisticated operations, often employing a double-extortion model where criminals not only encrypt data but first exfiltrate it and threaten to publish sensitive information. This tactic puts pressure on organizations to pay even if they have proper backups.",
      "Ransomware groups are also increasingly targeting critical infrastructure and essential services, as seen in high-profile attacks against healthcare organizations, fuel pipelines, and food suppliers. These attacks have demonstrated the potential for real-world harm beyond just financial damage.",
      "## Effective Protection Strategies",
      "While no security approach can guarantee complete protection, organizations can significantly reduce their risk by implementing a comprehensive security strategy:",
      "### 1. Maintain Robust Backup Systems",
      "Implement the 3-2-1 backup rule: maintain three copies of your data on two different media types with one copy stored off-site. Regularly test your backup restoration processes to ensure they work when needed.",
      "### 2. Implement Zero Trust Security",
      "Move beyond traditional perimeter-based security to a Zero Trust model that verifies every user and device attempting to access your resources, regardless of location.",
      "### 3. Deploy Advanced Endpoint Protection",
      "Modern endpoint protection solutions use behavioral analysis and machine learning to detect and block ransomware before it can encrypt your files.",
      "### 4. Conduct Regular Security Training",
      "Employees remain the first line of defense. Regular security awareness training helps staff recognize phishing attempts and other social engineering tactics used to deliver ransomware.",
      "### 5. Develop an Incident Response Plan",
      "Create and regularly test a comprehensive incident response plan that details exactly how your organization will respond to a ransomware attack.",
      "## The Role of Government and Industry Cooperation",
      "Recent initiatives from government agencies are helping organizations combat ransomware. The Cybersecurity and Infrastructure Security Agency (CISA) has published detailed ransomware guides and the FBI's Internet Crime Complaint Center provides valuable threat intelligence.",
      "Industry partnerships are also emerging to share threat intelligence and best practices. These collaborative efforts are essential in the fight against increasingly sophisticated criminal organizations.",
      "## Conclusion",
      "As ransomware continues to evolve, organizations must adopt a proactive security posture. By implementing a defense-in-depth strategy and staying informed about emerging threats, you can significantly reduce your risk of becoming the next ransomware victim.",
      "Remember that prevention is always less costly than recovery. Investing in robust security measures today can protect your organization from potentially devastating attacks tomorrow."
    ].join('\n\n'),
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Elena Rodriguez",
    authorTitle: "Chief Security Analyst",
    authorImage: "https://randomuser.me/api/portraits/women/23.jpg",
    category: "Threat Intelligence",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ransomware", "Threat Protection", "Security Strategy", "Zero Trust"]
  },
  {
    id: "2",
    title: "Zero Trust Security: Beyond the Buzzword",
    content: [
      "Zero Trust is more than just a security model—it's a comprehensive approach to protecting your most valuable assets in today's complex digital landscape.",
      "The traditional security model of 'trust but verify' is no longer sufficient in an era where perimeters are dissolving and threats can come from both inside and outside an organization.",
      "## The Core Principles of Zero Trust",
      "At its core, Zero Trust operates on the principle of 'never trust, always verify.' This means treating every access request as though it originates from an untrusted network, regardless of whether it comes from inside or outside your corporate perimeter.",
      "Key components of a Zero Trust architecture include:",
      "### 1. Verify explicitly",
      "Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.",
      "### 2. Use least privilege access",
      "Limit user access with Just-In-Time and Just-Enough-Access to protect both data and productivity.",
      "### 3. Assume breach",
      "Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to improve defenses."
    ].join('\n\n'),
    date: "April 28, 2023",
    readTime: "6 min read",
    author: "Michael Lee",
    authorTitle: "Network Security Architect",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Security Strategy",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    tags: ["Zero Trust", "Network Security", "Identity Management"]
  },
  {
    id: "3",
    title: "Cloud Security Best Practices for 2023",
    content: [
      "As more organizations migrate to the cloud, understanding these security best practices is essential for protecting your data and applications.",
      "Cloud computing offers tremendous benefits in terms of scalability, cost-efficiency, and flexibility, but it also introduces new security challenges that organizations must address.",
      "## Key Cloud Security Best Practices",
      "### 1. Implement Strong Identity and Access Management",
      "Use multi-factor authentication (MFA) for all users, especially privileged accounts. Implement the principle of least privilege and regularly review and remove unused accounts and excessive permissions.",
      "### 2. Encrypt Data at Rest and in Transit",
      "Ensure all sensitive data is encrypted both when stored and when moving between services. Manage encryption keys carefully and consider using customer-managed keys where possible.",
      "### 3. Secure Your Cloud Configuration",
      "Misconfigurations are one of the leading causes of cloud security incidents. Use cloud security posture management (CSPM) tools to continuously scan for and remediate misconfigurations.",
      "### 4. Monitor Cloud Environments",
      "Implement comprehensive logging and monitoring across all cloud services. Use cloud-native security tools along with third-party solutions to gain visibility into potential threats."
    ].join('\n\n'),
    date: "April 15, 2023",
    readTime: "7 min read",
    author: "Sarah Johnson",
    authorTitle: "Cloud Security Specialist",
    authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
    category: "Cloud Security",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    tags: ["Cloud Security", "AWS", "Azure", "Data Protection"]
  },
  {
    id: "4",
    title: "The Role of AI in Modern Cybersecurity",
    content: [
      "Artificial intelligence is transforming how we detect and respond to threats. Here's how AI is changing the security landscape.",
      "As cyber threats grow in sophistication and volume, traditional security approaches struggle to keep pace. AI and machine learning technologies offer powerful new capabilities to enhance detection and response.",
      "## How AI is Transforming Cybersecurity",
      "### 1. Advanced Threat Detection",
      "AI systems can analyze vast amounts of data to identify patterns and anomalies that might indicate a security threat, often detecting novel attacks that signature-based systems would miss.",
      "### 2. Automated Response Capabilities",
      "When threats are detected, AI can automatically initiate response actions, containing threats in real-time before significant damage occurs.",
      "### 3. Reducing Alert Fatigue",
      "By consolidating and prioritizing alerts, AI helps security teams focus on genuine threats rather than being overwhelmed by false positives."
    ].join('\n\n'),
    date: "March 22, 2023",
    readTime: "5 min read",
    author: "David Kim",
    authorTitle: "AI Security Researcher",
    authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    tags: ["AI", "Machine Learning", "Threat Detection"]
  },
  {
    id: "5",
    title: "Securing Your Remote Workforce",
    content: [
      "With remote work becoming permanent for many organizations, addressing these security challenges is more important than ever.",
      "The rapid shift to remote work has expanded the attack surface for many organizations, creating new security challenges that require innovative solutions.",
      "## Key Remote Work Security Challenges",
      "### 1. Unsecured Home Networks",
      "Home networks typically lack the security controls present in corporate environments, making them more vulnerable to compromise.",
      "### 2. Personal Device Usage",
      "When employees use personal devices for work (BYOD), organizations have less control over the security of these endpoints.",
      "### 3. Increased Phishing Attacks",
      "Remote workers are prime targets for phishing attacks that exploit COVID-19 concerns and remote work themes."
    ].join('\n\n'),
    date: "March 10, 2023",
    readTime: "6 min read",
    author: "Jessica Martinez",
    authorTitle: "Remote Security Expert",
    authorImage: "https://randomuser.me/api/portraits/women/63.jpg",
    category: "Business Security",
    image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&w=600&q=80",
    tags: ["Remote Work", "VPN", "Endpoint Security"]
  },
  {
    id: "6",
    title: "GDPR Compliance: What You Need to Know in 2023",
    content: [
      "Stay up to date with the latest GDPR requirements and how they impact your organization's data handling practices.",
      "Five years after its implementation, the General Data Protection Regulation (GDPR) continues to evolve through court decisions, regulatory guidance, and enforcement actions.",
      "## Recent GDPR Developments",
      "### 1. Increased Enforcement Activity",
      "Regulatory authorities are stepping up enforcement, with larger fines being imposed for violations. Organizations must ensure their compliance measures are robust and up-to-date.",
      "### 2. International Data Transfers",
      "Following the Schrems II decision, requirements for transferring data outside the EU have become more stringent. Organizations must implement additional safeguards when using standard contractual clauses.",
      "### 3. The Right to Be Forgotten",
      "Recent court decisions have clarified the scope of the right to erasure, balancing privacy rights against other legitimate interests."
    ].join('\n\n'),
    date: "February 28, 2023",
    readTime: "7 min read",
    author: "Thomas Anderson",
    authorTitle: "Privacy Compliance Officer",
    authorImage: "https://randomuser.me/api/portraits/men/91.jpg",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
    tags: ["GDPR", "Compliance", "Data Privacy"]
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(allBlogPosts.find(post => post.id === id));
  const [relatedPosts, setRelatedPosts] = useState<typeof allBlogPosts>([]);
  
  useEffect(() => {
    // Find current post
    const currentPost = allBlogPosts.find(post => post.id === id);
    setPost(currentPost);
    
    // Get related posts (excluding current)
    if (currentPost) {
      const related = allBlogPosts
        .filter(p => p.id !== id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRelatedPosts(related);
      
      // Track blog post view
      trackEvent('blog_post_view', {
        post_id: currentPost.id,
        post_title: currentPost.title,
        post_author: currentPost.author
      });
    }
  }, [id]);
  
  const generateBlogPostSchema = () => {
    if (!post) return null;
    
    // Calculate reading time based on word count (average reading speed: 200 words per minute)
    const wordCount = post.content.join(" ").split(" ").length;
    const readingTimeMinutes = Math.ceil(wordCount / 200);
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.image,
      "wordcount": wordCount,
      "timeRequired": `PT${readingTimeMinutes}M`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://itrapidsupport.com/blog/${post.id}`
      },
      "publisher": {
        "@type": "Organization",
        "name": "IT Rapid Support",
        "logo": {
          "@type": "ImageObject",
          "url": "https://itrapidsupport.com/ITRapid-logo.svg",
          "width": 600,
          "height": 60
        }
      },
      "url": `https://itrapidsupport.com/blog/${post.id}`,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": `https://itrapidsupport.com/team/${post.author.toLowerCase().replace(/\s+/g, '-')}`
      },
      "description": post.content[0].substring(0, 150) + "...",
      "keywords": post.tags.join(", "),
      "articleSection": "IT Security",
      "discussionUrl": `https://itrapidsupport.com/blog/${post.id}#comments`
    };
  };
  
  const generateBreadcrumbList = () => {
    if (!post) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://itrapidsupport.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://itrapidsupport.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://itrapidsupport.com/blog/${post.id}`
        }
      ]
    };
  };
  
  if (!post) {
    return <div className="py-20 text-center">Post not found</div>;
  }

  return (
    <PageTransition>
      {post ? (
        <>
          <SEO 
            title={post.title}
            description={post.content[0].substring(0, 150) + "..."}
            keywords={post.tags.join(", ")}
            ogType="article"
            ogImage={post.image}
            schema={generateBlogPostSchema()}
            publishedDate={post.date}
            author={post.author}
            articleTags={post.tags}
            breadcrumbs={[
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${post.id}` }
            ]}
          />
          
          {/* Hero Section */}
          <div className="pt-20 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
              <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to all articles
              </Link>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center text-white/80 gap-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative -mt-6">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-full rounded-t-3xl overflow-hidden shadow-xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="prose prose-lg max-w-none prose-red">
                    {post.content.split('\n\n').map((paragraph: string, index: number) => {
                      if (paragraph.startsWith('## ')) {
                        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                      } else if (paragraph.startsWith('### ')) {
                        return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                      } else {
                        return <p key={index} className="mb-4 text-gray-700">{paragraph}</p>;
                      }
                    })}
                  </div>

                  {/* Tags */}
                  <div className="mt-10 pt-10 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <a
                          key={tag}
                          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-red-100 hover:text-red-600 transition-colors"
                        >
                          <Tag className="h-3 w-3 mr-1" /> {tag}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-8">
                    <p className="text-gray-700 font-medium mb-3">Share this article</p>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => {
                          // Share logic
                          trackEvent('blog_post_share', {
                            post_id: post.id,
                            post_title: post.title,
                            share_method: 'button'
                          });
                        }}
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author Section */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
                    <div className="text-center mb-4">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                      />
                      <h3 className="text-lg font-bold text-gray-900">{post.author}</h3>
                      <p className="text-gray-600">{post.authorTitle}</p>
                    </div>
                    <p className="text-gray-700 text-sm mb-6">
                      {post.author} is a cybersecurity expert with over 15 years of experience
                      in threat intelligence and incident response. They regularly advise
                      Fortune 500 companies on security strategy.
                    </p>
                    <a 
                      href="#" 
                      className="block w-full py-2 px-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors"
                    >
                      View all articles
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles Section */}
          <div className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Recent Articles</h2>
                <div className="flex space-x-4">
                  <Link to="/blog" className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                    All Posts
                  </Link>
                  <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                    Most Popular
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Link to={`/blog/${post.id}`} className="block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="block">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">
                        {post.content.split('\n\n')[0].substring(0, 120)}...
                      </p>
                      <div className="flex items-center text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span className="text-sm">{post.author}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Need Expert Security Advice?</h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                  Our team of cybersecurity experts is ready to help you secure your organization.
                  Schedule a free consultation today.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="py-20 text-center">Loading...</div>
      )}
    </PageTransition>
  );
};

export default BlogPost; 