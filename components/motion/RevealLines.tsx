"use client";

import { animate } from "motion/mini";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Reveals text line by line the first time it scrolls into view.
 *
 * The server sends plain, visible text. Text is hidden only once JS is running and only if it is
 * still below the fold, and it is split into words only for the animation. Readers without JS, or
 * with reduced motion, get the text as is.
 */
export function RevealLines({ text }: { text: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(textRef, { once: true, amount: 0.2 });
  const armed = useRef(false);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (reduced || !element) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    armed.current = true;
    element.style.opacity = "0";
  }, [reduced]);

  useEffect(() => {
    const element = textRef.current;
    if (!inView || !armed.current || !element) return;
    armed.current = false;

    const lines = splitIntoLines(element, text);
    element.style.opacity = "";

    const animations = lines.map((words, line) =>
      animate(
        words,
        { opacity: [0, 1], transform: ["translateY(0.35em)", "none"] },
        { duration: 0.4, delay: line * 0.08, ease: EASE_OUT },
      ),
    );

    // Put the original text back so it rewraps on resize and reads as one run for assistive tech.
    Promise.all(animations).finally(() => {
      element.textContent = text;
    });
  }, [inView, text]);

  return <span ref={textRef}>{text}</span>;
}

function splitIntoLines(element: HTMLElement, text: string) {
  element.textContent = "";
  const words = text.split(" ").map((word, index) => {
    if (index > 0) element.append(" ");
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    element.append(span);
    return span;
  });

  const lines = new Map<number, HTMLSpanElement[]>();
  for (const word of words) {
    const line = lines.get(word.offsetTop);
    if (line) line.push(word);
    else lines.set(word.offsetTop, [word]);
  }
  return [...lines.values()];
}
