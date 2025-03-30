import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, BookOpen, FileText, Video, ChevronLeft, ArrowRight, User, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Resource types
interface ResourceItem {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'guide' | 'whitepaper' | 'webinar' | 'video';
  date: string;
  author: string;
  authorTitle: string;
  authorImage: string;
  image: string;
  link: string;
  featured?: boolean;
  readTime?: string;
}

// All resources data - in a real app this would come from an API or database
const allResources: ResourceItem[] = [
  {
    id: "1",
    title: "The Complete Guide to Zero Trust Security",
    description: "Learn how to implement Zero Trust architecture in your organization with this comprehensive guide.",
    content: [
      "Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside their perimeters and instead must verify anything and everything trying to connect to their systems before granting access.",
      "This guide explores how organizations can effectively implement Zero Trust architecture to protect their valuable assets in today's complex threat landscape.",
      "## Understanding Zero Trust Security",
      "The concept of Zero Trust was first introduced by John Kindervag while he was at Forrester Research. The premise is simple: organizations should not automatically trust any entity, regardless of whether it's inside or outside the network perimeter.",
      "Traditional security models operate on the assumption that everything inside an organization's network should be trusted. However, the proliferation of cloud services, mobile devices, and remote work has effectively eliminated the traditional network perimeter, making this approach outdated and dangerous.",
      "## Core Principles of Zero Trust",
      "### 1. Verify Explicitly",
      "Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.",
      "### 2. Use Least Privilege Access",
      "Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.",
      "### 3. Assume Breach",
      "Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.",
      "## Implementing Zero Trust in Your Organization",
      "Implementing a Zero Trust model is not a single product or platform but rather a strategic approach that incorporates various technologies and processes. Here's a roadmap for implementation:",
      "### Step 1: Define Your Protect Surface",
      "Identify the critical data, applications, assets, and services (DAAS) that need protection. This is your protect surface, which is much smaller and more focused than the traditional attack surface.",
      "### Step 2: Map Transaction Flows",
      "Understand how traffic moves across your network. Determine how specific resources interact with other resources on your network to establish proper controls.",
      "### Step 3: Build a Zero Trust Architecture",
      "Design your network with Zero Trust in mind, placing controls close to the protect surface. This often involves implementing a microperimeter around the protect surface, creating what's known as a segmentation gateway.",
      "### Step 4: Create Zero Trust Policies",
      "Establish rules that determine who can access which resources under what circumstances. These policies should follow the principle of least privilege and be as granular as possible."
    ].join('\n\n'),
    type: "guide",
    date: "June 15, 2023",
    author: "Alex Johnson",
    authorTitle: "Security Architect",
    authorImage: "https://randomuser.me/api/portraits/men/41.jpg",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    link: "#",
    featured: true,
    readTime: "10 min read"
  },
  {
    id: "2",
    title: "Threat Intelligence in the Modern Enterprise",
    description: "A detailed whitepaper on leveraging threat intelligence to improve security posture.",
    content: [
      "This whitepaper explores how organizations can effectively harness threat intelligence to strengthen their security posture and defend against evolving cyber threats.",
      "Today's cybersecurity landscape is characterized by increasingly sophisticated threats. Organizations need robust threat intelligence capabilities to stay ahead of malicious actors.",
      "## What is Threat Intelligence?",
      "Threat intelligence is evidence-based knowledge, including context, mechanisms, indicators, implications, and action-oriented advice about existing or emerging threats to assets that can be used to inform decisions regarding the subject's response to those threats.",
      "## The Threat Intelligence Lifecycle",
      "### 1. Planning and Direction",
      "Identify intelligence requirements and determine what information is needed to address specific security concerns.",
      "### 2. Collection",
      "Gather raw data from various sources, including open-source intelligence, commercial feeds, industry reports, and internal security tools.",
      "### 3. Processing",
      "Convert raw data into a format suitable for analysis, often involving normalization, deduplication, and initial filtering.",
      "### 4. Analysis",
      "Examine processed data to identify patterns, trends, and relationships, and to develop insights into threat actors, their motivations, and their tactics."
    ].join('\n\n'),
    type: "whitepaper",
    date: "May 22, 2023",
    author: "Sarah Wilson",
    authorTitle: "Threat Intelligence Analyst",
    authorImage: "https://randomuser.me/api/portraits/women/67.jpg",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "12 min read"
  },
  {
    id: "3",
    title: "Ransomware Protection Strategies",
    description: "Essential strategies to protect your organization from the growing ransomware threat.",
    content: [
      "Ransomware attacks have become one of the most prevalent and damaging cyber threats facing organizations today. This guide provides comprehensive strategies to help protect your organization.",
      "## Understanding the Ransomware Threat",
      "Ransomware is a type of malicious software designed to block access to a computer system or data until a sum of money is paid. The evolving nature of ransomware attacks makes them particularly challenging to defend against.",
      "## Essential Protection Strategies",
      "### 1. Maintain Robust Backup Systems",
      "Implement the 3-2-1 backup rule: maintain three copies of your data on two different media types with one copy stored off-site. Regularly test your backup restoration processes to ensure they work when needed.",
      "### 2. Keep Systems Updated",
      "Ensure all operating systems, applications, and firmware are regularly updated with the latest security patches. Unpatched vulnerabilities are common entry points for ransomware.",
      "### 3. Implement Email Security",
      "Since phishing emails are a primary ransomware delivery mechanism, deploy robust email security solutions that can detect and block malicious attachments and links."
    ].join('\n\n'),
    type: "guide",
    date: "April 10, 2023",
    author: "Michael Chen",
    authorTitle: "Cybersecurity Consultant",
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "8 min read"
  },
  {
    id: "4",
    title: "Cloud Security Best Practices",
    description: "Critical security considerations when migrating to and operating in the cloud.",
    content: [
      "As organizations continue to migrate to the cloud, understanding and implementing robust security practices becomes increasingly important. This whitepaper outlines essential cloud security best practices.",
      "## The Shared Responsibility Model",
      "Cloud security operates on a shared responsibility model, where the cloud provider secures the infrastructure, and customers are responsible for securing their data and applications.",
      "## Key Security Best Practices",
      "### 1. Identity and Access Management",
      "Implement strong IAM policies using the principle of least privilege. Use multi-factor authentication for all privileged accounts and consider just-in-time access for administrative functions.",
      "### 2. Data Protection",
      "Encrypt sensitive data both at rest and in transit. Implement proper key management practices and consider using customer-managed keys for critical data.",
      "### 3. Network Security",
      "Segment cloud networks using security groups, VPCs, and NACLs. Implement DDoS protection and web application firewalls for public-facing applications."
    ].join('\n\n'),
    type: "whitepaper",
    date: "March 28, 2023",
    author: "Jennifer Lopez",
    authorTitle: "Cloud Security Architect",
    authorImage: "https://randomuser.me/api/portraits/women/28.jpg",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "15 min read"
  },
  {
    id: "5",
    title: "The Future of Security Operations Centers",
    description: "On-demand webinar discussing next-generation SOC capabilities and operations.",
    content: [
      "This webinar explores how Security Operations Centers (SOCs) are evolving to meet the challenges of today's threat landscape and what capabilities will be essential in the future.",
      "## Traditional SOC Limitations",
      "Many traditional SOCs struggle with alert fatigue, skill shortages, and the inability to detect sophisticated threats. These limitations are driving the evolution toward next-generation capabilities.",
      "## Next-Generation SOC Capabilities",
      "### 1. AI and Machine Learning Integration",
      "Advanced analytics can help identify patterns and anomalies that human analysts might miss, reducing false positives and accelerating threat detection.",
      "### 2. Automated Response",
      "Implementing automated response capabilities for common threats allows SOC teams to focus on more complex security challenges.",
      "### 3. Threat Intelligence Integration",
      "Incorporating threat intelligence into SOC operations provides context for security events and helps prioritize responses based on relevant threats."
    ].join('\n\n'),
    type: "webinar",
    date: "March 15, 2023",
    author: "David Park",
    authorTitle: "SOC Manager",
    authorImage: "https://randomuser.me/api/portraits/men/52.jpg",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "45 min watch"
  },
  {
    id: "6",
    title: "Securing the Software Supply Chain",
    description: "Learn how to identify and mitigate risks in your software supply chain.",
    content: [
      "Recent high-profile attacks have highlighted the importance of securing the software supply chain. This guide provides strategies to identify and mitigate risks throughout the development lifecycle.",
      "## Understanding Supply Chain Risks",
      "The software supply chain includes all components, libraries, tools, and processes used in developing and delivering software. Attacks can target any point in this chain, making comprehensive security essential.",
      "## Key Protection Strategies",
      "### 1. Inventory All Components",
      "Maintain a comprehensive inventory of all software components, including third-party libraries and open-source dependencies. Use Software Composition Analysis (SCA) tools to automate this process.",
      "### 2. Implement Secure Development Practices",
      "Integrate security throughout the development lifecycle with DevSecOps practices. This includes secure coding standards, automated security testing, and regular code reviews.",
      "### 3. Verify Code Integrity",
      "Use code signing to verify the integrity and authenticity of code. Implement mechanisms to ensure that only approved, verified code is deployed to production environments."
    ].join('\n\n'),
    type: "guide",
    date: "February 28, 2023",
    author: "Emily Thompson",
    authorTitle: "Application Security Lead",
    authorImage: "https://randomuser.me/api/portraits/women/33.jpg",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "11 min read"
  },
  {
    id: "7",
    title: "Advanced Persistent Threats: Detection & Response",
    description: "Technical deep dive into APT tactics and effective countermeasures.",
    content: [
      "Advanced Persistent Threats (APTs) represent some of the most sophisticated cyber threats organizations face today. This video provides a technical analysis of APT tactics and effective countermeasures.",
      "## Understanding APT Actors",
      "APTs are typically well-funded, highly skilled threat actors who target specific organizations with strategic objectives. They are patient, persistent, and employ advanced techniques to evade detection.",
      "## APT Attack Lifecycle",
      "### 1. Initial Access",
      "APTs gain initial access through various means, including spear-phishing, supply chain compromises, and exploitation of public-facing applications.",
      "### 2. Persistence",
      "Once inside, APTs establish multiple persistence mechanisms to maintain access even if some entry points are discovered and closed.",
      "### 3. Lateral Movement",
      "APTs move laterally through the network, seeking to escalate privileges and access high-value targets while evading detection."
    ].join('\n\n'),
    type: "video",
    date: "February 12, 2023",
    author: "Robert Taylor",
    authorTitle: "Threat Hunter",
    authorImage: "https://randomuser.me/api/portraits/men/74.jpg",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "35 min watch"
  },
  {
    id: "8",
    title: "CISO's Guide to Compliance Frameworks",
    description: "Navigate complex compliance requirements with this executive-level overview.",
    content: [
      "This whitepaper provides Chief Information Security Officers (CISOs) with a comprehensive overview of major compliance frameworks and strategies for effective implementation.",
      "## Common Compliance Frameworks",
      "Organizations often need to comply with multiple regulatory frameworks depending on their industry, location, and the type of data they handle.",
      "## Key Compliance Strategies",
      "### 1. Map Control Requirements",
      "Many compliance frameworks have overlapping requirements. Mapping controls across frameworks can help organizations satisfy multiple compliance requirements with a single control implementation.",
      "### 2. Implement a GRC Platform",
      "Governance, Risk, and Compliance (GRC) platforms can help organizations manage compliance activities, document evidence, and prepare for audits more efficiently.",
      "### 3. Develop a Common Control Framework",
      "Creating a unified control framework that addresses requirements across multiple regulations can streamline compliance efforts and reduce duplication of work."
    ].join('\n\n'),
    type: "whitepaper",
    date: "January 30, 2023",
    author: "Amanda Rodriguez",
    authorTitle: "Compliance Director",
    authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
    link: "#",
    readTime: "14 min read"
  }
];

const ResourceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentResource, setCurrentResource] = useState<ResourceItem | null>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the resource with the matching ID
    const resource = allResources.find(resource => resource.id === id);
    if (resource) {
      setCurrentResource(resource);
    }
  }, [id]);

  // If resource not found, show loading or error message
  if (!currentResource) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Loading resource...</h1>
      </div>
    );
  }

  // Get recent resources excluding the current one
  const relatedResources = allResources
    .filter(resource => resource.id !== id && resource.type === currentResource.type)
    .slice(0, 3);

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

  // Ensure we have a canonical URL for this specific resource
  const canonicalUrl = `https://itrapidsupport.com/resources/${id}`;

  return (
    <>
      <Helmet>
        <title>{currentResource.title} | IT Rapid Support Resources</title>
        <meta name="description" content={`${currentResource.description?.substring(0, 155)}...`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      {/* Hero Section */}
      <div className="pt-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link to="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to all resources
          </Link>
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
              <span className="mr-2">{getIcon(currentResource.type)}</span>
              <span className="capitalize">{currentResource.type}</span>
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{currentResource.title}</h1>
          <div className="flex flex-wrap items-center text-white/80 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentResource.date}</span>
            </div>
            {currentResource.readTime && (
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                <span className="text-sm">{currentResource.readTime}</span>
              </div>
            )}
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span className="text-sm">{currentResource.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative -mt-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-t-3xl overflow-hidden shadow-xl">
            <img 
              src={currentResource.image} 
              alt={currentResource.title} 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Resource Content */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <div className="prose prose-lg max-w-none prose-red">
                {currentResource.content.split('\n\n').map((paragraph: string, index: number) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else {
                    return <p key={index} className="mb-4 text-gray-700">{paragraph}</p>;
                  }
                })}
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 font-medium mb-3">Share this resource</p>
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
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
                    src={currentResource.authorImage} 
                    alt={currentResource.author}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{currentResource.author}</h3>
                  <p className="text-gray-600">{currentResource.authorTitle}</p>
                </div>
                <p className="text-gray-700 text-sm mb-6">
                  {currentResource.author} is a security expert with extensive experience in {currentResource.type === 'guide' ? 'creating security guidelines' : 
                    currentResource.type === 'whitepaper' ? 'security research and analysis' : 
                    'security education and training'}.
                </p>
                <Link 
                  to="/resources" 
                  className="block w-full py-2 px-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors"
                >
                  More from this author
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Related Resources</h2>
            <div className="flex space-x-4">
              <Link to="/resources" className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                All Resources
              </Link>
              <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                Most Popular
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/resources/${resource.id}`} className="block">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
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
                  <Link to={`/resources/${resource.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                      {resource.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Link 
                    to={`/resources/${resource.id}`}
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
  );
};

export default ResourceDetails; 