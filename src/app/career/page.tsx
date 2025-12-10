
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Building, Code, Cpu, ExternalLink, GraduationCap, MapPin, Palette, Rocket, Users, Zap, Upload, File as FileIcon, X } from 'lucide-react';
import React, { useState } from 'react';

export default function CareerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    const fileInput = document.getElementById('document-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };


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
              At Centrino Technologies, we believe that our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning. We sought for talented individuals who are passionate about technology and want to make an impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Join us and be a part of a dynamic team that is dedicated to building solutions that empower businesses and communities.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
            <Image
              src="/Finance-Workforce.png"
              alt="Team at work"
              fill
              className="object-cover"
              data-ai-hint="team working"
            />
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
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
            
          </div>
           <div className="flex flex-col gap-4">
              <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  alt="Students learning"
                  fill
                  className="object-cover"
                  data-ai-hint="students learning"
                />
              </div>
              <div className='bg-black/20 p-6 rounded-lg text-center'>
                  <p className='mb-4 text-primary-foreground/90'>
                    You can drop your resume, attachment documents, university logbook, and national ID here.
                  </p>
                  <Button
                    variant="default"
                    className="font-bold bg-gray-800 hover:bg-gray-700 text-white w-full"
                    size="lg"
                    asChild
                  >
                    <label htmlFor="document-upload" className="cursor-pointer">
                      <Upload className="mr-2 h-5 w-5" />
                      Upload Document
                    </label>
                  </Button>
                  <input type="file" id="document-upload" className="hidden" onChange={handleFileChange} />
                  {selectedFile && (
                  <div className="mt-4 p-3 bg-white/10 rounded-lg flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <FileIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium truncate">{selectedFile.name}</span>
                    </div>
                     <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                      <label htmlFor="document-upload" className="cursor-pointer text-white hover:underline font-semibold">
                          Change
                      </label>
                       <button onClick={handleRemoveFile} className="text-destructive-foreground/70 hover:text-destructive-foreground">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>
      </section>

    </div>
  );
}
