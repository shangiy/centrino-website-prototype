import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

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
    <div className="container py-12 md:py-20">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/services">
            <ArrowLeft className="mr-2" />
            Back to Services
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
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

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p>
              This includes strategic technology planning, system analysis,
              cybersecurity consulting, cloud solutions, data management,
              digital transformation, and project management.
            </p>
            <p>
              Our consultancy services are designed to help organizations
              leverage technology effectively to achieve their business
              objectives and stay competitive in a rapidly evolving digital
              landscape.
            </p>
            <p>
              Through ICT consultancy, organizations can enhance efficiency,
              security, and overall performance by leveraging technology
              solutions aligned with their business objectives.
            </p>
          </div>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Learn More &rarr;</Link>
          </Button>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src={`https://picsum.photos/seed/${service.slug}/800/600`}
            alt={service.title}
            fill
            className="object-cover"
            data-ai-hint="technology solution"
          />
        </div>
      </div>
    </div>
  );
}
