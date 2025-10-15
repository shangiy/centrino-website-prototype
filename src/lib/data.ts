
import {
  BrainCircuit,
  Cloud,
  Code,
  type LucideIcon,
  PenTool,
  Shield,
  Smartphone,
  PiggyBank,
  FileText as FileTextIcon,
  HandCoins,
  DollarSign,
  UserCheck,
  UserPlus,
  CheckCircle,
  ArrowRightLeft,
  Banknote,
  Users,
  Fingerprint,
  Contact,
  CreditCard,
  MessageSquarePlus,
  CalendarClock,
  LineChart,
  UserCog,
  Repeat,
  Wallet,
  Receipt,
  Calculator,
  FileCheck,
  FileDigit,
  DatabaseZap,
  LockKeyhole,
  SmartphoneNfc,
  Layers,
  FileUp,
  Landmark,
  Briefcase,
  BookOpen,
  ClipboardList,
  Server,
  File,
  Tablet,
  Presentation,
  UserRound,
  ShieldCheck,
  Building,
  GraduationCap,
} from 'lucide-react';
import { SmsIcon } from '@/components/icons';

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  features: (string | FeatureDetail)[];
  imageUrl?: string;
  subTitle?: string;
  subDescription?: string;
  mobileBankingFeatures?: MobileBankingFeature[];
  agencyBankingFeatures?: AgencyBankingFeature[];
  smsCommunicationFeatures?: SmsCommunicationFeature[];
  membersPortalFeatures?: MembersPortalFeature[];
  onlineLoanSubmissionFeatures?: OnlineLoanSubmissionFeature[];
}

export interface FeatureDetail {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MembersPortalFeature {
  title: string;
  description: string;
}

export interface OnlineLoanSubmissionFeature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface MobileBankingFeature {
    title: string;
    description: string;
    icon: string;
    imageUrl: string;
}

export interface AgencyBankingFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SmsCommunicationFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  category: string;
  imageId: string;
  description: string;
  caseStudy: string;
  clientFeedback: string;
}

export interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  imageId: string;
  excerpt: string;
  content: string;
}

export const services: Service[] = [
    {
    slug: 'core-banking',
    title: 'Core Banking',
    icon: Landmark,
    shortDescription: 'Robust and scalable core banking solutions for modern financial institutions.',
    fullDescription: 'Our Core Banking system is the backbone for financial institutions, providing a comprehensive suite of tools for managing accounts, transactions, and customer relationships. It is designed for scalability, security, and compliance.',
    features: ['Account Management', 'Transaction Processing', 'Customer Relationship Management (CRM)', 'Loan Management', 'Security and Compliance', 'Reporting and Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'mobile-banking',
    title: 'Mobile Banking',
    icon: Smartphone,
    shortDescription: 'Empower your customers with a secure and feature-rich mobile banking experience.',
    fullDescription: 'Our mobile banking solution, PesaPepe, offers a seamless and intuitive user experience. It enables customers to perform a wide range of banking activities on the go, from checking balances to transferring funds and paying bills.',
    features: ['Real-time Balance Inquiry', 'Fund Transfers', 'Bill Payments', 'Mini-Statement Requests', 'Biometric Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop',
    subTitle: 'Mobile Banking (PesaPepe)',
    subDescription: 'PesaPepe is our premier mobile banking platform, available on USSD, Android, and iOS, providing a comprehensive and secure banking experience on the go.',
    mobileBankingFeatures: [
      {
        title: 'USSD',
        description: 'Accessible on any mobile phone, our USSD service allows members to perform basic banking transactions without an internet connection.',
        icon: 'Smartphone',
        imageUrl: '/USSD.png',
      },
      {
        title: 'Mobile App',
        description: 'A rich and intuitive mobile application for Android and iOS, offering a full suite of banking services with a user-friendly interface.',
        icon: 'Smartphone',
        imageUrl: '/mobile-app.png',
      },
      {
        title: 'Web Portal',
        description: 'A secure web portal for members to access their accounts, view statements, and perform transactions from any web browser.',
        icon: 'Globe',
        imageUrl: '/web-portal.png',
      }
    ]
  },
  {
    slug: 'agency-banking',
    title: 'Agency Banking',
    icon: Building,
    shortDescription: 'Expand your reach and serve more customers with our agency banking platform.',
    fullDescription: 'Our Agency Banking solution empowers financial institutions to extend their services through a network of agents. This increases accessibility for customers in remote areas and reduces operational costs.',
    features: ['Cash-in/Cash-out', 'Account Opening', 'Bill Payments', 'Fund Transfers', 'Agent Management'],
    imageUrl: 'https://images.unsplash.com/photo-1561414927-6d8659a24834?q=80&w=2070&auto=format=fit=crop',
    agencyBankingFeatures: [
      { title: 'Member Registration', description: 'Agents can register new members quickly and securely, expanding your customer base.', icon: UserPlus },
      { title: 'Deposits', description: 'Facilitate member deposits through a network of trusted agents.', icon: PiggyBank },
      { title: 'Withdrawals', description: 'Enable members to withdraw cash conveniently from any agent location.', icon: HandCoins },
      { title: 'Loan Repayments', description: 'Allow members to make loan repayments easily through the agency network.', icon: DollarSign },
      { title: 'Account Information', description: 'Provide members with access to their account information, such as balances and mini-statements.', icon: UserCheck },
      { title: 'Utility Payments', description: 'Offer value-added services like bill and utility payments through agents.', icon: CreditCard }
    ]
  },
  {
    slug: 'sms-communication',
    title: 'SMS Communication',
    icon: MessageSquarePlus,
    shortDescription: 'Engage with your customers effectively through our reliable SMS communication platform.',
    fullDescription: 'Our SMS Communication platform provides a powerful tool for sending transactional alerts, marketing messages, and notifications to your customers. It is reliable, scalable, and easy to integrate.',
    features: ['Transactional Alerts', 'Promotional Messages', 'Two-Way Communication', 'Delivery Reports', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1588056094258-2e3a6a12115e?q=80&w=1974&auto=format&fit=crop',
    smsCommunicationFeatures: [
        { title: 'Instant Notifications', description: 'Send real-time SMS alerts for transactions, approvals, and other important events.', icon: MessageSquarePlus },
        { title: 'Scheduled Messaging', description: 'Schedule bulk SMS campaigns for marketing or announcements at the optimal time.', icon: CalendarClock },
        { title: 'Personalization', description: 'Personalize messages with member names, account details, and more to increase engagement.', icon: UserCog },
        { title: 'Analytics', description: 'Track message delivery rates, open rates, and campaign performance with detailed analytics.', icon: LineChart },
        { title: 'Automated Responses', description: 'Set up automated responses for common queries or keywords, improving customer service.', icon: Repeat },
        { title: 'Developer API', description: 'Integrate our SMS gateway into your existing systems with our easy-to-use API.', icon: Code }
    ]
  },
  {
    slug: 'edms',
    title: 'EDMS',
    icon: File,
    shortDescription: 'Streamline your document management with our Electronic Document Management System.',
    fullDescription: 'Our Electronic Document Management System (EDMS) helps organizations to digitize, store, manage, and track electronic documents. It improves efficiency, enhances security, and ensures compliance.',
    features: ['Document Digitization', 'Secure Storage', 'Version Control', 'Advanced Search', 'Audit Trails'],
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-3151cf794034?q=80&w=1964&auto=format&fit=crop'
  },
  {
    slug: 'e-board',
    title: 'E-Board',
    icon: Tablet,
    shortDescription: 'A secure and efficient platform for managing board meetings and documents.',
    fullDescription: 'Our E-Board solution digitizes the entire board meeting process, from creating agendas and compiling board packs to tracking action items. It enhances governance, improves collaboration, and saves valuable time for board members.',
    features: ['Agenda Management', 'Digital Board Packs', 'Secure Document Sharing', 'Meeting Minutes', 'Action Item Tracking'],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format=fit=crop'
  },
  {
    slug: 'performance-management-system',
    title: 'Performance Management System',
    icon: Presentation,
    shortDescription: 'Align employee performance with organizational goals with our intuitive PMS.',
    fullDescription: 'Our Performance Management System helps organizations to set goals, track progress, and evaluate employee performance effectively. It fosters a culture of continuous feedback and development, driving business success.',
    features: ['Goal Setting & Tracking', 'Performance Reviews', '360-Degree Feedback', 'Development Plans', 'Reporting & Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format=fit=crop'
  },
  {
    slug: 'members-portal',
    title: 'Members Portal',
    icon: UserRound,
    shortDescription: 'Provide your members with a secure and convenient online self-service portal.',
    fullDescription: 'Our Members Portal allows your members to access their account information, view statements, apply for loans, and perform other self-service functions online, anytime. It enhances member satisfaction and reduces the workload on your staff.',
    features: ['Account Overview', 'Statement Downloads', 'Loan Applications', 'Profile Management', 'Secure Messaging'],
    imageUrl: 'https://images.unsplash.com/photo-1556740772-1a28a2a7f2d5?q=80&w=2070&auto=format=fit=crop',
    membersPortalFeatures: [
      { title: 'Account Overview', description: 'Members can view their account balances, transaction history, and loan statuses in real-time.' },
      { title: 'Statement Downloads', description: 'Allow members to securely download their account statements in various formats like PDF.' },
      { title: 'Loan Applications', description: 'A simplified online process for members to apply for loans and track their application status.' },
      { title: 'Guarantor Management', description: 'Members can manage their guarantors and guarantee requests through the portal.' },
      { title: 'Profile Management', description: 'Enable members to update their personal information and contact details securely.' },
      { title: 'Secure Messaging', description: 'A secure channel for members to communicate with the Sacco staff for support and inquiries.' }
    ]
  },
  {
    slug: 'online-loan-form-submission',
    title: 'Online Loan Form Submission',
    icon: ClipboardList,
    shortDescription: 'Simplify the loan application process with our online submission platform.',
    fullDescription: 'Our Online Loan Form Submission platform allows customers to apply for loans online, upload required documents, and track the status of their application. It streamlines the lending process, reduces paperwork, and improves turnaround time.',
    features: ['Customizable Forms', 'Document Upload', 'Application Tracking', 'E-Signature', 'Integration with Core Banking'],
    imageUrl: 'https://images.unsplash.com/photo-1560520450-4d241517c8a3?q=80&w=2070&auto=format=fit=crop',
    onlineLoanSubmissionFeatures: [
        { title: 'Online Application', description: 'Customizable loan application forms that are easy for members to fill out and submit online.', icon: FileCheck },
        { title: 'Digital Signatures', description: 'Securely capture electronic signatures on application forms and loan agreements.', icon: FileDigit },
        { title: 'Document Upload', description: 'Members can easily upload required supporting documents like payslips and ID copies.', icon: FileUp },
        { title: 'Application Tracking', description: 'Provide members with real-time updates on the status of their loan application.', icon: Repeat },
        { title: 'Secure & Compliant', description: 'Ensures all data is encrypted and the process complies with financial regulations.', icon: LockKeyhole },
        { title: 'Core Banking Integration', description: 'Seamlessly integrates with your core banking system to automate data entry and processing.', icon: DatabaseZap }
    ]
  },
  {
    slug: 'e-guarantor-ship',
    title: 'E-Guarantor ship',
    icon: ShieldCheck,
    shortDescription: 'Digitize and streamline the guarantor process for faster loan approvals.',
    fullDescription: 'Our E-Guarantor ship system automates the process of guarantor identification, verification, and commitment. It reduces delays, minimizes fraud, and provides a transparent and efficient experience for both borrowers and guarantors.',
    features: ['Online Guarantor Invitation', 'Digital Consent', 'Automated Verification', 'Real-time Status Updates', 'Secure Audit Trail'],
    imageUrl: 'https://images.unsplash.com/photo-1628348068343-c6302b75b1d7?q=80&w=1974&auto=format=fit=crop'
  },
  {
    slug: 'ict-consultancy',
    title: 'ICT Consultancy',
    icon: Briefcase,
    shortDescription: 'Expert guidance to help you navigate the complex world of technology.',
    fullDescription: 'Our ICT Consultancy services provide strategic advice and hands-on support to help you leverage technology for business growth. We cover areas like IT strategy, cybersecurity, cloud adoption, and digital transformation.',
    features: ['IT Strategy & Roadmap', 'Cybersecurity Assessment', 'Cloud Readiness Assessment', 'Digital Transformation Consulting', 'Project Management'],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format=fit=crop'
  },
  {
    slug: 'training',
    title: 'Training',
    icon: GraduationCap,
    shortDescription: 'Empower your team with the knowledge and skills to succeed in the digital age.',
    fullDescription: 'We offer a range of training programs covering topics from cybersecurity awareness to using our software solutions effectively. Our training is practical, hands-on, and tailored to the needs of your organization.',
    features: ['Cybersecurity Awareness', 'Product Training', 'Digital Literacy', 'Customized Workshops', 'Change Management'],
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format=fit=crop'
  },
];

export const portfolioProjects: Project[] = [
  {
    title: 'Fintech AI Platform',
    category: 'AI & Machine Learning',
    imageId: 'portfolio-project-1',
    description:
      'A comprehensive AI-driven platform for financial forecasting and risk analysis.',
    caseStudy:
      'The challenge was to build a system that could process vast amounts of financial data in real-time. Our solution involved a distributed architecture on AWS, using custom machine learning models for predictive analytics. The platform improved forecasting accuracy by 30%.',
    clientFeedback:
      'Centrino Technologies delivered a robust and highly accurate platform that has become central to our investment strategy.',
  },
  {
    title: 'ConnectSphere Mobile App',
    category: 'Mobile Development',
    imageId: 'portfolio-project-2',
    description:
      'A social networking app designed to connect professionals in niche industries.',
    caseStudy:
      'We developed a cross-platform application using React Native, focusing on a seamless user experience and real-time messaging capabilities. The backend was built with Node.js and GraphQL for efficient data fetching.',
    clientFeedback:
      "The app's performance and intuitive design have been praised by our user base. The team was a pleasure to work with.",
  },
  {
    title: 'Cloud-Native Migration',
    category: 'Cloud Solutions',
    imageId: 'portfolio-project-3',
    description:
      'Migrated a legacy monolithic application to a modern, microservices-based cloud architecture.',
    caseStudy:
      'Our team orchestrated a full migration to Google Kubernetes Engine (GKE), breaking down the monolith into containerized microservices. This resulted in a 99.99% uptime and a 40% reduction in infrastructure costs.',
    clientFeedback:
      'The migration was seamless, and the results in terms of scalability and cost savings are phenomenal.',
  },
  {
    title: 'E-commerce Redefined',
    category: 'Web Development',
    imageId: 'portfolio-project-4',
    description:
      'A high-performance e-commerce website with a custom headless CMS.',
    caseStudy:
      'Using Next.js for the frontend and Strapi for the headless CMS, we built an ultra-fast and flexible e-commerce platform. The site achieved a perfect Lighthouse score and increased conversion rates by 25%.',
    clientFeedback:
      'Our new website is not only beautiful but incredibly fast. Sales have seen a significant boost since launch.',
  },
  {
    title: 'CyberSec Sentinel',
    category: 'Cybersecurity',
    imageId: 'portfolio-project-5',
    description:
      'A real-time threat intelligence dashboard for a major security firm.',
    caseStudy:
      'We designed and implemented a comprehensive security audit and developed a dashboard that visualizes threat data from multiple sources. This allowed the security team to respond to incidents 50% faster.',
    clientFeedback:
      'The clarity and speed of the Sentinel dashboard have fundamentally improved our security operations.',
  },
  {
    title: 'AI-Powered Design Tool',
    category: 'UI/UX Design',
    imageId: 'portfolio-project-6',
    description:
      'An innovative UI/UX design tool that uses AI to generate design mockups.',
    caseStudy:
      'We combined our UI/UX expertise with cutting-edge generative AI models to create a tool that automates the initial phases of design. Prototyping time for our client was reduced by an average of 60%.',
    clientFeedback:
      'This tool has revolutionized our workflow, allowing us to explore more creative ideas in less time.',
  },
];

export const blogPosts: Post[] = [
  {
    slug: 'the-future-of-generative-ai',
    title: 'The Future of Generative AI in Business',
    author: 'Dr. Alex Chen',
    date: '2024-07-15',
    imageId: 'blog-post-1',
    excerpt:
      'Generative AI is more than just a buzzword. Explore how it is set to revolutionize industries from marketing to software development.',
    content:
      'Generative AI is poised to reshape the business landscape. Its ability to create novel content, from text and images to code, opens up a world of possibilities. In marketing, it can generate personalized ad copy at scale. In software development, it can assist with code generation and debugging, significantly speeding up development cycles. At Centrino, we are at the forefront of this technology, helping businesses harness its power to innovate and grow.',
  },
  {
    slug: 'building-resilient-web-applications',
    title: 'The Principles of Building Resilient Web Applications',
    author: 'Mushangi Patrick',
    date: '2025-06-28',
    imageId: 'blog-post-2',
    excerpt:
      "In today's digital world, application downtime is not an option. Learn the key principles for building resilient, fault-tolerant systems.",
    content:
      'Resilience is the ability of a system to withstand failure. For web applications, this means implementing strategies like redundancy, failover mechanisms, and graceful degradation. Techniques such as microservices architecture, health checks, and circuit breakers are crucial. A resilient application not only ensures a better user experience but also protects your business from revenue loss and reputational damage. Our development philosophy is rooted in these principles to deliver applications you can trust.',
  },
  {
    slug: 'navigating-the-cybersecurity-maze',
    title: 'Navigating the Cybersecurity Maze: A Guide for SMBs',
    author: 'David Lee',
    date: '2024-06-10',
    imageId: 'blog-post-3',
    excerpt:
      'Small and medium-sized businesses are increasingly targeted by cyberattacks. Here are essential steps to protect your digital assets.',
    content:
      'Many SMBs believe they are too small to be a target, but the reality is different. Implementing fundamental security measures is critical. This includes regular software updates, strong password policies, multi-factor authentication, and employee training on phishing scams. Investing in a security audit can reveal vulnerabilities you were unaware of. Proactive defense is the best strategy to keep your business safe in the digital age.',
  },
  {
    slug: 'the-power-of-the-headless-cms',
    title: 'Unlocking Flexibility: The Power of the Headless CMS',
    author: 'Sarah Johnson',
    date: '2024-05-22',
    imageId: 'blog-post-4',
    excerpt:
      'Traditional CMS platforms can be restrictive. Discover how a headless CMS can provide the flexibility to deliver content to any device or platform.',
    content:
      'A headless CMS decouples the content management backend from the presentation layer (the "head"). This architectural shift allows developers to use any frontend framework they choose, from websites to mobile apps and IoT devices. It provides unparalleled flexibility, better performance, and enhanced security. For businesses looking to create omnichannel digital experiences, the headless approach is the future of content management.',
  },
];


    

    



















