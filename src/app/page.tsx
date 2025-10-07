import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-white via-pink-50 to-purple-100/60 dark:from-gray-900 dark:via-purple-950/20 dark:to-purple-950/40">
          <div className="container grid lg:grid-cols-5 gap-8 items-center py-12 md:py-24">
            <div className="space-y-6 text-left lg:col-span-3">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary font-semibold"
              >
                WELCOME TO CENTRINO TECHNOLOGIES
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
                Smarter Tech Solutions for{' '}
                <span className="text-primary">Financial Institutions</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg">
                We empower financial institutions with innovative software
                solutions to simplify complex needs, enhance customer
                experiences, and drive growth.
              </p>
              <Button size="lg" asChild>
                <Link href="/about"> Discover More </Link>
              </Button>
            </div>
            <div
              className="relative w-full aspect-square max-w-[450px] mx-auto lg:col-span-2"
              style={{
                clipPath:
                  'path("M315.8,46.7c30.5-2.4,63.8,1.2,79,13.8s3.5,50.3-11.3,75.5s-40.6,48-70.1,54s-64.4-7.4-84.1-28.4 s-26.4-52.8-18.6-80.6s33.8-56,71-62S287.2,49,315.8,46.7z")',
              }}
            >
              <Image
                src="/landingpage-image.png"
                alt="Business discussion"
                fill
                className="object-cover"
                data-ai-hint="business discussion"
              />
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
                From core banking systems to mobile solutions, we provide the
                tools you need to succeed.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-card rounded-lg border shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-headline">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground text-sm">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="link" className="text-primary">
                <Link href="/services">
                  View all services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
      </main>
    </div>
  );
}
