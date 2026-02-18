import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "../constants/content";

const Location: React.FC = () => {
  return (
    <section className="w-full py-24 bg-primary text-white relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">

        {/* Contact Info - Editorial Style */}
        <motion.div
          className="w-full lg:w-1/3 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h4 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Ubicación</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Visítenos en <br /> <span className="text-gray-400">Nuestras Oficinas</span>
            </h2>
            <div className="w-20 h-1 bg-accent mt-8 mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed">
              Estamos ubicados en el corazón de la ciudad, brindando un espacio de confidencialidad y profesionalismo para tratar sus asuntos legales.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-300">
                <FaMapMarkerAlt className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="ml-6">
                <h5 className="text-lg font-serif font-semibold text-white">Dirección</h5>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-300">
                <FaPhoneAlt className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="ml-6">
                <h5 className="text-lg font-serif font-semibold text-white">Teléfono</h5>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-300">
                <FaEnvelope className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="ml-6">
                <h5 className="text-lg font-serif font-semibold text-white">Email</h5>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map - Monochrome Skin */}
        <motion.div
          className="w-full lg:w-2/3 h-[500px] bg-gray-900 overflow-hidden relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 pointer-events-none z-10 border border-white/10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.184510169637!2d-58.844110923723406!3d-27.463514576323178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456cb00c3b2e85%3A0xd6748baf9088f986!2sTucum%C3%A1n%20588%2C%20W3400BND%20Corrientes!5e0!3m2!1ses-419!2sar!4v1738868003646!5m2!1ses-419!2sar"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Location;

