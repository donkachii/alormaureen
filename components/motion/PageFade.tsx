"use client";

import { useReducedMotion } from "motion/react";
import { useAnimate } from "motion/react-mini";
import { useLayoutEffect, type ReactNode } from "react";

// The first page arrives as server HTML and must paint straight away, so only later navigations fade.
let hasRendered = false;

export function PageFade({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (!hasRendered) {
      hasRendered = true;
      return;
    }
    if (reduced) return;
    animate(scope.current, { opacity: [0, 1] }, { duration: 0.2, ease: "easeOut" });
  }, [animate, reduced, scope]);

  return <div ref={scope}>{children}</div>;
}
