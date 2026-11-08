"use client";

import { useReducedMotion } from "motion/react";
import { useAnimate } from "motion/react-mini";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { NavLink } from "./NavLink";

const FOCUSABLE = "a[href], button:not([disabled])";

export function MobileMenu({ items }: { items: readonly { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const button = openButton.current;
    const dialog = scope.current;
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    if (!reduced && dialog) animate(dialog, { opacity: [0, 1] }, { duration: 0.2 });

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    // The overlay exists only on small screens, so close it if the viewport grows past that.
    const wide = window.matchMedia("(min-width: 48rem)");
    const closeIfWide = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener("change", closeIfWide);

    return () => {
      document.body.style.overflow = overflow;
      wide.removeEventListener("change", closeIfWide);
      button?.focus();
    };
  }, [animate, open, reduced, scope]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <div className="md:hidden">
      <button
        ref={openButton}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="tap cursor-pointer px-2"
      >
        Menu
      </button>
      {open && (
        <div
          ref={scope}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-canvas px-gutter py-4"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="tap cursor-pointer self-end px-2"
          >
            Close
          </button>
          <nav aria-label="Main" className="mt-12">
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-h1"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
