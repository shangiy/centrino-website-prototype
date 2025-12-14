
import Image from 'next/image';
import StatsCounter from '@/components/stats-counter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Testimonials from '@/components/testimonials';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center text-primary-foreground"
          style={{
            backgroundImage: "url('/centrino_3D.png')",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/80" />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
              About Us
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-8">
              Welcome To Centrino Technologies
            </h2>
            <div className="text-lg text-muted-foreground space-y-6">
              <p>
                Centrino Technologies Ltd, with over a decade of experience in the financial technology landscape, stands as a beacon of technological innovation, offering tailored solutions to financial institutions Our unwavering commitment to excellence has positioned us as a trusted partner for institutions seeking advanced and customized technology solutions.
              </p>
              <p>
                With a primary focus on empowering Microfinance Institutions (MFIs), Savings and Credit Cooperatives (SACCOs), and various financial institutions, Centrino Technologies has consistently delivered state-of-the-art products and services that redefine the way financial institutions operate and interact with their customers.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section
          className="relative py-24 md:py-32 bg-background"
        >
          <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-headline text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower organisations to thrive through innovative fintech solutions that simplify complex needs, enable seamless integration, and foster excellence.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover"
                data-ai-hint="business woman"
              />
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
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Technologies leverages over a decade of expertise
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  To provide cutting-edge technology solutions that empower Microfinance Institutions, SACCOs, and other financial institutions. We strive to elevate operational efficiency, enhance the customer experience, and foster overall growth by delivering innovative, scalable, and client-centric solutions.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptability, and a relentless pursuit of excellence. This wealth of experience positions us as industry leaders, uniquely equipped to address the diverse and evolving needs of financial institutions in today's dynamic environment.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Our Philosophy"
                fill
                className="object-cover"
                data-ai-hint="team meeting"
              />
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
        <section
            className="relative py-24 md:py-32 bg-cover bg-center text-primary-foreground"
            style={{
                backgroundImage:
                "url('/vision.png')",
            }}
            >
            <div className="absolute inset-0 bg-primary/90" />
            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg min-h-[300px]">
                <Image
                    src="/vision.png"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                    data-ai-hint="person future"
                />
                </div>
                <div className="space-y-6">
                <h2 className="text-4xl font-bold font-headline">Our Vision</h2>
                <p className="text-lg text-primary-foreground/90">
                    Simplifying complex needs through Innovative solutions that fosters
                    business and community growth.
                </p>
                </div>
            </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-24 md:py-32 text-primary-foreground"
          style={{ background: 'linear-gradient(to right, hsl(var(--primary)), #a83279)'}}
        >
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-headline">Our Core Values</h2>
              <p className="text-lg text-primary-foreground/90">
                These core values, represented by the acronym " ICE-SIG," define the ethical guidelines and behaviors that guide Centrino Technologies' culture and decision-making. They reflect our commitment to Innovation, Excellence, client-centricity, integrity, Seamlessness, and Global Impact, providing a clear and focused framework for our organization's actions and interactions.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg min-h-[300px]">
                <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
                    alt="Our Core Values"
                    fill
                    className="object-cover"
                    data-ai-hint="teamwork gear"
                />
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Parallax Section */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center bg-fixed text-primary-foreground"
          style={{ backgroundImage: "url('/consultation.png')" }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="container relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Ready to Transform Your Financial Institution?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contact us today for a free consultation and discover how our innovative technology solutions can help you achieve your goals.
            </p>
            <Button asChild variant="secondary" size="lg" className="mt-8 rounded-full font-bold">
              <Link href="/contact">
                Let's Get Started
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
