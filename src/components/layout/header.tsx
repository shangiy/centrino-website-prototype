
'use client';

import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
];

const trailingNavLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Project Portfolio' },
    { href: '/career', label: 'Career' },
]

const ListItem = (({ className, title, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Split services for two-column layout
  const halfway = Math.ceil(services.length / 2);
  const servicesCol1 = services.slice(0, halfway);
  const servicesCol2 = services.slice(halfway);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/centrino logo.png" alt="Centrino Logo" width={140} height={40} />
        </Link>
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-foreground/80 transition-transform duration-200 ease-in-out hover:scale-95 hover:text-foreground',
                pathname === link.href ? 'text-primary' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                   className={cn(
                    'inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-foreground/80 transition-transform duration-200 ease-in-out hover:scale-95 hover:text-foreground',
                    pathname.startsWith('/services')
                      ? 'text-primary'
                      : ''
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ul className="flex flex-col gap-3">
                      {servicesCol1.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={`/services/${component.slug}`}
                        />
                      ))}
                    </ul>
                     <ul className="flex flex-col gap-3">
                      {servicesCol2.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={`/services/${component.slug}`}
                        />
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
           {trailingNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-foreground/80 transition-transform duration-200 ease-in-out hover:scale-95 hover:text-foreground',
                pathname === link.href ? 'text-primary' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
           <a href="tel:+254202587637" className="hidden md:flex items-center gap-2 text-foreground/80 font-semibold hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            +254 20 2587637
          </a>
          <Button asChild className="hidden md:flex rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className='sr-only'>Mobile Menu</SheetTitle>
                </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image src="/centrino logo.png" alt="Centrino Logo" width={140} height={40} />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 mt-6">
                  {[...navLinks, ...trailingNavLinks].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg transition-colors hover:text-primary',
                        pathname === link.href
                          ? 'text-primary font-semibold'
                          : 'text-foreground'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {/* Mobile Services Links */}
                  <div className="text-lg text-foreground font-semibold">Services</div>
                  {services.map((service) => (
                     <Link
                      key={service.title}
                      href={`/services/${service.slug}`}
                      className='text-foreground/80 pl-4 text-base hover:text-primary'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
