'use client';

import { motion } from 'framer-motion';
import { Monitor, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Portfolio Websites',
      description: 'Präsentiere deine Arbeiten in einem modernen, benutzerfreundlichen Portfolio.',
      features: ['Responsive Design', 'Performance optimiert', 'SEO-freundlich']
    },
    {
      icon: Zap,
      title: 'Landing Pages',
      description: 'Konversionsoptimierte Landing Pages, die deine Besucher zu Kunden machen.',
      features: ['A/B Testing', 'Analytics Integration', 'Mobile First']
    },
    {
      icon: Users,
      title: 'Business Websites',
      description: 'Professionelle Websites für kleine Unternehmen mit Fokus auf Benutzerfreundlichkeit.',
      features: ['CMS Integration', 'Kontaktformulare', 'Social Media']
    }
  ];


  return (
    <section id="services" className="section bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Was ich für dich tue
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der ersten Idee bis zur fertigen Website – ich begleite dich durch den gesamten Prozess.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              className="card rounded-2xl p-8 shadow-sm hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon 
                  size={32} 
                  className="text-primary-600 group-hover:text-white transition-colors duration-300" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
