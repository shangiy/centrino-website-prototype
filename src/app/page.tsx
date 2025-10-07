import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code,
  PenTool,
  Shield,
  Smartphone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { portfolioProjects, services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          <div className="relative z-10 container px-4 md:px-6 space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline">
              Innovative Technology for a Digital Future
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-200">
              Centrino Technologies delivers cutting-edge solutions in AI,
              cloud, and web development to propel your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  A Spectrum of Tech Excellence
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From intelligent algorithms to seamless user experiences, our
                  services are designed to solve complex challenges and create
                  lasting value.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <Card
                  key={service.title}
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-4 font-headline text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="link">
                <Link href="/services">View All Services →</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Our Work</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Digital Craftsmanship in Action
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of our projects that showcase our
                  commitment to quality, innovation, and client success.
                </p>
              </div>
            </div>
            <div className="py-12">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {portfolioProjects.slice(0, 4).map((project) => {
                    const projectImage = PlaceHolderImages.find(
                      (p) => p.id === project.imageId
                    );
                    return (
                      <CarouselItem
                        key={project.title}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Card className="overflow-hidden">
                            <CardContent className="p-0">
                              <div className="aspect-[3/2] relative">
                                {projectImage && (
                                  <Image
                                    src={projectImage.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={projectImage.imageHint}
                                  />
                                )}
                              </div>
                              <div className="p-4">
                                <h3 className="font-bold font-headline">
                                  {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {project.category}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/portfolio">Discover Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="testimonial"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <span className="font-bold text-primary">Testimonial</span>
              <blockquote className="text-xl md:text-2xl font-semibold italic">
                “Working with Centrino Technologies was a game-changer for our
                business. Their expertise and dedication resulted in a product
                that exceeded all our expectations.”
              </blockquote>
              <div>
                <p className="font-bold">Jane Doe</p>
                <p className="text-sm text-muted-foreground">
                  CEO, Innovate Inc.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
