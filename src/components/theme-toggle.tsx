"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { playUiSound } from "@/lib/sounds";
import { cn } from "@/lib/utils";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

function subscribeToClient() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function useMounted() {
  return React.useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerSnapshot,
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className={cn("h-[18px] w-[18px]", className)} />;
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    const transitionDocument = document as ViewTransitionDocument;

    if (!transitionDocument.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    transitionDocument.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
  };

  return (
    <button
      type="button"
      onClick={() => {
        void playUiSound("mouseclick", 0.6);
        toggleTheme();
      }}
      className={cn(
        "relative z-50 flex h-[18px] w-[18px] cursor-pointer items-center justify-center text-zinc-500 transition-all duration-300 hover:text-zinc-900 active:scale-95 dark:text-zinc-600 dark:hover:text-zinc-300",
        className,
      )}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
