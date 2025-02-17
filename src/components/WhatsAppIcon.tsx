import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  const message = "¡Hola! Quisiera más información.";

  const handleClick = () => {
    // Redirige a WhatsApp con el mensaje predefinido
    const url = `https://wa.me/543794336030?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg cursor-pointer z-50"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-3xl" />
    </div>
  );
};

export default WhatsAppIcon;
