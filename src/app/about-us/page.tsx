
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
                 <div className="inline-block rounded-full bg-primary/10 px-4 py-2 mb-4">
                    <p className="font-semibold tracking-wider text-sm text-primary uppercase">
                    Innovation Redefined
                    </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
                    Empowering Financial Institutions with <br />
                    <span className="text-primary">Tailored Technology Solutions</span>
                </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-muted-foreground space-y-6">
                    <p>
                        Centrino Technologies places a particular emphasis on empowering financial
                        institutions, recognizing their crucial role in financial inclusion and community
                        development. Our solutions are carefully crafted to address the specific challenges
                        faced by these institutions, offering a suite of technologies that enhance their
                        operational efficiency, improve member services, and ensure regulatory compliance.
                    </p>
                    <p>
                        Our success is reflected in the growth and achievements of our clients. Centrino
                        Technologies takes pride in contributing to the success stories of various financial
                        institutions, by empowering them with technology that aligns with their unique goals
                        and challenges.
                    </p>
                </div>
                 <div className="relative rounded-lg overflow-hidden aspect-[5/4] shadow-lg group">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Team collaborating"
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint="team collaboration"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
