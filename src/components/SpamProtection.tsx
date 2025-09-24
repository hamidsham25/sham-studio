// Spam-Schutz Komponente für Kontaktformular
'use client';

import { useState } from 'react';

export default function SpamProtection() {
  const [honeypot, setHoneypot] = useState('');

  // Honeypot-Feld (versteckt für Bots)
  const honeypotStyle = {
    position: 'absolute' as const,
    left: '-9999px',
    opacity: 0,
    pointerEvents: 'none' as const
  };

  return (
    <>
      {/* Honeypot - verstecktes Feld für Bot-Erkennung */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={honeypotStyle}
        tabIndex={-1}
        autoComplete="off"
      />
      
      {/* Captcha-Alternative */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sicherheitsprüfung: Was ist 2 + 3?
        </label>
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="5"
          required
        />
      </div>
    </>
  );
}

// Zusätzliche Spam-Schutz-Funktionen
export const validateContactForm = (formData: FormData) => {
  // Honeypot-Check
  const honeypot = formData.get('website');
  if (honeypot && honeypot !== '') {
    return { valid: false, reason: 'Bot detected' };
  }

  // Rate Limiting (könnte mit einer API implementiert werden)
  const timestamp = Date.now();
  const lastSubmission = localStorage.getItem('lastFormSubmission');
  
  if (lastSubmission && (timestamp - parseInt(lastSubmission)) < 60000) {
    return { valid: false, reason: 'Too many submissions' };
  }
  
  localStorage.setItem('lastFormSubmission', timestamp.toString());
  
  return { valid: true };
};

// E-Mail-Obfuskation für JavaScript
export const obfuscateEmail = (email: string) => {
  const [local, domain] = email.split('@');
  return `${local.replace(/./g, '*')}@${domain}`;
};

// Sichere Telefonnummer-Darstellung
export const formatPhoneForDisplay = (phone: string) => {
  // Zeigt nur teilweise die Nummer an
  const visiblePart = phone.slice(-4);
  return `*** *** ${visiblePart}`;
};
