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
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src={service.imageUrl || `https://picsum.photos/seed/${service.slug}/1200/800`}
            alt={service.title}
            fill
            className="object-cover"
            data-ai-hint="business technology"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
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
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Column - Description */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold font-headline text-primary">
                Solution Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>

            {/* Right Column - Features */}
            <div className="md:col-span-3 space-y-6">
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
                        className="bg-accent/50 border-0 border-l-4 border-primary rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-accent/80 hover:shadow-lg"
                      >
                        <CardContent className="p-0 flex flex-col items-center gap-4">
                            <div className="bg-primary/10 text-primary rounded-full p-3">
                                <Icon className="w-8 h-8" />
                            </div>
                            <p className="font-semibold text-foreground">
                            {feature}
                            </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
