import React from 'react';
import { 
  FileText, 
  Download, 
  BookOpen, 
  Video, 
  Calendar, 
  ArrowRight, 
  Search, 
  Filter, 
  ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'whitepaper' | 'webinar' | 'video';
  date: string;
  image: string;
  link: string;
  featured?: boolean;
}

const Resources = () => {
  const resources: ResourceItem[] = [
    {
      id: "1",
      title: "The Complete Guide to Zero Trust Security",
      description: "Learn how to implement Zero Trust architecture in your organization with this comprehensive guide.",
      type: "guide",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
      link: "/resources/1",
      featured: true
    },
    {
      id: "2",
      title: "Threat Intelligence in the Modern Enterprise",
      description: "A detailed whitepaper on leveraging threat intelligence to improve security posture.",
      type: "whitepaper",
      date: "May 22, 2023",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
      link: "/resources/2"
    },
    {
      id: "3",
      title: "Ransomware Protection Strategies",
      description: "Essential strategies to protect your organization from the growing ransomware threat.",
      type: "guide",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
      link: "/resources/3"
    },
    {
      id: "4",
      title: "Cloud Security Best Practices",
      description: "Critical security considerations when migrating to and operating in the cloud.",
      type: "whitepaper",
      date: "March 28, 2023",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      link: "/resources/4"
    },
    {
      id: "5",
      title: "The Future of Security Operations Centers",
      description: "On-demand webinar discussing next-generation SOC capabilities and operations.",
      type: "webinar",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      link: "/resources/5"
    },
    {
      id: "6",
      title: "Securing the Software Supply Chain",
      description: "Learn how to identify and mitigate risks in your software supply chain.",
      type: "guide",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
      link: "/resources/6"
    },
    {
      id: "7",
      title: "Advanced Persistent Threats: Detection & Response",
      description: "Technical deep dive into APT tactics and effective countermeasures.",
      type: "video",
      date: "February 12, 2023",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
      link: "/resources/7"
    },
    {
      id: "8",
      title: "CISO's Guide to Compliance Frameworks",
      description: "Navigate complex compliance requirements with this executive-level overview.",
      type: "whitepaper",
      date: "January 30, 2023",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
      link: "/resources/8"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="h-5 w-5 text-green-500" />;
      case 'whitepaper':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'webinar':
        return <Video className="h-5 w-5 text-purple-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Security Resource Center
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Access our library of guides, whitepapers, webinars, and tools to enhance your security knowledge and capabilities.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="Search resources by keyword..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                All Resources
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Guides
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Whitepapers
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Webinars
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Videos
              </button>
            </div>
            
            <div>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Sort by: Newest <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resource */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80 md:h-96 w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80" 
            alt="Featured Resource" 
            className="w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="flex items-center mb-4">
            <BookOpen className="h-5 w-5 text-green-400 mr-2" />
            <span className="text-sm text-green-400 font-medium">Guide</span>
            <span className="mx-2 text-white/40">•</span>
            <Calendar className="h-4 w-4 text-white/60 mr-1.5" />
            <span className="text-sm text-white/60">June 15, 2023</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">The Complete Guide to Zero Trust Security</h3>
          <p className="text-white/80 mb-6 max-w-2xl">
            Learn how to implement Zero Trust architecture in your organization with this comprehensive guide covering principles, technologies, and implementation strategies.
          </p>
          <Link 
            to="/resources/1" 
            className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
          >
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.filter(r => !r.featured).map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Security Insights</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest research, guides, and security best practices delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                className="block w-full rounded-l-lg border-0 py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="bg-red-600 px-6 py-3 text-white font-medium rounded-r-lg hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ resource }: { resource: ResourceItem }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="h-5 w-5 text-green-500" />;
      case 'whitepaper':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'webinar':
        return <Video className="h-5 w-5 text-purple-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center">
            {getIcon(resource.type)}
            <span className="ml-1.5 text-sm text-gray-600 capitalize">{resource.type}</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1.5" />
            {resource.date}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
        <p className="text-gray-600 mb-4">
          {resource.description}
        </p>
        <Link
          to={resource.link}
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Resources; 