
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Building, Code, Cpu, ExternalLink, GraduationCap, MapPin, Palette, Rocket, Users, Zap } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Frontend Developer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    category: 'Engineering',
    icon: Code,
    description: 'We are looking for an experienced Frontend Developer to build and maintain our web applications. You will work with modern technologies like React, Next.js, and TypeScript.'
  },
  {
    title: 'Lead Backend Engineer',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    icon: Cpu,
    description: 'Join our team to lead the development of our scalable backend systems. Expertise in Node.js, GraphQL, and microservices is required.'
  },
  {
    title: 'UI/UX Designer',
    location: 'Nairobi, Kenya',
    type: 'Contract',
    category: 'Design',
    icon: Palette,
    description: 'Create intuitive and visually appealing interfaces for our suite of products. A strong portfolio in fintech or complex applications is a plus.'
  },
];

const perks = [
    {
        icon: Zap,
        title: 'Innovation Culture',
        description: 'Be part of a team that thrives on creativity and pushing technological boundaries.'
    },
    {
        icon: GraduationCap,
        title: 'Continuous Learning',
        description: 'We support your growth with access to courses, workshops, and conferences.'
    },
    {
        icon: Users,
        title: 'Collaborative Environment',
        description: 'Work with talented and passionate people in a supportive and open atmosphere.'
    },
    {
        icon: Briefcase,
        title: 'Flexible Work',
        description: 'We offer flexible working hours and remote options to support work-life balance.'
    }
]

export default function CareerPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Join Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Be a part of a team that is shaping the future of financial technology. We are passionate, innovative, and committed to excellence.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Work With Us, Grow With Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Centrino Technologies, we believe that our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning. We are looking for talented individuals who are passionate about technology and want to make an impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Join us and be a part of a dynamic team that is dedicated to building solutions that empower businesses and communities.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team at work"
              fill
              className="object-cover"
              data-ai-hint="team working"
            />
          </div>
        </div>
      </section>

      {/* Perks Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Why You'll Love Working Here</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {perks.map((perk, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                            <perk.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{perk.title}</h3>
                        <p className="text-muted-foreground">{perk.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

      {/* Open Positions Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline">Open Positions</h2>
            <p className="mt-4 text-muted-foreground">
              We're always looking for talented people to join our team. Browse our current openings below.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {openPositions.map((position) => (
              <Card key={position.title} className="transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <CardContent className="p-6 grid md:grid-cols-4 items-center gap-6">
                    <div className="md:col-span-3">
                        <div className='flex items-center gap-4 mb-2'>
                            <position.icon className='w-6 h-6 text-primary' />
                            <h3 className="text-xl font-bold font-headline hover:text-primary transition-colors">
                                <Link href="#">{position.title}</Link>
                            </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                <span>{position.type}</span>
                            </div>
                        </div>
                        <p className='text-muted-foreground'>{position.description}</p>
                    </div>
                    <div className="flex md:justify-end">
                        <Button asChild>
                            <Link href="#">
                            Apply Now <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Internships & Attachments Section */}
      <section
        className="relative py-20 bg-cover bg-center text-primary-foreground"
        style={{ backgroundImage: "url('/internship.png')" }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-headline">Internships & Attachments</h2>
            <p className="text-lg opacity-90">
              Are you a student or recent graduate looking to kickstart your career in tech? Our internship and attachment programs offer hands-on experience, mentorship from industry experts, and the opportunity to work on real-world projects that make a difference.
            </p>
            <Button
              asChild
              variant="secondary"
              className="font-bold"
              size="lg"
            >
              <Link href="/contact?subject=Internship/Attachment">
                Inquire About Opportunities
              </Link>
            </Button>
          </div>
           <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Students learning"
              fill
              className="object-cover"
              data-ai-hint="students learning"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
