"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "K+", label: "Professionals Trained For Exceptional Career Success" },
  { value: 200, suffix: "+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: 5, suffix: "K+", label: "Active Learners Engaged In Dynamic Courses" },
];

function useCountUp(end: number, triggered: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setN(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, triggered]);
  return n;
}

function StatCard({ stat }: { stat: typeof stats[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const n = useCountUp(stat.value, triggered);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex-1 text-center px-6 py-4">
      <div className="inline-block bg-blue-100 text-blue-700 font-black text-xl px-5 py-1 rounded-full mb-3">
        {n}{stat.suffix}
      </div>
      <p className="text-gray-600 text-sm leading-snug max-w-[160px] mx-auto">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Our <span className="text-blue-500">Track Record</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          The Numbers Behind <span className="text-blue-500">Our Success</span>
        </p>
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {stats.map((s) => <StatCard key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  );
}
