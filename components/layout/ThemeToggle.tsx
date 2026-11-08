"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

function subscribe(listener: () => void) {
  listeners.add(listener);
  darkQuery().addEventListener("change", listener);
  return () => {
    listeners.delete(listener);
    darkQuery().removeEventListener("change", listener);
  };
}

function currentTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return darkQuery().matches ? "dark" : "light";
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private windows can block storage. The theme still applies for this page view.
  }
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "light" as Theme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label="Dark theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-tap cursor-pointer items-center justify-center"
    >
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
    </button>
  );
}
