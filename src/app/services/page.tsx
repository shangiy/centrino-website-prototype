import { ServiceSuggester } from '@/components/service-suggester';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We provide a wide range of technology services to help your business
          thrive in the digital age.
        </p>
      </section>

      <section className="mt-16">
        <ServiceSuggester />
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center font-headline mb-12">
          Explore Our Offerings
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {service.fullDescription}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
