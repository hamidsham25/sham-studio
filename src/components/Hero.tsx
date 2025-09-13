'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-background via-muted/50 to-primary-50/30 pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Moderne Webdesign-Lösungen
            </motion.div>

            <motion.h1
              variants={titleVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              <span className="block">Moderne</span>
              <span className="block">Webdesign-</span>
              <span className="block text-primary-600">Lösungen</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Professionelle Websites für Portfolios, Landing Pages und kleine Unternehmen. 
              Minimal, performant und auf deine Ziele ausgerichtet.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#portfolio"
                className="btn btn-primary group"
              >
                Portfolio ansehen
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/#contact"
                className="btn btn-secondary"
              >
                Projekt besprechen
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Device Mockup */}
              <div className="relative mx-auto max-w-md">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    {/* Browser Header */}
                    <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-muted-foreground">
                        shamstudio.de
                      </div>
                    </div>
                    
                    {/* Browser Content */}
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-primary-200 rounded animate-shimmer"></div>
                      <div className="h-4 bg-muted rounded w-3/4 animate-shimmer" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-4 bg-muted rounded w-1/2 animate-shimmer" style={{ animationDelay: '1s' }}></div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg animate-shimmer" style={{ animationDelay: '1.5s' }}></div>
                        <div className="h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg animate-shimmer" style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-100 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
