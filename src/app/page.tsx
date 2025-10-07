import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/lib/data';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-50/10 via-pink-50/10 to-purple-100/20 py-20 md:py-32 overflow-hidden">
          <div className="container grid md:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-primary"></div>
                <p className="font-semibold tracking-wider text-sm">
                  WELCOME TO CENTRINO TECHNOLOGIES
                </p>
              </div>
              <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
                Smarter Tech Solutions for{' '}
                <span className="text-primary">Financial Institutions</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                We empower financial institutions with innovative software
                solutions to simplify complex needs, enhance customer
                experiences, and drive growth.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/services">Discover More</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-md mx-auto md:max-w-none md:mx-0">
              <div
                className="relative w-full aspect-[4/3.5] group"
                style={{
                  clipPath:
                    'path("M413.9,131.3c23.2-22.3,55-32.3,77.3-15.3c24,18.3,21.3,64.6,14.6,98.6c-6.8,34-17.8,61.7-41.2,76.8 c-25.1,16.2-62.8,11.9-96.2-4.1c-33.4-16-62.5-47.7-77.9-80.1s-17-65.2-1.3-89.8C204.6,93,253.1,88.4,293.4,92.5 C336.5,96.8,389.2,155,413.9,131.3z")',
                }}
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBkaXNjdXNzaW5nfGVufDB8fHx8MTc1OTg4NDQxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business team discussing"
                    fill
                    className="object-cover"
                    data-ai-hint="business team discussion"
                    priority
                  />
                </div>
              </div>
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
