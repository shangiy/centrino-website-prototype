
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { services } from '@/lib/data';
import Testimonials from '@/components/testimonials';

const whyChooseUsData = [
  {
    title: 'Hiring',
    description: 'We hire a highly skilled workforce dedicated to staying abreast of the latest industry trends and technological advancements. Our team is committed to providing top-notch services and support to ensure the seamless integration and functioning of our technologies within your financial institution.'
  },
  {
    title: 'Industry Expertise',
    description: 'With years of specialization in SACCO solutions, we bring unparalleled industry knowledge to every partnership.'
  },
  {
    title: 'Innovation',
    description: 'Our commitment to continuous investment in cutting-edge technology ensures that our solutions are always at the forefront of industry advancements.'
  },
  {
    title: 'Customer-Centric Approach',
    description: 'We understand that every SACCO is unique. Our solutions are tailored to meet the specific organizational needs and challenges of each client.'
  },
  {
    title: 'Reliability',
    description: 'Centrino Technologies Ltd has a proven track record in delivering robust, scalable, and reliable systems that stand the test of time.'
  }
];

export default function AboutUsPage() {
  const featuredServices = services.filter(service => 
    ['core-banking', 'mobile-banking', 'agency-banking'].includes(service.slug)
  );

  const additionalServices = services.filter(service => 
    ['sms-communication', 'edms', 'e-board', 'performance-management-system', 'members-portal', 'online-loan-form-submission'].includes(service.slug)
  );

  const remainingServices = services.filter(service =>
    ['e-guarantor-ship', 'ict-consultancy', 'training'].includes(service.slug)
  );

  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="text-center mb-16">
                 <div className="inline-block rounded-full bg-primary/10 px-4 py-2 mb-4">
                    <p className="font-semibold tracking-wider text-sm text-primary uppercase">
                    Innovation Redefined
                    </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
                    Empowering Financial Institutions with <br />
                    <span className="text-primary">Tailored Technology Solutions</span>
                </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-muted-foreground space-y-6">
                    <p>
                        Centrino Technologies places a particular emphasis on empowering financial
                        institutions, recognizing their crucial role in financial inclusion and community
                        development. Our solutions are carefully crafted to address the specific challenges
                        faced by these institutions, offering a suite of technologies that enhance their
                        operational efficiency, improve member services, and ensure regulatory compliance.
                    </p>
                    <p>
                        Our success is reflected in the growth and achievements of our clients. Centrino
                        Technologies takes pride in contributing to the success stories of various financial
                        institutions, by empowering them with technology that aligns with their unique goals
                        and challenges.
                    </p>
                </div>
                 <div className="relative rounded-lg overflow-hidden aspect-[5/4] shadow-lg group">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Team collaborating"
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint="team collaboration"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 bg-primary"></div>
                        <p className="font-semibold tracking-wider text-sm text-primary uppercase">
                        Our Services
                        </p>
                        <div className="w-3 h-3 bg-primary"></div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredServices.map((service) => (
                        <Card key={service.slug} className="group flex flex-col items-center text-center p-6 bg-card shadow-lg border-primary/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
                             <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">
                                    {service.shortDescription}
                                </p>
                            </CardContent>
                            <Button asChild variant="outline">
                                <Link href={`/services/${service.slug}`}>
                                    {service.title === 'Core Banking' ? 'View Service' : 'Browse Service'}
                                </Link>
                            </Button>
                        </Card>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {additionalServices.map((service) => (
                        <Card key={service.slug} className="group flex flex-col items-center text-center p-6 bg-card shadow-lg border-primary/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
                             <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">
                                    {service.shortDescription}
                                </p>
                            </CardContent>
                            <Button asChild variant="outline">
                                <Link href={`/services/${service.slug}`}>
                                    Browse Service
                                </Link>
                            </Button>
                        </Card>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {remainingServices.map((service) => (
                        <Card key={service.slug} className="group flex flex-col items-center text-center p-6 bg-card shadow-lg border-primary/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
                             <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">
                                    {service.shortDescription}
                                </p>
                            </CardContent>
                            <Button asChild variant="outline">
                                <Link href={`/services/${service.slug}`}>
                                    Browse Service
                                </Link>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Why Choose Centrino Technologies?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {whyChooseUsData.map((item, index) => (
                <Card 
                  key={item.title} 
                  className={`bg-card shadow-lg border-primary/20 p-6 rounded-2xl ${index === 0 ? 'lg:col-span-1' : ''} ${index === 3 ? 'lg:col-span-1' : ''}`}
                >
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />

        {/* CTA Parallax Section */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center bg-fixed text-primary-foreground"
          style={{ backgroundImage: "url('/consultation.png')" }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Ready to Transform Your Financial Institution?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contact us today for a free consultation and discover how our innovative technology solutions can help you achieve your goals.
            </p>
            <Button asChild variant="secondary" size="lg" className="mt-8 rounded-full font-bold">
              <Link href="/contact">
                Contact Now
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
