"use client";

import { useReducedMotion } from "motion/react";
import { useAnimate } from "motion/react-mini";
import { useEffect, useRef } from "react";

export function SuccessMessage() {
  const [scope, animate] = useAnimate<SVGSVGElement>();
  const heading = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    heading.current?.focus();
    if (reduced || !scope.current) return;
    animate(
      scope.current,
      { opacity: [0, 1], transform: ["scale(0.6)", "none"] },
      { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    );
  }, [animate, reduced, scope]);

  return (
    <div>
      <svg ref={scope} viewBox="0 0 48 48" className="size-14 text-accent" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 25l7 7 13-15" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <h2 ref={heading} tabIndex={-1} className="mt-6 text-h2 focus:outline-none">
        Thank you.
      </h2>
      <p className="mt-3 text-lead">Your message is on its way. I’ll reply by email.</p>
    </div>
  );
}
