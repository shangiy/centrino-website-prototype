'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={cn('fixed bottom-8 right-8 z-50', !isVisible && 'hidden')}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="relative h-14 w-14 rounded-full bg-background/80 text-primary shadow-lg backdrop-blur-sm hover:bg-background"
      >
        <ArrowUp className="h-6 w-6" />
        <svg
          className="absolute inset-0 overflow-visible"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            pathLength="1"
            className="stroke-primary"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
            transform="rotate(-90 50 50)"
          />
        </svg>
      </Button>
    </div>
  );
}
