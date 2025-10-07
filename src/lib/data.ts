import {
  BrainCircuit,
  Cloud,
  Code,
  type LucideIcon,
  PenTool,
  Shield,
  Smartphone,
} from 'lucide-react';

export interface Service {
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
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
    title: 'Core Banking',
    icon: Code,
    shortDescription: 'Comprehensive banking solutions.',
    fullDescription: 'Comprehensive banking solutions.',
  },
  {
    title: 'Mobile Banking',
    icon: Smartphone,
    shortDescription: 'Banking on the go.',
    fullDescription: 'Banking on the go.',
  },
  {
    title: 'Agency Banking',
    icon: Code,
    shortDescription: 'Extending banking services.',
    fullDescription: 'Extending banking services.',
  },
  {
    title: 'SMS Communication',
    icon: Code,
    shortDescription: 'Reliable SMS services.',
    fullDescription: 'Reliable SMS services.',
  },
  {
    title: 'EDMS',
    icon: Code,
    shortDescription: 'Electronic Document Management.',
    fullDescription: 'Electronic Document Management.',
  },
  {
    title: 'E-Board',
    icon: Code,
    shortDescription: 'Digital board solutions.',
    fullDescription: 'Digital board solutions.',
  },
  {
    title: 'Performance Management System',
    icon: BrainCircuit,
    shortDescription: 'Track and manage performance.',
    fullDescription: 'Track and manage performance.',
  },
  {
    title: 'Members Portal',
    icon: Code,
    shortDescription: 'Portal for members.',
    fullDescription: 'Portal for members.',
  },
  {
    title: 'Online Loan Form Submission',
    icon: Code,
    shortDescription: 'Easy online loan applications.',
    fullDescription: 'Easy online loan applications.',
  },
  {
    title: 'E-Guarantorship',
    icon: Shield,
    shortDescription: 'Digital guarantorship services.',
    fullDescription: 'Digital guarantorship services.',
  },
  {
    title: 'ICT Consultancy',
    icon: Cloud,
    shortDescription: 'Expert ICT advice.',
    fullDescription: 'Expert ICT advice.',
  },
  {
    title: 'Training',
    icon: PenTool,
    shortDescription: 'Professional training services.',
    fullDescription: 'Professional training services.',
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
