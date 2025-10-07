import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Separator } from '../ui/separator';

const usefulLinks = [
  { href: '/about', label: 'About Us' },
  { href: '#', label: 'Our Mission' },
  { href: '/portfolio', label: 'Our Projects' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
  { href: '#', label: 'FAQs' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

const socialLinks = [
  {
    href: 'https://facebook.com',
    icon: Facebook,
    label: 'Facebook',
  },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  {
    href: 'https://instagram.com',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: 'https://linkedin.com',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline">About Us</h3>
            <p className="text-sm text-accent-foreground/80">
              Centrino Technologies leverages over a decade of expertise to
              provide cutting-edge technology solutions that empower
              Microfinance Institutions, SACCOs, and other financial
              institutions.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary/80 text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-accent-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline">Support & Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-accent-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-accent-foreground/20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/80 rounded-full p-3">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold">Location</h4>
              <p className="text-sm text-accent-foreground/80">
                Mitsumi Business Park, <br />
                65 Muthithi Rd Westlands <br />
                35229 - 00100
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/80 rounded-full p-3">
              <Clock className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold">Opening Hours</h4>
              <p className="text-sm text-accent-foreground/80">
                Mon-Friday 8.30am - 5.30pm
                <br />
                Saturday 8.30am - 1pm
              </p>
            </div>
          </div>

          {/* Quick Call */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/80 rounded-full p-3">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold">Quick Call</h4>
              <p className="text-sm text-accent-foreground/80">
                info@centrino.co.ke
                <br />
                +254 20 2587637
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <p className="text-center text-sm text-accent-foreground/60">
          Copyright © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}