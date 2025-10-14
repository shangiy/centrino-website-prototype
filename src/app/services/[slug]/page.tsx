
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
} from 'lucide-react';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

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
  default: Landmark,
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-white bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${service.imageUrl || `https://picsum.photos/seed/${service.slug}/1200/800`})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg opacity-90">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Features Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-headline text-primary text-center">
                Key Features
              </h3>
              {service.features && service.features.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.features.map((feature, index) => {
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
                        className="bg-accent/50 border-0 border-l-4 border-primary rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-accent/80 hover:shadow-lg min-h-[160px]"
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

       {/* CTA Parallax Section */}
       <section
        className="relative py-20 md:py-28 bg-cover bg-center bg-fixed text-primary-foreground"
        style={{ backgroundImage: "url('/meeting.png')" }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    Ready to Transform Your Business?
                </h2>
                <p className="mt-2 text-lg opacity-90 max-w-2xl">
                    Let's discuss how our solutions can help you achieve your goals. Get in touch with our experts today.
                </p>
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
