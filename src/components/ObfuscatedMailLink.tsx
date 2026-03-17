"use client";

/** E-Mail obfuskiert anzeigen (ohne klickbaren Link) – reduziert Spam-Harvesting. */
export default function ObfuscatedMailLink({
  className = "text-cyan-400 hover:underline",
}: {
  className?: string;
}) {
  return (
    <span className={className}>
      info [at] sham-studio [dot] de
    </span>
  );
}
