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
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-purple-100/30 to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              About Us
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
