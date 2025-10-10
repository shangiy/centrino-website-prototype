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
        <section className="relative w-full overflow-hidden bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 text-white py-20 px-6 md:px-16 lg:px-24">
          {/* Gradient Overlay Blur for Futuristic Feel */}
          <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-purple-600/20 to-pink-400/10"></div>
          <div className="relative grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto z-10">
            {/* LEFT CONTENT */}
            <div className="space-y-6 text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Design <br />
                <span className="text-yellow-300">is a formal response</span>
              </h1>
              <p className="text-lg max-w-md text-white/90">
                A forward-thinking approach to visual communication and creative
                problem-solving for modern businesses.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 shadow-md"
              >
                Let’s Begin
              </Link>
            </div>

            {/* RIGHT IMAGE SHAPE */}
            <div className="relative w-full aspect-square max-w-[420px] mx-auto">
              {/* Blob Shape Mask */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath:
                    'path("M315.8,46.7c30.5-2.4,63.8,1.2,79,13.8s3.5,50.3-11.3,75.5s-40.6,48-70.1,54s-64.4-7.4-84.1-28.4 s-26.4-52.8-18.6-80.6s33.8-56,71-62S287.2,49,315.8,46.7z")',
                  overflow: 'hidden',
                  transform: 'scale(1.2)',
                  transformOrigin: 'center',
                }}
              >
                <Image
                  src="/landingpage-image.png"
                  alt="Creative professional"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Gradient Orbs */}
              <div className="absolute top-6 left-10 w-8 h-8 bg-yellow-300 rounded-full blur-sm opacity-80 animate-pulse"></div>
              <div className="absolute bottom-10 right-6 w-10 h-10 bg-pink-400 rounded-full blur-md opacity-60 animate-bounce"></div>
              <div className="absolute -top-4 right-1/2 w-16 h-16 bg-purple-500/50 rounded-full blur-2xl opacity-40 animate-ping"></div>
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
