'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Jane Odhiambo',
    title: 'Cloud Architect',
    avatar: 'https://picsum.photos/seed/jane/40/40',
    quote:
      'Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty',
  },
  {
    name: 'Michael Mwangi',
    title: 'Sales Manager',
    avatar: 'https://picsum.photos/seed/michael/40/40',
    quote:
      'Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty',
  },
  {
    name: 'Sarah Kimani',
    title: 'Project Manager',
    avatar: 'https://picsum.photos/seed/sarah/40/40',
    quote:
      'The team at Centrino is exceptional. They delivered our project on time and on budget, with a level of quality that exceeded our expectations. Their communication was clear and consistent throughout the process.',
  },
  {
    name: 'David Chen',
    title: 'CTO, FinCorp',
    avatar: 'https://picsum.photos/seed/david/40/40',
    quote:
      'Working with Centrino Technologies was a game-changer for our mobile banking platform. Their expertise and innovative solutions helped us create a seamless and secure experience for our customers.',
  },
];

const CircuitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 200 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M200 40H180V20H160V0H140"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M160 20H140" stroke="currentColor" strokeWidth="2" />
    <circle cx="180" cy="40" r="4" fill="currentColor" />
    <circle cx="160" cy="20" r="4" fill="currentColor" />
    <circle cx="140" cy="20" r="4" fill="currentColor" />
    <path d="M140 20H120V40H100" stroke="currentColor" strokeWidth="2" />
    <circle cx="120" cy="20" r="4" fill="currentColor" />
    <circle cx="120" cy="40" r="4" fill="currentColor" />
    <path d="M120 40H100" stroke="currentColor" strokeWidth="2" />
    <circle cx="100" cy="40" r="4" fill="currentColor" />
    <path d="M100 40H80V60H60" stroke="currentColor" strokeWidth="2" />
    <circle cx="80" cy="40" r="4" fill="currentColor" />
    <circle cx="80" cy="60" r="4" fill="currentColor" />
    <path d="M80 60H60" stroke="currentColor" strokeWidth="2" />
    <circle cx="60" cy="60" r="4"fill="currentColor" />
    <path d="M60 60H40V80H20V100H0" stroke="currentColor" strokeWidth="2" />
    <circle cx="40" cy="60" r="4" fill="currentColor" />
    <circle cx="40"cy="80" r="4" fill="currentColor" />
    <circle cx="20" cy="80" r="4" fill="currentColor" />
    <circle cx="20" cy="100" r="4" fill="currentColor" />
  </svg>
);

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container relative">
        <div className="flex items-center gap-8 mb-12">
            <CircuitIcon className="text-primary hidden md:block flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center md:text-left">
                Customers Experiences
            </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full bg-secondary/50 border-0 shadow-sm">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <blockquote className="text-muted-foreground italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            data-ai-hint="person face"
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold font-headline">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <div className="absolute -bottom-4 right-1/2 translate-x-1/2 md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
