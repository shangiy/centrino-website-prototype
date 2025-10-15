














import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Banknote,
  Home,
  FileText,
  Landmark,
  Lock,
  Users,
  ArrowRightLeft,
  type LucideIcon,
  Workflow,
  Scaling,
  Headset,
  Globe,
  Smartphone,
  Server,
  User,
  Fingerprint,
  PiggyBank,
  HandCoins,
  DollarSign,
  UserCheck,
  UserPlus,
  CreditCard,
  Contact,
  MessageSquarePlus,
  CalendarClock,
  LineChart,
  UserCog,
  Code,
  Repeat,
} from 'lucide-react';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Mapping feature names to icons
const featureIcons: { [key: string]: LucideIcon } = {
  'Account Management': Home,
  'Transaction Processing': ArrowRightLeft,
  'Customer Relationship Management (CRM)': Users,
  'Loan Management': Banknote,
  'Security and Compliance': Lock,
  'Reporting and Analytics': FileText,
  'Workflow Automation': Workflow,
  'Scalability and Flexibility': Scaling,
  'Customer Self-Service': Headset,
  'Biometric Management': Fingerprint,
  default: Landmark,
};

const MobileBankingContent = ({ service }: { service: any }) => (
  <div className="py-16 md:py-24 bg-secondary/30">
    <div className="container text-center">
      <h2 className="text-3xl font-bold font-headline text-primary mb-4">
        {service.subTitle}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
        {service.subDescription}
      </p>

      <Tabs defaultValue={service.mobileBankingFeatures[0].title} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto bg-primary/10 p-2 rounded-lg">
          {service.mobileBankingFeatures.map((feature: any) => (
             <TabsTrigger key={feature.title} value={feature.title} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md py-3 text-lg font-semibold">
               {feature.title}
             </TabsTrigger>
          ))}
        </TabsList>
        {service.mobileBankingFeatures.map((feature: any) => {
            const Icon = feature.icon === 'Globe' ? Globe : feature.icon === 'Smartphone' ? Smartphone : Server;
            return (
          <TabsContent key={feature.title} value={feature.title}>
            <Card className="mt-8 border-none shadow-none bg-transparent">
              <CardContent className="grid md:grid-cols-2 gap-12 items-center text-left p-8">
                <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                        <div className="bg-primary/20 p-4 rounded-full">
                            <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className='relative aspect-video rounded-lg overflow-hidden shadow-lg'>
                    <Image src={feature.imageUrl} alt={feature.title} fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )})}
      </Tabs>
    </div>
     <div className="container mt-20">
        <h2 className="text-3xl font-bold font-headline text-primary mb-8 text-center">
            PesaPepe Features
        </h2>
        <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image 
                src="/PesaPepe-features.png" 
                alt="PesaPepe Features"
                layout="responsive"
                width={1200}
                height={675}
                className="rounded-lg shadow-lg"
            />
        </div>
    </div>
  </div>
);

const AgencyBankingContent = ({service}: {service: any}) => (
  <section className="py-16 md:py-24 bg-secondary/30">
    <div className="container">
       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.agencyBankingFeatures.map((feature: any) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full p-6 text-center items-center bg-card hover:bg-white border-0 border-l-4 border-primary rounded-xl shadow-md">
                  <div className="bg-primary/10 text-primary rounded-full p-3 mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
    </div>
  </section>
);

const SmsCommunicationContent = ({service}: {service: any}) => (
  <section className="py-16 md:py-24 bg-secondary/30">
    <div className="container">
       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.smsCommunicationFeatures.map((feature: any) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full p-6 text-center items-center bg-card hover:bg-white border-0 border-l-4 border-primary rounded-xl shadow-md">
                  <div className="bg-primary/10 text-primary rounded-full p-3 mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
    </div>
  </section>
);

const OnlineLoanSubmissionContent = ({service}: {service: any}) => (
  <section className="py-16 md:py-24 bg-secondary/30">
    <div className="container">
      <h2 className="text-3xl font-bold font-headline text-primary mb-12 text-center">
        Form Submission Features
      </h2>
       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.onlineLoanSubmissionFeatures.map((feature: any) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full p-6 text-center items-center bg-card hover:bg-white border-0 border-l-4 border-primary rounded-xl shadow-md">
                  <div className="bg-primary/10 text-primary rounded-full p-3 mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
    </div>
  </section>
);

const EdmsContent = () => (
    <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className='text-3xl font-bold font-headline'>Electronic Document Management System</h2>
                <div className='text-muted-foreground space-y-4'>
                    <p>
                        a software solution that facilitates the creation, organization, storage, retrieval, and management of digital documents within an organization.
                    </p>
                    <p>
                        It streamlines document-centric processes, enhances collaboration, ensures version control, and promotes secure access to information. Key features include document capture, indexing, workflow automation, versioning, and security protocols.
                    </p>
                    <p>
                        EDMS aims to reduce paper dependency, improve efficiency, and enhance compliance with document-related regulations.
                    </p>
                </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
                <Image src="/EDMS.png" alt="Electronic Document Management System" fill className="object-cover" />
            </div>
        </div>
    </section>
);

const MembersPortalContent = ({ service }: { service: any }) => (
  <section className="py-16 md:py-24 bg-secondary/30">
    <div className="container">
      <h2 className="text-3xl font-bold font-headline text-primary mb-12 text-center">
        Key Features
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {service.membersPortalFeatures.map((feature: any) => (
          <Card
            key={feature.title}
            className="group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full p-6 bg-card hover:bg-white border-0 border-l-4 border-primary rounded-xl shadow-md"
          >
            <CardHeader className="p-0 mb-2">
              <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);


export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const renderContent = () => {
    switch(service.slug) {
      case 'mobile-banking':
        return <MobileBankingContent service={service} />;
      case 'agency-banking':
        return <AgencyBankingContent service={service} />;
      case 'sms-communication':
        return <SmsCommunicationContent service={service} />;
      case 'online-loan-form-submission':
        return <OnlineLoanSubmissionContent service={service} />;
      case 'edms':
        return <EdmsContent />;
      case 'members-portal':
        return <MembersPortalContent service={service} />;
      case 'performance-management-system':
        return (
          <section className="py-16 md:py-24 bg-background">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">
                  Performance Management System:
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    A Performance Management System is a strategic approach to
                    aligning individual and team performance with organizational
                    goals.
                  </p>
                  <p>
                    It involves setting clear and measurable objectives,
                    providing continuous feedback, conducting regular
                    performance assessments, and fostering employee development.
                  </p>
                  <p>
                    Recognition and rewards are used to motivate high
                    performance, and data-driven insights guide
                    decision-making. The system aims to engage employees,
                    encourage continuous improvement, and enhance overall
                    organizational effectiveness.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
                <Image
                  src={service.imageUrl || ''}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        );
      default:
        return (
        <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Features Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-headline text-primary text-center">
                Key Features
              </h3>
              {service.features && Array.isArray(service.features) && service.features.length > 0 && typeof service.features[0] === 'string' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(service.features as string[]).map((feature, index) => {
                    const Icon =
                      Object.keys(featureIcons).find((key) =>
                        feature.includes(key)
                      )
                        ? featureIcons[
                            Object.keys(featureIcons).find((key) =>
                              feature.includes(key)
                            )!
                          ]
                        : featureIcons.default;
                    return (
                      <Card
                        key={index}
                        className="bg-card border-0 border-l-4 border-primary rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-accent/80 hover:shadow-lg min-h-[180px]"
                      >
                        <CardContent className="p-0 flex flex-col items-center gap-4">
                            <div className="bg-primary/10 text-primary rounded-full p-3">
                                <Icon className="w-8 h-8" />
                            </div>
                            <p className="font-semibold text-foreground text-lg">
                            {feature}
                            </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Description Section */}
            <div className="space-y-6 mt-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-headline text-primary">
                Solution Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }


  return (
    <div>
      {/* Hero Section */}
       <section className="relative h-screen min-h-[500px] w-full flex items-center justify-start text-white bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${service.imageUrl || `https://picsum.photos/seed/${service.slug}/1200/800`})` }}
        >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container">
            <div className='max-w-xl'>
                <div className='bg-primary px-4 py-2 inline-block rounded-md mb-4'>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
                        {service.title}
                    </h1>
                </div>
                {service.slug !== 'e-board' && service.slug !== 'performance-management-system' && service.shortDescription && (
                    <p className="mt-2 text-lg md:text-xl opacity-90">
                        {service.shortDescription}
                    </p>
                )}
            </div>
        </div>
      </section>

      {renderContent()}


       {/* CTA Parallax Section */}
       <section
        className="relative py-20 md:py-28 bg-cover bg-center bg-fixed text-primary-foreground"
        style={{ backgroundImage: "url('/meeting.png')" }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    Ready to Partner with Us?
                </h2>
            </div>
            <Button asChild variant="secondary" size="lg" className="rounded-full font-bold shrink-0">
                <Link href="/contact">
                    Contact Us
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
