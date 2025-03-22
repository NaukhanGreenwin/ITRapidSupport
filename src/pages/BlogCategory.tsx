import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { allBlogPosts } from './BlogData';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import PageTransition from '../components/PageTransition';

const BlogCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<any[]>([]);
  const [decodedCategory, setDecodedCategory] = useState('');
  
  useEffect(() => {
    if (category) {
      // Convert URL format to human-readable
      const formattedCategory = category.replace(/-/g, ' ');
      setDecodedCategory(formattedCategory);
      
      // Filter posts by category (case insensitive)
      const filteredPosts = allBlogPosts.filter(post => 
        post.category.toLowerCase() === formattedCategory.toLowerCase()
      );
      
      setPosts(filteredPosts);
    }
  }, [category]);
  
  return (
    <PageTransition>
      <SEO 
        title={`${decodedCategory} Articles | IT Rapid Support`}
        description={`Browse our articles about ${decodedCategory} and learn more about cybersecurity best practices.`}
      />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {decodedCategory} Articles
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Browse our articles about {decodedCategory} and learn more about cybersecurity best practices.
            </p>
          </div>
        </div>
      </div>
      
      {/* Articles Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map(post => (
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
                      {typeof post.content === 'string' 
                        ? post.content.substring(0, 120) + '...' 
                        : post.content[0].substring(0, 120) + '...'}
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-700 mb-4">No articles found in this category</h3>
              <Link to="/blog" className="text-red-600 hover:text-red-700 font-medium">
                Back to all articles
              </Link>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogCategory; 