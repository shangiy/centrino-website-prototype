
import {
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
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
        <section className="w-full bg-gradient-to-r from-white via-pink-50 to-purple-100/60 dark:from-gray-900 dark:via-purple-950/20 dark:to-purple-950/40">
          <div className="container grid lg:grid-cols-5 gap-8 items-center py-12 md:py-24">
            <div className="space-y-6 text-left lg:col-span-3">
               <Badge variant="outline" className="border-primary/50 text-primary font-semibold">
                WELCOME TO CENTRINO TECHNOLOGIES
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
                Smarter Tech Solutions for <span className="text-primary">Financial Institutions</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg">
                We empower financial institutions with innovative software solutions to simplify complex needs, enhance customer experiences, and drive growth.
              </p>
              <Button size="lg" asChild>
                <Link href="/about">
                  Discover More
                </Link>
              </Button>
            </div>
            <div
              className="relative w-full aspect-square max-w-[450px] mx-auto lg:col-span-2"
              style={{ clipPath: 'path("M263.2,38.9c25.4-2,53.2,1,65.8,11.5s2.9,41.9-9.4,62.9s-33.8,40-58.4,45s-53.7-6.2-70.1-23.7 s-22-44-15.5-67.2s28.2-46.7,59.2-51.7S239.3,40.8,263.2,38.9z")' }}
            >
              {heroImage && (
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxidXNpbmVzcyUyMGRpc2N1c3Npb258ZW58MHx8fHwxNzU5ODgwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business discussion"
                  fill
                  className="object-cover"
                  data-ai-hint="business discussion"
                />
              )}
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
