'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Smartphone } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'Praxis Center Weiss - Heilpraktikerin',
      description: 'Moderne, responsive Website für eine Heilpraktikerin mit CMS-Integration und benutzerfreundlichem Design.',
      image: '/images/praxis-center-weiss.jpg',
      tags: ['Next.js', 'CMS', 'Responsive'],
      category: 'Business Website',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Sham Automobile - Gebrauchtwagen',
      description: 'Vollständige Website für einen Gebrauchtwagenhändler mit CMS, Kontaktformular und modernem Design.',
      image: '/images/sham-automobile.jpg',
      tags: ['Next.js', 'CMS', 'Kontaktformular'],
      category: 'Business Website',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Ihre Website könnte hier stehen',
      description: 'Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Von der ersten Idee bis zur fertigen Website.',
      image: '/api/placeholder/400/300',
      tags: ['Ihre Idee', 'Meine Expertise', 'Gemeinsam'],
      category: 'Ihr Projekt',
      liveUrl: '/#contact',
      githubUrl: null,
      isCTA: true
    }
  ];


  return (
    <section id="portfolio" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Ausgewählte Projekte
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            Jedes Projekt ist einzigartig und auf die spezifischen Bedürfnisse des Kunden zugeschnitten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                ease: "easeOut",
                delay: index * 0.12
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.isCTA ? (
                  <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      </div>
                      <p className="text-primary-700 font-medium">{project.category}</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain bg-gray-50 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(project.image)}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-200 pointer-events-auto"
                    aria-label={project.isCTA ? "Projekt starten" : "Live Demo ansehen"}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Coming Soon Badge - nur für Praxis Center Weiss */}
                {project.title === 'Praxis Center Weiss - Heilpraktikerin' && (
                  <div className="flex justify-center mt-4">
                    <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                      Coming Soon
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6">
            Interessiert an einem ähnlichen Projekt?
          </p>
          <Link href="/#contact" className="btn btn-primary">
            Projekt besprechen
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
                aria-label="Bild schließen"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <Image
                src={selectedImage}
                alt="Vergrößerte Projektansicht"
                width={800}
                height={600}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;