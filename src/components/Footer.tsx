import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          &copy; 2025 Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/juan-pablo-merino-347b75218/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Juan Pablo Merino
          </a>
          . Todos los derechos reservados.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
