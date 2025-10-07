import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Centrino Technologies Ltd',
  description: 'Innovative Technology Solutions for a Digital Future',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <div className="bg-secondary/50 py-2 text-sm text-muted-foreground">
            <div className="container flex justify-between items-center">
              <div className='flex items-center gap-2'>
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8:30 AM – 5:30 PM & Saturday 8.30am – 1:00PM</span>
              </div>
              <a href="mailto:info@centrino.co.ke" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@centrino.co.ke</span>
              </a>
            </div>
          </div>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
