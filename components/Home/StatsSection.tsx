'use client';
import { FaRegLightbulb } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "40+", label: "Years Experience" },
  { number: "100K+", label: "Tons Processed" },
  { number: "500+", label: "Happy Clients" },
  { number: "99%", label: "Quality Grade" }
];

// Animated counter hook
function useCountUp(target: number, shouldStart: boolean, duration: number = 8000): number {
  const [count, setCount] = useState(0);
  const ref = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    const start = 0;
    const end = target;
    let startTime: number | null = null;

    function animateCounter(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCounter);
      }
    }

    ref.current = requestAnimationFrame(animateCounter);

    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, shouldStart, duration]);

  return count;
}

// Helper to extract number from string
const getTarget = (numStr: string): number => {
  if (numStr.endsWith("K+")) return parseInt(numStr) * 1000;
  if (numStr.endsWith("+")) return parseInt(numStr);
  if (numStr.endsWith("%")) return parseInt(numStr);
  return parseInt(numStr);
};

// Individual stat component to avoid hook in callback
function StatItem({
  stat,
  shouldStart,
}: {
  stat: { number: string; label: string };
  shouldStart: boolean;
}) {
  const target = getTarget(stat.number);
  const count = useCountUp(target, shouldStart);
  let display = stat.number;

  if (stat.number.endsWith("K+")) display = `${Math.floor(count / 1000)}K+`;
  else if (stat.number.endsWith("+")) display = `${count}+`;
  else if (stat.number.endsWith("%")) display = `${count}%`;
  
  return (
    <div className="px-4 py-6 text-center bg-[#fff8ef] border border-[#bb8d48] rounded-2xl shadow-sm sm:px-5 sm:py-7 md:px-6 md:py-8">
      <div className="stat-value text-[2.6rem] font-bold" style={{ color: '#bb8d48' }}>
        {display}
      </div>
      <div className="mt-2 text-base text-[#bb8d48] sm:mt-3 sm:text-lg md:text-xl">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldStartCount, setShouldStartCount] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || shouldStartCount) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldStartCount]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[linear-gradient(180deg,#ebd6c0_0%,#fff8ef_100%)] py-16 sm:py-18 md:py-20">
      {/* Decorative Lamp Icons at both ends */}
      <div className="pointer-events-none absolute -left-12 -top-2 z-0">
        <FaRegLightbulb
          className="text-[#bb8d48] opacity-35 drop-shadow-xl"
          style={{ fontSize: '12rem', minWidth: 140 }}
          aria-label="Decorative Table Lamp Icon Left"
        />
      </div>
      <div className="pointer-events-none absolute -bottom-10 -right-10 z-0">
        <FaRegLightbulb
          className="text-[#bb8d48] opacity-30 drop-shadow-xl scale-x-[-1]"
          style={{ fontSize: '11rem', minWidth: 120 }}
          aria-label="Decorative Table Lamp Icon Right"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="    px-2 py-2   sm:px-4 sm:py-4">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} shouldStart={shouldStartCount} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
