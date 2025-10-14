'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
    if (count < to) {
      const timeout = setTimeout(() => setCount(count + 1), 50);
      return () => clearTimeout(timeout);
    }
  }, [count, to]);

  return <span ref={ref}>{count}+</span>;
}

export default function StatsCounter() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/parallax-bg.png')" }}>
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
      <div className="container relative text-primary-foreground">
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
