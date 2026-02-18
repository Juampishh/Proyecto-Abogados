import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  const message = "¡Hola! Quisiera más información sobre sus servicios legales.";

  const handleClick = () => {
    const url = `https://wa.me/543794336030?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="bg-white text-primary text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-x-4 group-hover:translate-x-0">
        Consultar
      </span>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl relative">
        <FaWhatsapp className="text-3xl" />
        {/* Ping Animation */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
    </motion.div>
  );
};

export default WhatsAppIcon;

