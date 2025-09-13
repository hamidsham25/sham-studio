'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: '100%',
      label: 'Abgeschlossene Projekte',
      description: 'Von der Idee bis online'
    },
    {
      icon: Clock,
      number: '2+',
      label: 'Jahre Erfahrung',
      description: 'In der Webentwicklung'
    },
    {
      icon: Users,
      number: '100%',
      label: 'Zufriedene Kunden',
      description: 'Wiederkehrende Aufträge'
    }
  ];


  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Über Sham Studio
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Ich bin ein leidenschaftlicher Webdesigner mit Fokus auf moderne, 
              benutzerfreundliche Lösungen. Jedes Projekt ist eine neue 
              Herausforderung, die ich mit Kreativität und technischer Präzision angehe.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Meine Mission ist es, nicht nur schöne Websites zu erstellen, sondern 
              auch solche, die deine Geschäftsziele erreichen und deine Kunden begeistern.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                staggerChildren: 0.2,
                delayChildren: 0.3
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative mx-auto max-w-md">
                <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Dein Webdesigner</h3>
                    <p className="text-primary-100">Sham Studio</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
