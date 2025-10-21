
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Building, Gem, Target, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import StatsCounter from '@/components/stats-counter';
import Testimonials from '@/components/testimonials';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '100+', label: 'Satisfied Clients' },
  { value: '200+', label: 'Projects Completed' },
  { value: '15', label: 'Team Members' },
];

const values = [
    {
        icon: Gem,
        title: "Innovation",
        description: "We constantly seek to push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
        icon: Users,
        title: "Client-Centric",
        description: "Our clients' success is our success. We build partnerships based on trust and mutual growth."
    },
    {
        icon: Target,
        title: "Excellence",
        description: "We are committed to the highest standards of quality in everything we do."
    }
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-purple-100/30 to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              About Centrino
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl mx-auto text-center space-y-8">
                <h2 className='text-3xl font-bold font-headline'>Welcome To Centrino Technologies</h2>
                <div className='text-muted-foreground text-lg space-y-6'>
                    <p>
                        Centrino Technologies Ltd, with over a decade of experience in the financial technology landscape, stands as a beacon of technological innovation, offering tailored solutions to financial institutions Our unwavering commitment to excellence has positioned us as a trusted partner for institutions seeking advanced and customized technology solutions.
                    </p>
                    <p>
                       With a primary focus on empowering Microfinance Institutions (MFIs), Savings and Credit Cooperatives (SACCOs), and various financial institutions, Centrino Technologies has consistently delivered state-of-the-art products and services that redefine the way financial institutions operate and interact with their customers.
                    </p>
                </div>
            </div>
        </section>

        <StatsCounter />
        <section className="py-20 md:py-28 bg-background">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <div className="flex items-center gap-2">
                <p className="font-semibold tracking-wider text-sm text-primary uppercase">
                  Philosophy
                </p>
              </div>
              <h2 className="text-3xl font-bold font-headline">Technologies leverages over a decade of expertise</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  To provide cutting-edge technology solutions that empower Microfinance Institutions, SACCOs, and other financial institutions. We strive to elevate operational efficiency, enhance the customer experience, and foster overall growth by delivering innovative, scalable, and client-centric solutions.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptability, and a relentless pursuit of excellence. This wealth of experience positions us as industry leaders, uniquely equipped to address the diverse and evolving needs of financial institutions in today's dynamic environment.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/services">Browse Services</Link>
              </Button>
            </div>
             <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Business meeting"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint="business meeting"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/vision-bg.png')" }}
        >
          <div className="absolute inset-0 bg-primary/80 backdrop-brightness-75"></div>
          <div className="container relative z-10 grid md:grid-cols-2 items-center gap-12 text-primary-foreground">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                    data-ai-hint="team vision"
                />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-headline mb-4">
                Our Vision
              </h2>
              <p className="text-lg opacity-90">
                Simplifying complex needs through Innovative solutions that
                fosters business and community growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-[#52002d] text-white">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-headline">Our Mission</h2>
              <p className="text-lg opacity-90">
                To empower organisations to thrive through innovative fintech
                solutions that simplify complex needs, enable seamless
                integration, and foster excellence.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="/mission.png"
                alt="Our Mission"
                fill
                className="object-cover"
                data-ai-hint="business woman"
              />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
                alt="Our Core Values"
                fill
                className="object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-headline">Our Core Values</h2>
              <p className="text-lg opacity-90">
                These core values, represented by the acronym " ICE-SIG,"
                define the ethical guidelines and behaviors that guide Centrino
                Technologies' culture and decision-making. They reflect our
                commitment to Innovation, Excellence, client-centricity,
                integrity, Seamlessness, and Global Impact, providing a clear
                and focused framework for our organization's actions and
                interactions.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-fixed text-primary-foreground"
          style={{ backgroundImage: "url('/Partner with Us.png')" }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container relative z-10 py-20 text-center">
            <h2 className="text-3xl font-bold font-headline">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/90">
              Let's work together to build the next generation of financial technology.
            </p>
            <Button
              asChild
              variant="secondary"
              className="mt-8 rounded-full font-bold"
              size="lg"
            >
              <Link
                href="/contact"
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
