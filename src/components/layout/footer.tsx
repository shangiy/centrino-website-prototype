import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {new Date().getFullYear()} Centrino Technologies Ltd. All Rights
            Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
