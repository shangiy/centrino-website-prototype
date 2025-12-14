
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { value: 100, label: 'Projects' },
  { value: 50, label: 'Clients' },
  { value: 30, label: 'Team Members' },
  { value: 10, label: 'Awards' },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const start = 0;
    const duration = 2000; // 2 seconds
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * to) + start, to);
      setCount(current);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [to]);


  return <span ref={ref}>{count}+</span>;
}

export default function StatsCounter() {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);


  return (
    <section 
        ref={sectionRef} 
        className="relative py-20 overflow-hidden"
    >
        <motion.div 
            className="absolute inset-0 z-0"
            style={{ y }}
        >
            <Image
                src="/centrino_3D.png"
                alt="Parallax background"
                fill
                className="object-cover"
                quality={100}
            />
      </motion.div>
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
      <div ref={inViewRef} className="container relative text-primary-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-6xl font-bold font-headline">
                {inView ? <Counter to={stat.value} /> : '0+'}
              </p>
              <p className="mt-2 text-lg text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
