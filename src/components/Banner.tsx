import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
const banners = [
  {
    title: "Bienvenido a Nuestro Despacho Jurídico",
    description:
      "Comprometidos con la excelencia y la justicia, brindando soluciones legales personalizadas para cada desafío.",
    image: "banner.jpg",
  },
  {
    title: "Tu Confianza, Nuestra Prioridad",
    description:
      "Ofrecemos asesoramiento legal integral y representación en todas las áreas del derecho.",
    image: "banner2.jpg",
  },
  {
    title: "Experiencia y Profesionalismo",
    description:
      "Nuestro equipo de abogados está listo para ayudarte a resolver tus problemas legales.",
    image: "banner3.jpg",
  },
];

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 6000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center px-8"
      style={{ backgroundImage: `url(${banners[currentBanner].image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative text-center z-10 w-full md:w-2/3 px-6">
        <motion.h1
          className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={banners[currentBanner].title}
        >
          {banners[currentBanner].title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-white mt-4 md:mt-6 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          key={banners[currentBanner].description}
        >
          {banners[currentBanner].description}
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={handleScrollDown}
      >
        <FaChevronDown className="text-black text-4xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Banner;
