
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

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
            src={`https://picsum.photos/seed/${service.slug}/1200/800`}
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
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-3 gap-12">
          {/* Left Column - Description */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold font-headline text-primary">
              Solution Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline text-primary">
              Key Features
            </h3>
            {service.features && service.features.length > 0 && (
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
             <Button asChild size="lg" className="mt-4 w-full">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
