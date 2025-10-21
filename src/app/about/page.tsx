
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function AboutPage() {
    const expertiseItems = [
    "MIS for the microfinance sector",
    "E-Business (B2C, B2B, B2E, C2B etc.)",
    "E-Collaboration",
    "Workflow, content, document, and knowledge management",
    "Communications middleware",
    "Network management ICT security",
    "Broadband, mobile, and satellite ICT applications",
    "Outsourcing services, etc.",
  ];

  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="py-20 md:py-28 bg-background">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline">Empowering Financial Success Through Technology</h2>
              <h3 className="text-2xl font-bold font-headline text-primary">Our Expertise</h3>
              <p className="text-muted-foreground">
                Centrino Technologies, specializes in empowering financial institutions, particularly Microfinance Institutions (MFIs) and Savings, Credit Cooperatives (SACCOs), and various financial institutions with cutting-edge technology solutions.
              </p>
               <ul className="space-y-3">
                {expertiseItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about-us">Discover More</Link>
              </Button>
            </div>
             <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop"
                alt="Financial technology expert"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint="fintech expert"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
