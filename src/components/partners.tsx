
'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { RevolvingGlobeIcon } from './icons';

const partners = [
  { src: '/eset-P.png', alt: 'Eset Logo' },
  { src: '/zoho.png', alt: 'Zoho Logo' },
  { src: '/zamupay-P.png', alt: 'Zamupay Logo' },
  { src: '/applied P consulting.png', alt: 'Applied Principles Consulting Logo' },
  { src: '/safaricom-P.png', alt: 'Safaricom Logo' },
  { src: '/pycs-P.png', alt: 'Pycs Logo' },
  { src: '/comztech-P.png', alt: 'Comztech Logo' },
  { src: '/presta.png', alt: 'Presta Logo' },
  { src: '/serianu.png', alt: 'Serianu Logo' },
];

export default function Partners() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section
      className="relative py-20 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/centrino_3D.png')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="container relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-primary">
          <RevolvingGlobeIcon />
          <p className="font-semibold tracking-wider text-sm">
            OUR PARTNERS
          </p>
          <RevolvingGlobeIcon />
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
