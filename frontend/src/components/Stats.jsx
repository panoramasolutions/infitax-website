import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/data/content";

const Counter = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf;
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <div
      ref={ref}
      data-testid={`stat-${index}`}
      className="border-t border-midnight-ink/15 py-8 md:border-l md:border-t-0 md:py-0 md:pl-8 md:first:border-l-0"
    >
      <div className="tabular font-serif font-medium leading-none text-midnight-ink" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
        {display.toLocaleString("en-IN")}
        <span className="text-accounting-green">{suffix}</span>
      </div>
      <div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-sage">{label}</div>
    </div>
  );
};

export const Stats = () => {
  return (
    <section data-testid="stats-section" className="bg-warm-white bg-grain py-20 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Counter key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
