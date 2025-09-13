'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate Limiting: Max 1 E-Mail per minute
    const now = Date.now();
    if (lastSubmissionTime && (now - lastSubmissionTime) < 60000) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Ihre EmailJS-Daten
      const serviceId = 'service_0doo3bv';
      const templateId = 'template_nkf13za';
      const publicKey = 'TUzZvcEv6mSjECGtv';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.project || 'Nicht angegeben',
        message: formData.message,
        to_email: 'hamidsham.studio@gmail.com' // Ihre E-Mail-Adresse
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', project: '', message: '' });
      setLastSubmissionTime(now);
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'hamidsham.studio@gmail.com',
      onClick: handleEmailClick,
      type: 'button' as const
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '0176 328 787 39',
      onClick: handlePhoneClick,
      type: 'button' as const
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lass uns zusammenarbeiten
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Bereit für dein nächstes Projekt? Ich freue mich darauf, von dir zu hören.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {info.label}
                    </div>
                    <button
                      onClick={info.onClick}
                      className="text-muted-foreground hover:text-primary-600 transition-colors duration-200 text-left"
                    >
                      {info.value}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 bg-primary-50 rounded-2xl"
            >
              <h3 className="font-bold text-foreground mb-3">
                Warum Sham Studio?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                  Individuelle Lösungen für deine Bedürfnisse
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                  Moderne Technologien und Best Practices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                  Persönlicher Support und Beratung
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                  Schnelle Umsetzung und pünktliche Lieferung
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card rounded-2xl p-8 shadow-sm">
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ✅ Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    ❌ Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-foreground mb-2">
                    Projekttyp
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="landing">Landing Page</option>
                    <option value="business">Business Website</option>
                    <option value="other">Anderes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Erzähl mir von deinem Projekt..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
