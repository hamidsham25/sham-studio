"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  LOADING_SCREEN_STORAGE_KEY,
  notifyLoadingComplete,
  shouldSkipLoadingScreen,
} from "@/lib/loading-screen";

/** Nur optisches Overlay – Hero & Rest sind bereits im DOM und geladen. */
const text = "Sham Studio.";

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const shouldSkip = shouldSkipLoadingScreen();
    setSkip(shouldSkip);
    setChecked(true);
    if (shouldSkip) {
      notifyLoadingComplete();
    }
  }, []);

  useEffect(() => {
    if (!checked || skip) return;
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
  }, [checked, skip]);

  const handleExitComplete = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOADING_SCREEN_STORAGE_KEY, String(Date.now()));
      notifyLoadingComplete();
    }
    setVisible(false);
  };

  if (!checked || skip || !visible) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0e0e0e] pointer-events-auto"
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
