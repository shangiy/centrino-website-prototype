import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Building, Gem, Target, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
        <section className="relative py-24 md:py-32 bg-gradient-to-r from-purple-50/10 via-pink-50/10 to-purple-100/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              About <span className="text-primary">Centrino Technologies</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Leveraging over a decade of expertise to provide cutting-edge technology solutions that empower Microfinance Institutions, SACCOs, and other financial institutions.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-20 md:py-28">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className='space-y-6'>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary"></div>
                        <p className="font-semibold tracking-wider text-sm text-primary">OUR PURPOSE</p>
                    </div>
                    <h2 className='text-3xl font-bold font-headline'>Our Mission & Vision</h2>
                    <p className='text-muted-foreground'>
                        Our mission is to empower financial institutions with innovative, reliable, and secure software solutions that simplify complex needs, enhance customer experiences, and drive sustainable growth. We envision a future where technology seamlessly connects institutions with their members, fostering financial inclusion and prosperity for all.
                    </p>
                </div>
                 <div className="relative rounded-lg overflow-hidden aspect-video">
                    <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NTk4ODEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Team meeting" fill className="object-cover" data-ai-hint="team meeting" />
                </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-20 md:py-28">
            <div className="container text-center max-w-4xl">
                <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-primary"></div>
                    <p className="font-semibold tracking-wider text-sm text-primary">OUR VALUES</p>
                </div>
                <h2 className='text-3xl font-bold font-headline mt-4 mb-12'>The Principles That Guide Us</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {values.map((value) => {
                        const Icon = value.icon;
                        return (
                        <div key={value.title} className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold font-headline mt-6 mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    )})}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 text-center">
            <h2 className="text-3xl font-bold font-headline">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-xl mx-auto opacity-80">
              Let's work together to build the next generation of financial technology.
            </p>
            <Button
              asChild
              variant="secondary"
              className="mt-8 rounded-full font-bold"
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
