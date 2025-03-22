import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Share2, Clock, ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent } from '../components/AnalyticsTracker';
import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import LazyImage from '../components/LazyImage';
import SwipeContainer from '../components/SwipeContainer';
import { allBlogPosts } from './BlogData';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(allBlogPosts.find(post => post.id === id));
  const [relatedPosts, setRelatedPosts] = useState<typeof allBlogPosts>([]);
  const [prevPost, setPrevPost] = useState<typeof allBlogPosts | null>(null);
  const [nextPost, setNextPost] = useState<typeof allBlogPosts | null>(null);
  
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
                <LazyImage 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <SwipeContainer
            prevPath={prevPost ? `/blog/${prevPost.id}` : undefined}
            nextPath={nextPost ? `/blog/${nextPost.id}` : undefined}
          >
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
                          <Link
                            key={tag}
                            to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-red-100 hover:text-red-600 transition-colors"
                          >
                            <Tag className="h-3 w-3 mr-1" /> {tag}
                          </Link>
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
                        <LazyImage 
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
                      <Link 
                        to={`/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block w-full py-2 px-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors"
                      >
                        View all articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwipeContainer>

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