import React, { useState, useEffect, useRef } from 'react';
import { Shield, AlertTriangle, CheckCircle, ChevronRight, ArrowRight, Download, RefreshCw, 
  Lock, Database, Server, Bell, FileCheck, BarChart4, Clock, Zap, Check, ClipboardList, Users, BookOpen, Settings, Search, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent, trackAssessmentComplete } from '../components/AnalyticsTracker';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Define a color theme
const colors = {
  primary: 'from-red-600 to-red-800',
  secondary: 'from-slate-700 to-slate-900',
  success: 'from-green-500 to-green-700',
  warning: 'from-amber-500 to-amber-700',
  danger: 'from-red-500 to-red-700',
  info: 'from-blue-500 to-blue-700',
};

interface Question {
  id: number;
  category: string;
  text: string;
  description: string;
  icon: JSX.Element;
  options: {
    text: string;
    description: string;
  }[];
  weight: number;
}

const securityQuestions: Question[] = [
  {
    id: 1,
    category: "Access Control",
    text: "How do you manage user access across your organization?",
    description: "Access control determines who can view or use resources in your computing environment.",
    icon: <Lock className="h-6 w-6 text-red-500" />,
    options: [
      {
        text: "No formal access management",
        description: "Users have unrestricted access with minimal oversight."
      },
      {
        text: "Basic password policies",
        description: "Password requirements enforced but limited role separation."
      },
      {
        text: "Role-based access control (RBAC)",
        description: "Users assigned permissions based on their organizational roles."
      },
      {
        text: "Advanced IAM with MFA",
        description: "Comprehensive identity management with multi-factor authentication."
      }
    ],
    weight: 10
  },
  {
    id: 2,
    category: "Data Protection",
    text: "What level of data encryption do you currently implement?",
    description: "Encryption protects sensitive information from unauthorized access.",
    icon: <Database className="h-6 w-6 text-red-500" />,
    options: [
      {
        text: "No encryption",
        description: "Data stored in plaintext without protection."
      },
      {
        text: "Basic encryption at rest",
        description: "Data encrypted when stored but not during transmission."
      },
      {
        text: "Encryption at rest and in transit",
        description: "Data protected both when stored and during transmission."
      },
      {
        text: "End-to-end encryption with key management",
        description: "Comprehensive encryption with secure key rotation policies."
      }
    ],
    weight: 15
  },
  {
    id: 3,
    category: "Network Security",
    text: "What network security measures do you have in place?",
    description: "Network security protects the integrity and usability of your network infrastructure.",
    icon: <Server className="h-6 w-6 text-red-500" />,
    options: [
      {
        text: "Basic firewall only",
        description: "Minimal perimeter protection with limited configuration."
      },
      {
        text: "Firewall and antivirus",
        description: "Basic protection against intrusions and malware."
      },
      {
        text: "IDS/IPS systems",
        description: "Active monitoring and prevention of suspicious activities."
      },
      {
        text: "Zero Trust Architecture",
        description: "Comprehensive security model that trusts no one by default."
      }
    ],
    weight: 12
  },
  {
    id: 4,
    category: "Incident Response",
    text: "How prepared are you for security incidents?",
    description: "Incident response capabilities determine how quickly you can detect and recover from security events.",
    icon: <Bell className="h-6 w-6 text-red-500" />,
    options: [
      {
        text: "No formal plan",
        description: "Ad-hoc response with no documented procedures."
      },
      {
        text: "Basic incident response plan",
        description: "Documented but rarely tested procedures."
      },
      {
        text: "Documented procedures with some testing",
        description: "Regular reviews of IR plans with occasional drills."
      },
      {
        text: "Comprehensive IR plan with regular drills",
        description: "Thoroughly tested plans with defined roles and automation."
      }
    ],
    weight: 13
  },
  {
    id: 5,
    category: "Compliance",
    text: "What is your current compliance status?",
    description: "Regulatory compliance ensures your organization meets industry standards for security.",
    icon: <FileCheck className="h-6 w-6 text-red-500" />,
    options: [
      {
        text: "No compliance measures",
        description: "Not pursuing compliance with any standards."
      },
      {
        text: "Working towards compliance",
        description: "Beginning to implement controls for specific standards."
      },
      {
        text: "Compliance program in development",
        description: "Regular security reviews and documented security practices."
      },
      {
        text: "Comprehensive compliance program",
        description: "Mature security practices aligned with industry standards and frameworks."
      }
    ],
    weight: 10
  }
];

// Update the ClientInfo interface
interface ClientInfo {
  companyName: string;
  contactName: string;
  contactEmail: string;
  industry: string;
  companySize: string;
  position: string;
}

const SecurityAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);
  const [scoreAnimation, setScoreAnimation] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showClientInfoModal, setShowClientInfoModal] = useState(false);
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    companyName: '',
    contactName: '',
    contactEmail: '',
    industry: '',
    companySize: '',
    position: ''
  });

  useEffect(() => {
    if (showResults) {
      const score = calculateScore();
      const timer = setTimeout(() => {
        animateScore(0, score);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showResults]);

  const animateScore = (current: number, target: number) => {
    if (current <= target) {
      setScoreAnimation(current);
      setTimeout(() => {
        animateScore(current + 1, target);
      }, 20);
    }
  };

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnimateIn(false);
    setTimeout(() => {
      const newAnswers = { ...answers, [questionId]: answerIndex };
      setAnswers(newAnswers);
      if (currentQuestion < securityQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
      setAnimateIn(true);
      
      // Calculate progress
      const progress = (Object.keys(newAnswers).length / securityQuestions.length) * 100;
      
      // Track progress through assessment
      if (progress % 25 === 0) { // Track at 25%, 50%, 75%, 100%
        trackEvent('assessment_progress', {
          progress_percentage: progress,
          question_id: questionId.toString()
        });
      }
      
      // If all questions are answered, show the results
      if (Object.keys(newAnswers).length === securityQuestions.length) {
        const finalScore = calculateScore();
        const recommendationsList = getRecommendations(finalScore);
        trackAssessmentComplete(finalScore, recommendationsList);
      }
    }, 300);
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    securityQuestions.forEach(question => {
      const answerIndex = answers[question.id] || 0;
      totalScore += (answerIndex * question.weight);
      maxPossibleScore += (3 * question.weight); // 3 is max index (4 options - 1)
    });

    return Math.round((totalScore / maxPossibleScore) * 100);
  };

  const getScoreCategory = (score: number) => {
    if (score < 40) return { label: "Vulnerable", color: "bg-gradient-to-r from-red-500 to-red-700", textColor: "text-red-500" };
    if (score < 70) return { label: "Progressing", color: "bg-gradient-to-r from-amber-500 to-amber-700", textColor: "text-amber-500" };
    return { label: "Resilient", color: "bg-gradient-to-r from-green-500 to-green-700", textColor: "text-green-500" };
  };

  const getRecommendations = (score: number) => {
    if (score < 40) {
      return [
        {
          title: "Implement basic security controls immediately",
          description: "Establish fundamental security measures to address critical vulnerabilities.",
          icon: <Shield className="h-5 w-5 text-red-500" />
        },
        {
          title: "Develop an incident response plan",
          description: "Create procedures to detect, respond to, and recover from security incidents.",
          icon: <Bell className="h-5 w-5 text-red-500" />
        },
        {
          title: "Establish access control policies",
          description: "Define and enforce who can access what resources within your organization.",
          icon: <Lock className="h-5 w-5 text-red-500" />
        },
        {
          title: "Begin security awareness training",
          description: "Educate employees about security threats and best practices.",
          icon: <Users className="h-5 w-5 text-red-500" />
        }
      ];
    } else if (score < 70) {
      return [
        {
          title: "Enhance existing security controls",
          description: "Strengthen your security posture by improving current defensive measures.",
          icon: <Shield className="h-5 w-5 text-amber-500" />
        },
        {
          title: "Implement multi-factor authentication",
          description: "Add additional verification layers to protect sensitive accounts and data.",
          icon: <Lock className="h-5 w-5 text-amber-500" />
        },
        {
          title: "Conduct regular security assessments",
          description: "Perform periodic evaluations to identify and address vulnerabilities.",
          icon: <FileCheck className="h-5 w-5 text-amber-500" />
        },
        {
          title: "Develop comprehensive security policies",
          description: "Create detailed guidelines that define security expectations and procedures.",
          icon: <BookOpen className="h-5 w-5 text-amber-500" />
        }
      ];
    } else {
      return [
        {
          title: "Fine-tune security operations",
          description: "Optimize your security program for improved efficiency and effectiveness.",
          icon: <Settings className="h-5 w-5 text-green-500" />
        },
        {
          title: "Consider advanced threat detection",
          description: "Implement sophisticated technologies to identify complex security threats.",
          icon: <Search className="h-5 w-5 text-green-500" />
        },
        {
          title: "Implement AI-based security solutions",
          description: "Leverage artificial intelligence to enhance threat detection capabilities.",
          icon: <Zap className="h-5 w-5 text-green-500" />
        },
        {
          title: "Regular penetration testing",
          description: "Conduct simulated attacks to identify and address security weaknesses.",
          icon: <Activity className="h-5 w-5 text-green-500" />
        }
      ];
    }
  };

  const resetAssessment = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setCurrentQuestion(0);
      setAnswers({});
      setShowResults(false);
      setAnimateIn(true);
    }, 300);
  };

  const renderProgressIndicators = () => {
    return (
      <div className="flex justify-center space-x-2 mb-8">
        {securityQuestions.map((_, index) => (
          <div 
            key={index} 
            className={`h-1 rounded-full transition-all duration-300 ${
              index < currentQuestion 
                ? 'w-12 bg-red-500' 
                : index === currentQuestion 
                  ? 'w-12 bg-white' 
                  : 'w-6 bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  // Function to generate a unique reference number
  const generateReferenceNumber = () => {
    const timestamp = new Date().getTime().toString().slice(-6);
    const randomChars = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `SEC-${timestamp}-${randomChars}`;
  };

  // Function to handle client info change
  const handleClientInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Update the generatePDF function to fix all the issues
  const generatePDF = () => {
    // If we don't have client info yet, show the modal instead of generating PDF
    if (!clientInfo.companyName) {
      setShowClientInfoModal(true);
      return;
    }
    
    setIsGeneratingPDF(true);
    
    // Create a new image element for the logo
    const logo = new Image();
    logo.src = '/ITRapid-logo.svg'; // Use the existing logo from the public directory
    
    setTimeout(() => {
      try {
        // Create a new document
        const doc = new jsPDF();
        const score = calculateScore();
        const scoreCategory = getScoreCategory(score);
        const recommendations = getRecommendations(score);
        const currentDate = new Date().toLocaleDateString('en-US', {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        const referenceNumber = generateReferenceNumber();
        
        // Helper function for shadow effect - defined once at the top level
        const addShadowRect = (x: number, y: number, w: number, h: number, r: number) => {
          // Add subtle shadow
          doc.setFillColor(230, 230, 230);
          doc.roundedRect(x+2, y+2, w, h, r, r, 'F');
          // Main rectangle
          doc.setFillColor(248, 248, 248);
          doc.roundedRect(x, y, w, h, r, r, 'F');
        };
        
        // Add white background for the entire document
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, 210, 297, 'F');
        
        // Add professional header with logo area
        doc.setFillColor(20, 24, 39); // dark blue background
        doc.rect(0, 0, 210, 40, 'F');
        
        // Add logo image or placeholder with white background
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(15, 10, 30, 20, 3, 3, 'F');
        
        // Add logo text (would be image in production)
        doc.setTextColor(20, 24, 39);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('IT RAPID', 30, 20, { align: 'center' });
        doc.setFontSize(8);
        doc.text('SUPPORT', 30, 25, { align: 'center' });
        
        // Title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('SECURITY ASSESSMENT REPORT', 105, 20, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Prepared for: ${clientInfo.companyName}`, 105, 30, { align: 'center' });
        doc.text(`Date: ${currentDate}`, 105, 38, { align: 'center' });
        
        // Summary section
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('EXECUTIVE SUMMARY', 20, 55);
        
        // Reference number
        doc.setTextColor(80, 80, 80);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.text(`Reference: ${referenceNumber}`, 175, 55, { align: 'right' });
        
        // Add a subtle box with light shadow effect for summary
        doc.setDrawColor(220, 220, 220);
        doc.setFillColor(248, 248, 248);
        doc.roundedRect(14, 60, 182, 40, 3, 3, 'FD');
        
        // Add a red accent line
        doc.setDrawColor(239, 68, 68);
        doc.setLineWidth(1);
        doc.line(14, 62, 14, 82);
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        doc.text(
          `This report presents the results of ${clientInfo.companyName}'s security maturity assessment conducted by IT Rapid Support. ` +
          'Based on your responses, we\'ve identified your organization\'s current security posture and provided ' +
          'actionable recommendations to improve your defenses against evolving cyber threats.',
          20, 70, { maxWidth: 170 }
        );
        
        // Initialize default score offset
        let scoreOffset = 0;
        
        // Add additional client information section if available
        if (clientInfo.industry || clientInfo.companySize) {
          let yOffset = 110;
          
          // Client details heading
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text('ORGANIZATION PROFILE', 20, yOffset);
          yOffset += 10;
          
          // Add client box
          doc.setDrawColor(220, 220, 220);
          doc.setFillColor(248, 248, 248);
          doc.roundedRect(14, yOffset - 5, 182, clientInfo.position ? 40 : 30, 3, 3, 'FD');
          
          // Company name
          doc.setFontSize(11);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(20, 24, 39);
          doc.text(`${clientInfo.companyName}`, 20, yOffset + 5);
          
          // Industry and size
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(80, 80, 80);
          
          let detailsText = '';
          if (clientInfo.industry) {
            detailsText += `Industry: ${clientInfo.industry}`;
          }
          
          if (clientInfo.companySize) {
            if (detailsText) detailsText += ' | ';
            detailsText += `Size: ${clientInfo.companySize}`;
          }
          
          if (detailsText) {
            doc.text(detailsText, 20, yOffset + 15);
          }
          
          // Contact information
          if (clientInfo.contactName) {
            let contactText = `Contact: ${clientInfo.contactName}`;
            if (clientInfo.position) {
              contactText += `, ${clientInfo.position}`;
            }
            doc.text(contactText, 20, yOffset + 25);
            
            if (clientInfo.contactEmail) {
              doc.text(`Email: ${clientInfo.contactEmail}`, 20, yOffset + 33);
            }
          }
          
          // Update the next starting position for the score section
          yOffset += clientInfo.position ? 50 : 40;
          
          // Score section - update the Y position
          doc.setFontSize(16);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(0, 0, 0);
          doc.text('SECURITY MATURITY SCORE', 20, yOffset);
          
          // Also update the positions of all elements below
          yOffset += 5; // Add some spacing
          
          // Update the score visualization box position
          doc.setDrawColor(220, 220, 220);
          doc.setFillColor(248, 248, 248);
          doc.roundedRect(14, yOffset, 182, 50, 3, 3, 'FD');
          
          // Update all other elements' positions accordingly (this is just offset calculation)
          scoreOffset = yOffset - 120; // Calculate how much we need to move everything down
          
          // Score bar background position update
          doc.setFillColor(235, 235, 235);
          doc.roundedRect(25, 140 + scoreOffset, 160, 10, 5, 5, 'F');
          
          // Score bar filled section position update
          if (score < 40) {
            doc.setFillColor(239, 68, 68);
          } else if (score < 70) {
            doc.setFillColor(245, 158, 11);
          } else {
            doc.setFillColor(16, 185, 129);
          }
          
          // Update the gauge position
          doc.roundedRect(25, 140 + scoreOffset, Math.max(10, (score/100) * 160), 10, 5, 5, 'F');
          
          // Update the gauge markers positions
          doc.setDrawColor(180, 180, 180);
          doc.setLineWidth(0.5);
          
          // Update marker lines positions
          for (let i = 1; i <= 3; i++) {
            const x = 25 + (160 * (i * 0.25));
            doc.line(x, 138 + scoreOffset, x, 142 + scoreOffset);
            doc.setFontSize(8);
            doc.setTextColor(120, 120, 120);
            doc.text(`${i * 25}%`, x, 147 + scoreOffset, { align: 'center' });
          }
          
          // Update score text position
          doc.setFontSize(24);
          if (score < 40) {
            doc.setTextColor(239, 68, 68);
          } else if (score < 70) {
            doc.setTextColor(245, 158, 11);
          } else {
            doc.setTextColor(16, 185, 129);
          }
          
          doc.setFont('helvetica', 'bold');
          doc.text(`${score}%`, 105, 135 + scoreOffset, { align: 'center' });
          
          doc.setFontSize(12);
          doc.setTextColor(80, 80, 80);
          doc.text(`Security Category: ${scoreCategory.label}`, 105, 160 + scoreOffset, { align: 'center' });
          
          // Update all subsequent positions - add scoreOffset to all Y values
          // Assessment details section
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(16);
          doc.setFont('helvetica', 'bold');
          doc.text('ASSESSMENT DETAILS', 20, 185 + scoreOffset);
        } else {
          // Default positioning with no client info offset
          const scoreOffset = 0;
          
          // Score section
          doc.setFontSize(16);
          doc.setFont('helvetica', 'bold');
          doc.text('SECURITY MATURITY SCORE', 20, 115);
          
          // Score visualization box
          doc.setDrawColor(220, 220, 220);
          doc.setFillColor(248, 248, 248);
          doc.roundedRect(14, 120, 182, 50, 3, 3, 'FD');
          
          // Score bar background
          doc.setFillColor(235, 235, 235);
          doc.roundedRect(25, 140, 160, 10, 5, 5, 'F');
          
          // Score bar filled section
          if (score < 40) {
            doc.setFillColor(239, 68, 68);
          } else if (score < 70) {
            doc.setFillColor(245, 158, 11);
          } else {
            doc.setFillColor(16, 185, 129);
          }
          
          // Draw the gauge
          doc.roundedRect(25, 140, Math.max(10, (score/100) * 160), 10, 5, 5, 'F');
          
          // Gauge markers
          doc.setDrawColor(180, 180, 180);
          doc.setLineWidth(0.5);
          
          // Draw marker lines
          for (let i = 1; i <= 3; i++) {
            const x = 25 + (160 * (i * 0.25));
            doc.line(x, 138, x, 142);
            doc.setFontSize(8);
            doc.setTextColor(120, 120, 120);
            doc.text(`${i * 25}%`, x, 147, { align: 'center' });
          }
          
          // Score text
          doc.setFontSize(24);
          if (score < 40) {
            doc.setTextColor(239, 68, 68);
          } else if (score < 70) {
            doc.setTextColor(245, 158, 11);
          } else {
            doc.setTextColor(16, 185, 129);
          }
          
          doc.setFont('helvetica', 'bold');
          doc.text(`${score}%`, 105, 135, { align: 'center' });
          
          doc.setFontSize(12);
          doc.setTextColor(80, 80, 80);
          doc.text(`Security Category: ${scoreCategory.label}`, 105, 160, { align: 'center' });
          
          // Assessment details section
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(16);
          doc.setFont('helvetica', 'bold');
          doc.text('ASSESSMENT DETAILS', 20, 185);
        }
        
        // Create three stat boxes with shadow effect
        addShadowRect(14, 190 + scoreOffset, 58, 40, 3);
        addShadowRect(76, 190 + scoreOffset, 58, 40, 3);
        addShadowRect(138, 190 + scoreOffset, 58, 40, 3);
        
        // Add stat icons at the top of each box
        // Questions icon
        doc.setDrawColor(245, 158, 11);
        doc.setFillColor(245, 158, 11);
        doc.circle(43, 198 + scoreOffset, 5, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.text('?', 43, 200 + scoreOffset, { align: 'center' });
        
        // Risk factors icon
        doc.setDrawColor(66, 153, 225);
        doc.setFillColor(66, 153, 225);
        doc.circle(105, 198 + scoreOffset, 5, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.text('!', 105, 200 + scoreOffset, { align: 'center' });
        
        // Recommendations icon
        doc.setDrawColor(16, 185, 129);
        doc.setFillColor(16, 185, 129);
        doc.circle(167, 198 + scoreOffset, 5, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.text('✓', 167, 200 + scoreOffset, { align: 'center' });
        
        // Stat values with better typography
        doc.setFontSize(28);
        doc.setTextColor(80, 80, 80);
        doc.setFont('helvetica', 'bold');
        doc.text(`${Object.keys(answers).length}`, 43, 215 + scoreOffset, { align: 'center' });
        doc.text(`${Object.entries(answers).reduce((acc, [, value]) => acc + (value as number), 0)}`, 105, 215 + scoreOffset, { align: 'center' });
        doc.text('4', 167, 215 + scoreOffset, { align: 'center' });
        
        // Stat labels with better alignment
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(120, 120, 120);
        doc.text('Questions Answered', 43, 225 + scoreOffset, { align: 'center' });
        doc.text('Risk Factors', 105, 225 + scoreOffset, { align: 'center' });
        doc.text('Recommendations', 167, 225 + scoreOffset, { align: 'center' });
        
        // Key recommendations with improved design
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('KEY RECOMMENDATIONS', 20, 245 + scoreOffset);
        
        doc.setFontSize(11);
        let yPos = 255 + scoreOffset;
        
        recommendations.forEach((rec, index) => {
          // Background rectangle with shadow effect
          doc.setFillColor(230, 230, 230);
          doc.roundedRect(16, yPos - 5, 182, 20, 3, 3, 'F');
          
          doc.setFillColor(248, 248, 248);
          doc.roundedRect(14, yPos - 5, 182, 20, 3, 3, 'F');
          
          // Recommendation number in a circle
          let numberColor;
          if (score < 40) {
            numberColor = [239, 68, 68]; // Red
          } else if (score < 70) {
            numberColor = [245, 158, 11]; // Amber
          } else {
            numberColor = [16, 185, 129]; // Green
          }
          
          doc.setFillColor(numberColor[0], numberColor[1], numberColor[2]);
          doc.circle(22, yPos + 5, 3, 'F');
          
          // Number in the circle
          doc.setTextColor(255, 255, 255);
          doc.setFontSize(6);
          doc.setFont('helvetica', 'bold');
          doc.text(`${index + 1}`, 22, yPos + 6.5, { align: 'center' });
          
          // Recommendation text
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(11);
          doc.setFont('helvetica', 'bold');
          doc.text(`${rec.title}`, 30, yPos + 2);
          
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(80, 80, 80);
          doc.text(rec.description, 30, yPos + 9, { maxWidth: 160 });
          
          yPos += 25;
        });
        
        // Save PDF
        doc.save(`${clientInfo.companyName.replace(/\s+/g, '_')}_Security_Assessment_${new Date().toISOString().slice(0, 10)}.pdf`);
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        setIsGeneratingPDF(false);
      }
    }, 100);
  };

  // Client info modal JSX
  const renderClientInfoModal = () => {
    if (!showClientInfoModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full mx-4 border border-slate-700 shadow-xl">
          <h3 className="text-xl text-white font-bold mb-4">Company Information</h3>
          <p className="text-gray-400 mb-6">Please provide details for your personalized security assessment report</p>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            setShowClientInfoModal(false);
            generatePDF();
          }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name*</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={clientInfo.companyName}
                  onChange={handleClientInfoChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                  placeholder="Acme Corporation"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={clientInfo.industry}
                    onChange={handleClientInfoChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance & Banking</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Education">Education</option>
                    <option value="Government">Government</option>
                    <option value="Services">Professional Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-1">Company Size</label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={clientInfo.companySize}
                    onChange={handleClientInfoChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                  >
                    <option value="">Select Size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-1">Contact Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={clientInfo.contactName}
                  onChange={handleClientInfoChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                  placeholder="John Smith"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-1">Contact Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={clientInfo.contactEmail}
                    onChange={handleClientInfoChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">Job Title</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={clientInfo.position}
                    onChange={handleClientInfoChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                    placeholder="e.g. CISO, IT Director"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-slate-700 pt-4 text-xs text-gray-400">
              <p>Your data will only be used to generate this report and will not be shared with third parties.</p>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowClientInfoModal(false)}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-lg text-white shadow-lg shadow-red-900/20 transition-colors"
              >
                Generate Professional Report
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Create structured data for Security Assessment service
  const securityAssessmentSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Assessment",
    "provider": {
      "@type": "Organization",
      "name": "IT Rapid Support",
      "url": "https://itrapidsupport.com"
    },
    "serviceType": "Cybersecurity Assessment",
    "description": "Our comprehensive security assessment evaluates your organization's security posture across multiple dimensions, identifies vulnerabilities, and provides actionable recommendations.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-16">
      <SEO 
        title="Free Security Assessment" 
        description="Evaluate your organization's security posture with our free comprehensive security assessment tool. Get instant results and actionable recommendations."
        keywords="security assessment, cybersecurity evaluation, security posture, vulnerability assessment, free security tool, IT security assessment"
        ogType="website"
        ogImage="/images/security-assessment-og.jpg"
        schema={securityAssessmentSchema}
      />
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-800/50 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-red-600 to-red-800 rounded-xl mb-6">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Security Posture Assessment</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Evaluate your organization's security maturity and receive actionable insights to strengthen your defenses
            </p>
          </div>

          <div className={`transition-all duration-300 transform ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {!showResults ? (
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-slate-700/50">
                {renderProgressIndicators()}

                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    {securityQuestions[currentQuestion].icon}
                    <span className="text-sm font-medium text-red-500 ml-2">{securityQuestions[currentQuestion].category}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {securityQuestions[currentQuestion].text}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {securityQuestions[currentQuestion].description}
                  </p>
                </div>

                <div className="space-y-4">
                  {securityQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(securityQuestions[currentQuestion].id, index === 1)}
                      className="w-full text-left p-5 rounded-xl bg-slate-700/50 hover:bg-slate-700 hover:shadow-lg hover:shadow-red-500/5 transition-all flex flex-col group border border-slate-600/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-lg">{option.text}</span>
                        <span className="h-6 w-6 rounded-full border-2 border-slate-500 flex items-center justify-center group-hover:border-red-500 transition-colors">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Check className="h-3.5 w-3.5 text-red-500" />
                          </span>
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 mt-1">{option.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-slate-700/50">
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center justify-center p-6 rounded-full ${getScoreCategory(calculateScore()).color} mb-6 shadow-lg`}>
                    <Shield size={40} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Your Security Assessment</h2>
                  <p className="text-gray-400 mb-6">Security Maturity Score</p>
                  
                  <div className="relative mb-4">
                    <svg className="w-48 h-48 mx-auto" viewBox="0 0 120 120">
                      <circle 
                        cx="60" 
                        cy="60" 
                        r="54" 
                        fill="none" 
                        stroke="#1f2937" 
                        strokeWidth="12" 
                      />
                      <circle 
                        cx="60" 
                        cy="60" 
                        r="54" 
                        fill="none" 
                        stroke="url(#scoreGradient)" 
                        strokeWidth="12" 
                        strokeDasharray={`${(scoreAnimation / 100) * 339.3} 339.3`}
                        strokeDashoffset="84.82"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={calculateScore() < 40 ? "#ef4444" : calculateScore() < 70 ? "#f59e0b" : "#10b981"} />
                          <stop offset="100%" stopColor={calculateScore() < 40 ? "#b91c1c" : calculateScore() < 70 ? "#d97706" : "#059669"} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className={`text-6xl font-bold ${getScoreCategory(calculateScore()).textColor}`}>
                        {scoreAnimation}%
                      </span>
                      <span className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                        {getScoreCategory(calculateScore()).label}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="bg-slate-700/30 rounded-xl p-3 border border-slate-600/50">
                      <div className="text-3xl font-bold text-amber-500">
                        {Object.keys(answers).length}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Questions Answered</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-3 border border-slate-600/50">
                      <div className="text-3xl font-bold text-blue-500">
                        {Object.entries(answers).reduce((acc, [, value]) => acc + (value as number), 0)}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Risk Factors</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-3 border border-slate-600/50">
                      <div className="text-3xl font-bold text-indigo-500">
                        4
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Recommendations</div>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <ClipboardList className="h-5 w-5 mr-2 text-red-500" />
                    Key Recommendations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {getRecommendations(calculateScore()).map((rec, index) => (
                      <div key={index} className="bg-slate-700/30 p-5 rounded-xl border border-slate-600/50 hover:border-red-500/50 transition-colors">
                        <div className="flex items-start gap-3">
                          {rec.icon}
                          <div>
                            <h4 className="font-semibold text-white">{rec.title}</h4>
                            <p className="text-sm text-gray-400 mt-1">{rec.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={resetAssessment}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors border border-slate-600/50"
                  >
                    <RefreshCw size={20} />
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>

          {!showResults && (
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Your responses are confidential and will be used only to generate personalized recommendations.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Render the client info modal */}
      {renderClientInfoModal()}
    </div>
  );
};

export default SecurityAssessment; 