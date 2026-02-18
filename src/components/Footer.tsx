import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FOOTER_CREDITS } from "../constants/content";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-80 hover:opacity-100 transition-opacity duration-300">

        <div className="mb-4 md:mb-0">
          <span className="font-serif text-lg tracking-widest uppercase">Estudio Tucumán</span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-light tracking-wide text-gray-400 flex flex-col md:flex-row items-center gap-4"
        >
          <span>&copy; {FOOTER_CREDITS.year} Todos los derechos reservados.</span>
          <span className="hidden md:inline text-gray-700">|</span>
          <div className="flex items-center gap-2">
            <span>Desarrollado por</span>
            <a
              href={FOOTER_CREDITS.developerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              {FOOTER_CREDITS.developer}
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

