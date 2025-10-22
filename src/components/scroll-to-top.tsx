
'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
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
        <motion.div 
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-primary" 
            style={{ scale: scaleX }}
            initial={{ scale: 0 }}
        />
        <Button
            onClick={scrollToTop}
            size="icon"
            className="relative h-14 w-14 rounded-full bg-background/80 text-primary shadow-lg backdrop-blur-sm hover:bg-background"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    </div>
  );
}
