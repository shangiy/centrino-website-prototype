import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { portfolioProjects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortfolioPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
          Our Portfolio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A showcase of our passion for technology and commitment to delivering
          excellence.
        </p>
      </section>

      <section className="mt-16">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => {
            const projectImage = PlaceHolderImages.find(
              (p) => p.id === project.imageId
            );
            return (
              <Card
                key={project.title}
                className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-primary font-semibold">
                    Case Study
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
