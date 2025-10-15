
import ContactForm from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container py-12 md:py-20">
          <section className="text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground font-headline">
              We&apos;d Love to Hear From You!
            </p>
          </section>

          <section className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="p-8 rounded-lg">
                <ContactForm />
              </div>
              <div className="space-y-12 p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">
                      Head Office Address
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Mitsumi Business Park, 65 Muthithi Rd Westlands 35229 -
                      00100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">
                      Email Address
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      info@centrino.co.ke
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">
                      Telephone
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      +254 20 2587637
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.831358913926!2d36.80733831526489!3d-1.27402699907143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17540a776567%3A0x8e8334418f158957!2sCentrino%20Technologies%20Limited!5e0!3m2!1sen!2ske!4v1688622142250!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
