import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import PullToRefresh from '../components/PullToRefresh';
import LazyImage from '../components/LazyImage';
import MobileSearch from '../components/MobileSearch';

const Blog: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  // Sample blog data
  const featuredPost = {
    id: "1",
    title: "The Rising Threat of Ransomware and How to Protect Your Organization",
    excerpt: "Ransomware attacks have increased by 150% in the last year. Learn how your organization can implement effective defenses against this growing threat.",
    date: "May 15, 2023",
    author: "Elena Rodriguez",
    category: "Threat Intelligence",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ransomware", "Threat Protection", "Security Strategy"]
  };

  const recentPosts = [
    {
      id: "2",
      title: "Zero Trust Security: Beyond the Buzzword",
      excerpt: "Zero Trust is more than just a security model—it's a comprehensive approach to protecting your most valuable assets.",
      date: "April 28, 2023",
      author: "Michael Lee",
      category: "Security Strategy",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
      tags: ["Zero Trust", "Network Security"]
    },
    {
      id: "3",
      title: "Cloud Security Best Practices for 2023",
      excerpt: "As more organizations migrate to the cloud, understanding these security best practices is essential for protecting your data.",
      date: "April 15, 2023",
      author: "Sarah Johnson",
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      tags: ["Cloud Security", "AWS", "Azure"]
    },
    {
      id: "4",
      title: "The Role of AI in Modern Cybersecurity",
      excerpt: "Artificial intelligence is transforming how we detect and respond to threats. Here's how AI is changing the security landscape.",
      date: "March 22, 2023",
      author: "David Kim",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      tags: ["AI", "Machine Learning", "Threat Detection"]
    },
    {
      id: "5",
      title: "Securing Your Remote Workforce",
      excerpt: "With remote work becoming permanent for many organizations, addressing these security challenges is more important than ever.",
      date: "March 10, 2023",
      author: "Jessica Martinez",
      category: "Business Security",
      image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&w=600&q=80",
      tags: ["Remote Work", "VPN", "Endpoint Security"]
    },
    {
      id: "6",
      title: "GDPR Compliance: What You Need to Know in 2023",
      excerpt: "Stay up to date with the latest GDPR requirements and how they impact your organization's data handling practices.",
      date: "February 28, 2023",
      author: "Thomas Anderson",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
      tags: ["GDPR", "Compliance", "Data Privacy"]
    }
  ];

  const categories = [
    { name: "Threat Intelligence", count: 18 },
    { name: "Cloud Security", count: 12 },
    { name: "Security Strategy", count: 9 },
    { name: "Technology", count: 14 },
    { name: "Compliance", count: 8 },
    { name: "Business Security", count: 11 }
  ];

  const popularTags = [
    "Ransomware", "Cloud Security", "Zero Trust", "AI", "Compliance", 
    "GDPR", "Remote Work", "Threat Intelligence", "Data Privacy"
  ];

  // Handle refresh for mobile pull-to-refresh
  const handleRefresh = async () => {
    setIsRefreshing(true);
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would fetch fresh data here
    setIsRefreshing(false);
  };

  // Create searchItems for mobile search
  const searchItems = [
    { 
      title: featuredPost.title, 
      path: `/blog/${featuredPost.id}`,
      description: featuredPost.excerpt,
      keywords: featuredPost.tags
    },
    ...recentPosts.map(post => ({
      title: post.title,
      path: `/blog/${post.id}`,
      description: post.excerpt,
      keywords: post.tags
    }))
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Security Insights</h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              The latest cybersecurity news, trends, and expert insights to help protect your organization.
            </p>
            <div className="max-w-xl mx-auto relative md:block hidden">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pr-12 rounded-lg border border-transparent focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="md:hidden">
              <button 
                className="bg-white text-red-600 px-5 py-3 rounded-lg font-medium flex items-center justify-center mx-auto"
              >
                <Search className="h-5 w-5 mr-2" /> Search Articles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <LazyImage 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`} 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  Read article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Recent Articles</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                All Posts
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                Most Popular
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/blog/${post.id}`} className="block">
                  <LazyImage 
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
                    {post.excerpt}
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

          <div className="mt-12 text-center">
            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar and Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Subscribe to Our Newsletter</h2>
              <div className="bg-slate-50 rounded-2xl p-8">
                <p className="text-gray-600 mb-6">
                  Stay up to date with the latest cybersecurity insights, trends, and news. 
                  Our weekly newsletter delivers expert analysis straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none"
                  />
                  <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <ul className="space-y-3">
                  {categories.map(category => (
                    <li key={category.name}>
                      <a href="#" className="flex items-center justify-between py-2 text-gray-700 hover:text-red-600 transition-colors">
                        <span>{category.name}</span>
                        <span className="bg-white px-2 py-1 rounded-full text-xs text-gray-500">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h2>
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <a
                      key={tag}
                      href="#"
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white text-gray-700 text-sm font-medium hover:bg-red-100 hover:text-red-600 transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" /> {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Expert Security Advice?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Our team of cybersecurity experts is ready to help you secure your organization.
              Schedule a free consultation today.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Mobile search button (fixed to bottom right for mobile only) */}
      <div className="fixed bottom-24 right-4 md:hidden z-40">
        <MobileSearch searchItems={searchItems} />
      </div>
    </PullToRefresh>
  );
};

export default Blog; 