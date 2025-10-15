'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const partners = [
  { src: '/eset-logo.png', alt: 'Eset Logo' },
  { src: '/zoho-logo.png', alt: 'Zoho Logo' },
  { src: '/zamupay-logo.png', alt: 'Zamupay Logo' },
  { src: '/applied-principles-logo.png', alt: 'Applied Principles Logo' },
  { src: '/safaricom-logo.png', alt: 'Safaricom Logo' },
];

export default function Partners() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section
      className="relative py-20 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/partners-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="container relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-3 h-3 bg-primary"></div>
          <p className="font-semibold tracking-wider text-sm text-primary">
            OUR PARTNERS
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">
          Meet our Partners
        </h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {partners.map((partner, index) => (
              <CarouselItem
                key={index}
                className="pl-8 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="p-1">
                  <div className="flex items-center justify-center h-24 p-4 bg-white rounded-lg shadow-md">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={150}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
