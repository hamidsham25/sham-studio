'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  // Verschlüsselte Kontaktdaten (ROT13-Verschlüsselung)
  const encryptedEmail = 'unzvqfunz.fghqv@tznvy.pb'; // hamidsham.studio@gmail.com
  const encryptedPhone = '017632878739'; // Deine Telefonnummer

  const decodeROT13 = (str: string) => {
    return str.replace(/[a-zA-Z]/g, (char) => {
      const start = char <= 'Z' ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
    });
  };

  const handleEmailClick = () => {
    if (!showEmail) {
      setShowEmail(true);
      const email = decodeROT13(encryptedEmail);
      window.location.href = `mailto:${email}`;
    }
  };

  const handlePhoneClick = () => {
    if (!showPhone) {
      setShowPhone(true);
      window.location.href = `tel:${encryptedPhone}`;
    }
  };

  const footerLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'Über mich' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 lg:py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Sham Studio</h3>
              <p className="text-secondary-300 mb-6 max-w-md">
                Moderne Webdesign-Lösungen für Portfolios, Landing Pages und kleine Unternehmen. 
                Professionell, responsiv und performant.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleEmailClick}
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="E-Mail"
                >
                  <span className="text-sm">📧</span>
                </button>
                <button
                  onClick={handlePhoneClick}
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Telefon"
                >
                  <span className="text-sm">📞</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-secondary-300">
                <li>Portfolio Websites</li>
                <li>Landing Pages</li>
                <li>Business Websites</li>
                <li>Web Design</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-secondary-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Sham Studio. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm text-secondary-400">
              <a href="/impressum" className="hover:text-white transition-colors duration-200">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-white transition-colors duration-200">
                Datenschutz
              </a>
              <a href="/agb" className="hover:text-white transition-colors duration-200">
                AGB
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
