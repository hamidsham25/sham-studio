"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

/** Nur optisches Overlay – Hero & Rest sind bereits im DOM und geladen. */
const text = "Sham Studio.";
const STORAGE_KEY = "loadingScreenShown";
// Nach dieser Zeit (ms) wird der Loading Screen beim Reload wieder angezeigt
const SHOW_AGAIN_AFTER_MS = 60 * 1000; // 1 Minute

function shouldSkipLoadingScreen(): boolean {
  if (typeof window === "undefined") return false;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  const timestamp = parseInt(raw, 10);
  if (Number.isNaN(timestamp)) return true; // alter Wert "1" → skip
  return Date.now() - timestamp < SHOW_AGAIN_AFTER_MS;
}

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);

  // Skip nur wenn kürzlich schon gezeigt (innerhalb SHOW_AGAIN_AFTER_MS)
  useEffect(() => {
    if (shouldSkipLoadingScreen()) {
      setSkip(true);
    }
  }, []);

  useEffect(() => {
    if (skip) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayText(text.substring(0, i));
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [skip]);

  const handleExitComplete = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
    setVisible(false);
  };

  if (skip || !visible) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0e0e0e] pointer-events-auto"
          aria-hidden="true"
          exit={{ y: "-100%" }}
          transition={{
            y: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {displayText}
            <span
              className="inline-block w-[3px] translate-y-[2px] animate-pulse bg-white ml-0.5"
              style={{ height: "0.85em" }}
            />
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
