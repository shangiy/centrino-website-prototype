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
} from 'lucide-react';
import { SmsIcon } from '@/components/icons';

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl?: string;
  subTitle?: string;
  subDescription?: string;
  mobileBankingFeatures?: MobileBankingFeature[];
  agencyBankingFeatures?: AgencyBankingFeature[];
  smsCommunicationFeatures?: SmsCommunicationFeature[];
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
    icon: Code,
    shortDescription: 'Comprehensive banking solutions.',
    fullDescription: 'Our core banking solution is a comprehensive, modular system designed to meet the diverse needs of modern financial institutions. It provides a single, unified platform for managing customer accounts, transactions, loans, and other essential banking operations, ensuring efficiency, security, and scalability.',
    features: [
      'Account Management',
      'Transaction Processing',
      'Customer Relationship Management (CRM)',
      'Loan Management',
      'Security and Compliance',
      'Reporting and Analytics',
      'Workflow Automation',
      'Scalability and Flexibility',
      'Customer Self-Service',
    ],
    imageUrl: '/core-banking.png',
  },
  {
    slug: 'mobile-banking',
    title: 'Mobile Banking',
    icon: Smartphone,
    shortDescription: 'Vanguard Financials Core Banking System',
    fullDescription: 'Empower your customers with a secure and feature-rich mobile banking application. Our solution allows users to check balances, transfer funds, pay bills, and access other banking services anytime, anywhere, directly from their smartphones.',
    features: [],
    imageUrl: '/mobile-banking.png',
    subTitle: 'PesaPepe Mobile Banking',
    subDescription: 'Pesapepe Mobile Banking offers multiple access points, including:',
    mobileBankingFeatures: [
        {
            title: "Web Portal",
            description: "Accessible through any web browser, our portal provides a comprehensive dashboard for managing accounts, viewing detailed statements, and initiating complex transactions securely from a desktop or laptop.",
            icon: "Globe",
            imageUrl: "https://images.unsplash.com/photo-1585252583373-353393a6c5ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Mobile App",
            description: "Our native mobile application for iOS and Android offers a seamless and intuitive user experience, complete with biometric login, push notifications for alerts, and location-based services to find nearby agents.",
            icon: "Smartphone",
            imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1950&auto=format&fit=crop"
        },
        {
            title: "USSD",
            description: "For maximum accessibility, our USSD service (*879#) allows users to perform essential banking functions even without an internet connection, making it ideal for rural areas or users with feature phones.",
            icon: "Server",
            imageUrl: "https://images.unsplash.com/photo-1554495568-15b04c851174?q=80&w=2070&auto=format&fit=crop"
        }
    ]
  },
  {
    slug: 'agency-banking',
    title: 'Agency Banking',
    icon: Code,
    shortDescription: 'Extending banking services.',
    fullDescription: 'Expand your reach and serve more customers with our agency banking solution. This system allows you to authorize third-party agents to perform banking transactions on your behalf, bringing financial services closer to underserved communities.',
    features: [],
    imageUrl: '/Agency-banking.png',
    agencyBankingFeatures: [
      {
        title: "Balance Inquiry",
        description: "Empower members to conveniently check their account balances.",
        icon: PiggyBank
      },
      {
        title: "Mini Statement",
        description: "Provide concise summaries of recent account transactions for enhanced financial awareness.",
        icon: FileTextIcon,
      },
      {
        title: "Cash Withdrawal",
        description: "Enable members to effortlessly withdraw cash from their savings accounts through our agency banking services.",
        icon: HandCoins
      },
      {
        title: "Cash Deposit",
        description: "Facilitate seamless cash deposits and loan repayments for members using our agency banking platform.",
        icon: DollarSign,
      },
      {
        title: "Know Your Customer (KYC)",
        description: "Streamline the KYC process by assisting in the collection of essential member information such as passport, signature, and identification card (front and back).",
        icon: UserCheck,
      },
      {
        title: "Member Onboarding",
        description: "Allow agents to register new members pending approval in the core banking system, ensuring a smooth onboarding experience.",
        icon: UserPlus,
      },
       {
        title: "POS Statement",
        description: "Generate detailed statements for point-of-sale transactions within a specified date range.",
        icon: CreditCard
      },
       {
        title: "Customer KYC Details Management",
        description: "Empower members to update their KYC information conveniently through our agency banking application.",
        icon: Contact
      },
      {
        title: "Alternate Channel Management",
        description: "Assist members in managing alternate channels, including the ability to stop compromised channels for enhanced security.",
        icon: ArrowRightLeft,
      },
      {
        title: "Member Education Register Management",
        description: "Facilitate education and awareness programs for members by enabling agents and staff to mark attendance registers via our POS devices.",
        icon: Users,
      },
      {
        title: "Biometric Management",
        description: "Support the seamless updating of biometric data on supported devices such as IDEMIA and Datamini tablets, ensuring accurate and secure member identification.",
        icon: Fingerprint,
      },
      {
        title: "Account Transfer",
        description: "Enable secure and instant funds transfer between accounts through authorized agents.",
        icon: ArrowRightLeft,
      },
    ]
  },
  {
    slug: 'sms-communication',
    title: 'SMS Communication',
    icon: Code,
    shortDescription: 'Reliable SMS services.',
    fullDescription: 'Stay connected with your customers through our reliable SMS communication platform. Send transaction alerts, marketing messages, and important notifications quickly and efficiently, enhancing customer engagement and security.',
    features: [],
    smsCommunicationFeatures: [
      {
        title: 'Bulk Message Sending Capabilities',
        description: 'Ability to send many SMS messages to multiple recipients at once.',
        icon: SmsIcon,
      },
      {
        title: 'Scheduled Messaging',
        description: 'Feature allowing users to schedule SMS messages for a future date and time.',
        icon: CalendarClock,
      },
      {
        title: 'Delivery Reports',
        description: 'Real-time delivery reports providing information on the status of sent messages, including delivery success or failure.',
        icon: LineChart,
      },
      {
        title: 'Sender ID Customization',
        description: 'Option for users to customize the sender ID, ensuring branding and recognition.',
        icon: UserCog,
      },
      {
        title: 'API Integration',
        description: 'API (Application Programming Interface) for seamless integration with business applications, websites, or software.',
        icon: Code,
      },
      {
        title: 'Two-Way Messaging',
        description: 'Capability for two-way communication, allowing recipients to reply to messages, facilitating customer engagement.',
        icon: Repeat,
      },
    ],
  },
  {
    slug: 'edms',
    title: 'EDMS',
    icon: Code,
    shortDescription: 'Electronic Document Management.',
    fullDescription: 'Go paperless and streamline your operations with our Electronic Document Management System (EDMS). Securely store, organize, and retrieve all your critical documents digitally, improving efficiency and reducing physical storage costs.',
    features: ['Secure Document Storage', 'Easy Retrieval', 'Version Control'],
  },
  {
    slug: 'e-board',
    title: 'E-Board',
    icon: Code,
    shortDescription: 'Digital board solutions.',
    fullDescription: 'Facilitate seamless and secure board meetings with our E-Board solution. This digital platform allows board members to access meeting materials, collaborate, and make decisions in a secure, centralized, and paperless environment.',
    features: ['Secure Meeting Materials', 'Digital Collaboration', 'Paperless Meetings'],
  },
  {
    slug: 'performance-management-system',
    title: 'Performance Management System',
    icon: BrainCircuit,
    shortDescription: 'Track and manage performance.',
    fullDescription: 'Drive organizational growth with our Performance Management System. This tool helps you set goals, track employee performance, provide feedback, and align individual objectives with overall business strategy, fostering a culture of continuous improvement.',
    features: ['Goal Setting', 'Performance Tracking', 'Feedback Management'],
  },
  {
    slug: 'members-portal',
    title: 'Members Portal',
    icon: Code,
    shortDescription: 'Portal for members.',
    fullDescription: 'Provide your members with a dedicated online portal to access their accounts, view statements, apply for services, and interact with your institution. Our Members Portal enhances member satisfaction and self-service capabilities.',
    features: ['Account Access', 'View Statements', 'Apply for Services'],
  },
  {
    slug: 'online-loan-form-submission',
    title: 'Online Loan Form Submission',
    icon: Code,
    shortDescription: 'Easy online loan applications.',
    fullDescription: 'Simplify the loan application process with our online submission system. Customers can apply for loans from anywhere, at any time, through a user-friendly digital form, reducing paperwork and speeding up approval times.',
    features: ['Digital Loan Forms', '24/7 Accessibility', 'Faster Approvals'],
  },
  {
    slug: 'e-guarantorship',
    title: 'E-Guarantorship',
    icon: Shield,
    shortDescription: 'Digital guarantorship services.',
    fullDescription: 'Facilitate the electronic submission and approval of guarantor information through an efficient and secure e-guarantorship system. This digital process simplifies one of the most critical steps in loan applications, making it faster and more transparent for all parties involved.',
    features: [
      'Electronic Guarantor Submission',
      'Secure Approval Workflow',
      'Transparent Process',
    ],
  },
  {
    slug: 'ict-consultancy',
    title: 'ICT Consultancy',
    icon: Cloud,
    shortDescription: 'Expert ICT advice.',
    fullDescription: 'Leverage our expertise to optimize your technology strategy. Our ICT consultancy services include strategic planning, system analysis, cybersecurity consulting, cloud solutions, and digital transformation guidance to help you achieve your business objectives.',
    features: [
      'Strategic Technology Planning',
      'Cybersecurity Consulting',
      'Digital Transformation',
    ],
  },
  {
    slug: 'training',
    title: 'Training',
    icon: PenTool,
    shortDescription: 'Professional training services.',
    fullDescription: 'Equip your team with the skills they need to succeed. We offer professional training on our software solutions and general ICT best practices, ensuring your staff can leverage technology effectively to drive business performance.',
    features: ['Software Training', 'ICT Best Practices', 'Custom Workshops'],
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
    author: 'Maria Garcia',
    date: '2024-06-28',
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
