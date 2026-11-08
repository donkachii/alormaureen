"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

const DURATION_MS = 600;
const format = (value: number) => value.toLocaleString("en-GB");

/**
 * Counts up once when the number scrolls into view. The server HTML holds the final value, so it
 * reads correctly without JS, with reduced motion and for assistive tech.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const digits = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(digits, { once: true, amount: 0.6 });
  const armed = useRef(false);

  useLayoutEffect(() => {
    const element = digits.current;
    if (reduced || !element) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    armed.current = true;
    element.textContent = format(0);
  }, [reduced]);

  useEffect(() => {
    const element = digits.current;
    if (!inView || !armed.current || !element) return;
    armed.current = false;

    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      element.textContent = format(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(frame);
      element.textContent = format(value);
    };
  }, [inView, value]);

  return (
    <>
      <span className="sr-only">
        {prefix}
        {format(value)}
        {suffix}
      </span>
      <span aria-hidden="true" className="tabular-nums">
        {prefix}
        <span ref={digits}>{format(value)}</span>
        {suffix}
      </span>
    </>
  );
}
