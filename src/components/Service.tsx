import React, { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants/content";

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h4
            className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestras Prácticas
          </motion.h4>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Excelencia Legal
          </motion.h2>
          <motion.p
            className="text-secondary text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ofrecemos asesoramiento integral con un enfoque estratégico y personalizado,
            cubriendo las áreas más críticas del derecho moderno.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`group relative p-10 bg-white rounded-none border border-gray-100 hover:border-accent transition-all duration-500 overflow-hidden ${hoveredIndex === index ? "shadow-2xl translate-y-[-5px]" : "shadow-sm"
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Hover Background Fill */}
                <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />

                <div className="relative z-10 flex flex-col items-start h-full">
                  <div className="mb-6 w-14 h-14 flex items-center justify-center bg-bg-light group-hover:bg-accent/20 transition-colors duration-500 rounded-lg">
                    <Icon className="text-3xl text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-secondary group-hover:text-gray-300 transition-colors duration-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <span className="text-accent text-sm uppercase tracking-wider font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center">
                      Más Información <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

