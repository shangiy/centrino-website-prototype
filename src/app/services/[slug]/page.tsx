import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    <div className="bg-secondary/30">
      <div className="container py-12 md:py-20">
        <div className="mb-8">
          <Button asChild variant="outline" className='bg-background'>
            <Link href="/services">
              <ArrowLeft className="mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <service.icon className="w-10 h-10" />
                </div>
                <h1 className="text-4xl font-bold font-headline">
                  {service.title}
                </h1>
              </div>

              <p className="text-lg text-muted-foreground">
                {service.fullDescription}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="space-y-3 pt-4">
                   <h3 className="text-xl font-bold font-headline">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={`https://picsum.photos/seed/${service.slug}/800/600`}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="technology solution"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
