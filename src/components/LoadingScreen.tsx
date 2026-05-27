"use client";

import { useState, useEffect, useRef } from "react";
import {
  LOADING_SCREEN_STORAGE_KEY,
  notifyLoadingComplete,
  shouldSkipLoadingScreen,
} from "@/lib/loading-screen";

const text = "Sham Studio.";

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "hold" | "exit" | "gone">("idle");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldSkipLoadingScreen()) {
      notifyLoadingComplete();
      setPhase("gone");
      return;
    }
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayText(text.substring(0, i));
      if (i === text.length) {
        clearInterval(interval);
        setPhase("hold");
        setTimeout(() => setPhase("exit"), 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const el = overlayRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      el.style.transform = "translateY(-100%)";
    });

    const handleEnd = () => {
      localStorage.setItem(LOADING_SCREEN_STORAGE_KEY, String(Date.now()));
      notifyLoadingComplete();
      setPhase("gone");
    };

    el.addEventListener("transitionend", handleEnd, { once: true });
    const fallback = setTimeout(handleEnd, 800);
    return () => {
      el.removeEventListener("transitionend", handleEnd);
      clearTimeout(fallback);
    };
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0a]"
      style={{ transition: "transform 0.65s cubic-bezier(0.76, 0, 0.24, 1)" }}
      aria-hidden="true"
    >
      {phase !== "idle" && (
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {displayText}
          <span
            className="inline-block w-[3px] translate-y-[2px] animate-pulse bg-white ml-0.5"
            style={{ height: "0.85em" }}
          />
        </h1>
      )}
    </div>
  );
}
