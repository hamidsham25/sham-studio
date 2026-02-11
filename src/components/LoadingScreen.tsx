"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const text = "Sham Studio.";
const STORAGE_KEY = "loadingScreenShown";

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);

  // Beim Zurücknavigieren (z. B. von Impressum/Datenschutz) keinen Loading Screen zeigen
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
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
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setVisible(false);
  };

  if (skip || !visible) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0e0e0e]"
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
