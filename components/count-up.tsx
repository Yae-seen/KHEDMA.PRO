"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` once it scrolls into view. Static (final value) when
 * reduced motion is preferred, so the number is always readable.
 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  // Default to the real value: if JS/IO never runs, the correct number still shows.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: leave the number at its initial (correct) value, no anim.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const run = () => {
      if (started.current) return;
      started.current = true;
      setDisplay(0);
      let start = 0;
      const tick = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(value * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) run();
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);

    // Fallback: already in view at mount (IO may not emit for it in some cases).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) run();

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("fr")}
      {suffix}
    </span>
  );
}
