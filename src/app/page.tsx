import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/data";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
           {heroImage && <div className="absolute inset-0 z-0">
                <Image 
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover object-center"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/80 to-background"></div>
            </div>}
          <div className="container relative z-10 text-center">
            <Badge>Empowering Financial Innovation</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
              Technology Solutions for a{' '}
              <span className="text-primary">Digital Future</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              We specialize in Core Banking, Mobile Banking, EDMS, and ICT
              Consultancy to help financial institutions thrive in the digital
              age.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-headline">
                Comprehensive Solutions for Financial Institutions
              </h2>
              <p className="mt-4 text-muted-foreground">
                From core banking systems to mobile solutions, we provide the tools you need to succeed.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <div key={service.title} className="p-6 bg-card rounded-lg border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-headline">{service.title}</h3>
                        <p className="mt-1 text-muted-foreground text-sm">{service.shortDescription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
                <Button asChild variant="link" className="text-primary">
                    <Link href="/services">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image 
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmaW50ZWNofGVufDB8fHx8MTc1OTgxNjYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Financial technology dashboard"
                    fill
                    className="object-cover"
                    data-ai-hint="fintech dashboard"
                />
            </div>
            <div className="space-y-6">
                <Badge>Why Centrino?</Badge>
              <h2 className="text-3xl font-bold font-headline">
                Your Trusted Partner in Financial Technology
              </h2>
              <p className="text-muted-foreground">
                With over a decade of experience, we deliver reliable, secure, and innovative solutions tailored to the unique needs of financial institutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Expertise & Experience</h4>
                    <p className="text-muted-foreground text-sm">Our team consists of industry veterans with deep knowledge of the financial sector.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Customer-Centric Approach</h4>
                    <p className="text-muted-foreground text-sm">We build long-term partnerships by understanding and addressing our clients' specific challenges.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Innovation at our Core</h4>
                    <p className="text-muted-foreground text-sm">We are constantly exploring new technologies to bring you the best-in-class solutions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
