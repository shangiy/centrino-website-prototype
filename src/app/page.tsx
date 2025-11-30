
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import StatsCounter from '@/components/stats-counter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import React, { useEffect, useState } from 'react';
import Testimonials from '@/components/testimonials';
import Partners from '@/components/partners';
import { RevolvingGlobeIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isRevealed, setIsRevealed] = useState(false);
  useEffect(() => {
    // Trigger the reveal animation shortly after the component mounts
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const expertiseItems = [
    "MIS for the microfinance sector",
    "E-Business (B2C, B2B, B2E, C2B etc.)",
    "E-Collaboration",
    "Workflow, content, document, and knowledge management",
    "Communications middleware",
    "Network management ICT security",
    "Broadband, mobile, and satellite ICT applications",
    "Outsourcing services, etc.",
  ];

  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-background via-purple-50 to-purple-100 text-foreground py-16 md:py-24">
          <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center md:text-left">
               <div className='flex items-center gap-2 font-semibold justify-center md:justify-start'>
                <div className='w-2 h-2 bg-primary' />
                <p>
                  <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 bg-clip-text text-transparent">
                    WELCOME TO CENTRINO TECHNOLOGIES
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground -mt-4">
                <RevolvingGlobeIcon />
                <span>www.centrino.co.ke</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Smarter Tech Solutions for <span className='text-primary'>Financial Institutions</span>
              </h1>
              <p className="text-lg max-w-md mx-auto md:mx-0 text-muted-foreground">
                We empower financial institutions with innovative software solutions to simplify complex needs, enhance customer experiences, and drive growth.
              </p>
              <Button asChild>
                <Link
                  href="/about"
                >
                  Discover More
                </Link>
              </Button>
            </div>
            <div
                className={cn('hidden md:flex justify-center items-center image-reveal-container', { revealed: isRevealed })}
              >
                <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl">
                    <Image
                        src="/landingpage_image.png"
                        alt="Creative Design"
                        fill
                        className="object-cover ken-burns"
                        data-ai-hint="abstract design"
                        priority
                    />
                </div>
              </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-accent" />
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[200px]">
              <path d="M0,100 C150,42 300,100 450,80 S750,20 900,50 1150,110 1300,80 1440,50 1440,50 L1440,100 L0,100 Z" className="fill-accent"></path>
              <path d="M0,100 C150,42 300,100 450,80 S750,20 900,50 1150,110 1300,80 1440,50 1440,50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative pt-20 md:pt-28 pb-20 md:pb-28 bg-accent">
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-primary"></div>
                <p className="font-semibold tracking-wider text-sm text-primary">
                  OUR SERVICES
                </p>
                <div className="w-3 h-3 bg-primary"></div>
              </div>
              <h2 className="text-3xl font-bold font-headline mt-4">
                Services We Provide
              </h2>
              <p className="mt-4 text-muted-foreground">
                We help financial institutions navigate the digital landscape
                with innovative solutions that enhance member experiences,
                streamline operations, and drive sustainable growth.
              </p>
            </div>
            <div className="mt-16">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full"
              >
                <CarouselContent>
                  {services.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="group flex flex-col h-full overflow-hidden rounded-2xl shadow-lg border-none bg-card transition-all duration-300 hover:shadow-2xl">
                           <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                            <Image
                              src={service.imageUrl || `https://picsum.photos/seed/${service.slug}/400/300`}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint="business technology"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          </div>
                          <CardContent className="p-6 flex flex-col flex-grow items-start text-left w-full">
                              <h3 className="text-2xl font-bold font-headline text-foreground">
                                {service.title}
                              </h3>
                              <p className="text-muted-foreground mt-2 flex-grow">
                                {service.shortDescription}
                              </p>
                              <Button asChild className="mt-4 rounded-full">
                                <Link href={`/services/${service.slug}`}>Learn More</Link>
                              </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        <StatsCounter />

        <section className="py-20 md:py-28 bg-background financial-success-section">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Empowering Financial Success Through Technology
              </h2>
              <h3 className="text-xl font-bold">Our Expertise</h3>
              <p className="text-muted-foreground">
                Centrino Technologies, specializes in empowering financial
                institutions, particularly Microfinance Institutions (MFIs) and
                Savings, Credit Cooperatives (SACCOs), and various financial
                institutions with cutting-edge technology solutions.
              </p>
              <ul className="space-y-3">
                {expertiseItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about-us">Discover More</Link>
              </Button>
            </div>
            <div ref={imageRef} className={cn("relative rounded-lg overflow-hidden aspect-[9/16] shadow-xl max-w-sm mx-auto w-full tech-guy-image", { 'is-visible': imageInView })}>
              <Image
                src="/net_fintech.png"
                alt="Technician working in a server room"
                fill
                className="object-cover"
                data-ai-hint="fintech dashboard"
              />
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
                Let's Get Started
              </Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/net_fintech.png"
                alt="Financial technology dashboard"
                fill
                className="object-cover"
                data-ai-hint="fintech dashboard"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary"></div>
                <p className="font-semibold tracking-wider text-sm text-primary">
                  WHY CENTRINO?
                </p>
              </div>
              <h2 className="text-3xl font-bold font-headline">
                Your Trusted Partner in Financial Technology
              </h2>
              <p className="text-muted-foreground">
                With over a decade of experience, we deliver reliable, secure,
                and innovative solutions tailored to the unique needs of
                financial institutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Expertise & Experience</h4>
                    <p className="text-muted-foreground text-sm">
                      Our team consists of industry veterans with deep knowledge
                      of the financial sector.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Customer-Centric Approach</h4>
                    <p className="text-muted-foreground text-sm">
                      We build long-term partnerships by understanding and
                      addressing our clients' specific challenges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Innovation at our Core</h4>
                    <p className="text-muted-foreground text-sm">
                      We are constantly exploring new technologies to bring you
                      the best-in-class solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Partners />

        <section className="py-12 md:py-20 bg-background">
          <div
            className="container max-w-6xl mx-auto rounded-lg overflow-hidden"
          >
             <div className="grid md:grid-cols-2 gap-8 items-center bg-secondary/90 p-8 md:p-12"
                 style={{
                    backgroundImage: "url('/circuit-board.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
             >
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary"></div>
                  <p className="font-semibold tracking-wider text-sm text-primary uppercase">
                    Start Work With Us
                  </p>
                </div>
                <h2 className="text-4xl font-bold font-headline">
                  Your Trusted Financial Technology Partner
                </h2>
                <p className="text-muted-foreground">
                  Emphasize the long-term value Centrino provides with ongoing
                  support, partnership, and a commitment to your success. From
                  core banking systems to mobile applications, we deliver
                  innovative and reliable services to drive your business
                  forward.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Let's Get Started</Link>
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <Image
                  src="/Customer-Service.png"
                  alt="Man working at computer"
                  fill
                  className="object-cover"
                  data-ai-hint="person working"
                />
              </div>
            </div>
             <div className="bg-primary text-primary-foreground">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center py-6 px-8">
                <p className="font-semibold">Fast 24/7 Customer Service</p>
                <p className="font-semibold border-t md:border-t-0 md:border-l border-primary-foreground/30 pt-4 md:pt-0">
                  Save time & valuable money
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
