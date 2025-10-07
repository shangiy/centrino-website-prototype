import ContactForm from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? We&apos;d love to
          hear from you.
        </p>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card p-8 md:p-12 rounded-lg shadow-lg">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline">Get in Touch</h2>
            <p className="text-muted-foreground">
              Our team is ready to answer your questions and help you find the
              best solution for your needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Tech Avenue, Innovation City, 12345</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@centrino.tech</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
