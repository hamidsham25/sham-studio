"use client";

import { useState, useEffect } from "react";

/** E-Mail obfuskiert anzeigen – im HTML-Quellcode steht sie nicht als mailto: – reduziert Spam-Harvesting. */
export default function ObfuscatedMailLink({
  className = "text-cyan-400 hover:underline",
}: {
  className?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const local = "info";
    const domain = "sham-studio.de";
    setEmail(`${local}@${domain}`);
  }, []);

  if (!email) {
    return <span className={className}>…</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
