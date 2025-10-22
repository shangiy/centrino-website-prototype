
'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={cn('fixed bottom-8 right-8 z-50', !isVisible && 'hidden')}>
      <div className="relative h-14 w-14">
        <svg
          className="absolute -inset-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)]"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            pathLength="1"
            className="transform -rotate-90 origin-center"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        <Button
          onClick={scrollToTop}
          size="icon"
          className="relative h-14 w-14 rounded-full bg-background/80 text-primary shadow-lg backdrop-blur-sm hover:bg-background"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
