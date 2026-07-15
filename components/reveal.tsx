"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll-triggered entrance, done as a pure progressive enhancement: the content
 * is always present and visible in the DOM. When it scrolls into view we play a
 * one-shot fade-up via the Web Animations API. If JS never runs — or reduced
 * motion is preferred — the content simply shows with no animation. Nothing is
 * ever hidden behind JS.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      el.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 700, delay, easing: "cubic-bezier(0.16,1,0.3,1)", fill: "backwards" },
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      play();
      io.disconnect();
    }

    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
