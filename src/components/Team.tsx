import React from "react";
import { motion } from "framer-motion";
import { TEAM } from "../constants/content";

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-bg-light py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h4
            className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestro Legado
          </motion.h4>
          <motion.h2
            className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expertos en Defensa <br /> <span className="italic font-light text-secondary">Estratégica</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                {/* Image Container */}
                <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder while loading */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-12 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom mb-4" />

                <h3 className="text-2xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-primary transition-colors duration-300">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

