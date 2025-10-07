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
            <div className="relative w-full max-w-lg mx-auto md:max-w-none md:mx-0">
              <div
                className="relative w-full aspect-[4/3] group"
                style={{
                  clipPath:
                    'path("M427,249.4c-20.9,50.3-78.9,76.5-133,70.1c-54.1-6.4-96.2-48.5-124.6-95c-28.4-46.5-43.2-100.1-20.4-142.2c22.8-42.1,86.2-61.1,139.7-50.5C342.3,43,386.7,87.6,413.7,133.4C440.7,179.2,447.9,202.1,427,249.4z")',
                }}
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/landingpage-image.png"
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
