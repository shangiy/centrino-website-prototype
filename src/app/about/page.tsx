
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary/10">
          <div className="container text-center">
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
      </main>
    </div>
  );
}
