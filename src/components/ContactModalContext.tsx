"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ContactForm from "./ContactForm";

type ContactModalContextValue = {
  openModal: (source: string) => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback((sourceValue: string) => {
    setSource(sourceValue);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const handleSuccess = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen, closeModal]);

  // Focus ins Modal, wenn es öffnet
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusable = modalRef.current.querySelector<HTMLElement>(
        'button[aria-label="Schließen"], input, textarea, [tabindex="0"]'
      );
      focusable?.focus();
    }
  }, [isOpen]);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              aria-hidden
            />
            {/* Modal */}
            <motion.div
              ref={modalRef}
              className="relative z-10 w-full max-w-lg rounded-2xl border border-zinc-700 bg-[#111] p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <h2
                  id="contact-modal-title"
                  className="font-display text-xl font-semibold text-white sm:text-2xl"
                >
                  Anfrage: {source}
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="shrink-0 rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="Schließen"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ContactForm source={source} onSuccess={handleSuccess} compact />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}
