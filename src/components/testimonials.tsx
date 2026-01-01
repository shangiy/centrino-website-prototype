
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
      'Centrino\'s core banking solution has been a cornerstone of our digital transformation. The system is robust, scalable, and their support team is always responsive to our needs, ensuring our operations run smoothly around the clock.',
  },
  {
    name: 'Michael Mwangi',
    title: 'Sales Manager',
    avatar: 'https://picsum.photos/seed/michael/40/40',
    quote:
      'The mobile and agency banking platforms from Centrino have drastically expanded our market reach. We can now serve customers in remote areas efficiently, which has been incredible for our growth and financial inclusion goals.',
  },
  {
    name: 'Albert Kimani',
    title: 'Cloud Architect',
    avatar: 'https://picsum.photos/seed/albert/40/40',
    quote:
      'Integrating Centrino’s SMS and E-Board solutions streamlined our communications and governance. Board meetings are now seamless, and we can engage with our members instantly and securely. A truly transformative partnership.',
  },
  {
    name: 'David Chen',
    title: 'CTO, FinCorp',
    avatar: 'https://picsum.photos/seed/david/40/40',
    quote:
      'Working with Centrino Technologies was a game-changer for our mobile banking platform. Their expertise and innovative solutions helped us create a seamless and secure experience for our customers.',
  },
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
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
           <CarouselPrevious className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2" />
           <CarouselNext className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
