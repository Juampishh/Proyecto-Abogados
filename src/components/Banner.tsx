import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { BANNERS } from "../constants/content";

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const { scrollY } = useScroll();
  const yBackend = useTransform(scrollY, [0, 500], [0, 200]); // Parallax effect

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 8000); // 8 seconds per slide for a calmer feel

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("services"); // Or whatever the next section ID is
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Split text for animation
  const titleWords = BANNERS[currentBanner].title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const wordVariants = {
    hidden: { y: 100, opacity: 0, rotate: 5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-primary">
      {/* Background Image with Parallax */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBanner}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ y: yBackend }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BANNERS[currentBanner].image})` }}
          />
          {/* Gradient Overlay - Asymmetrical (Heavier on left) */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container - Asymmetrical Layout (Left Aligned) */}
      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-4xl text-left pl-4 border-l-4 border-accent">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Title with Split-Text Reveal */}
              <div className="overflow-hidden mb-6 flex flex-wrap gap-x-3 gap-y-1">
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="block text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Description */}
              <motion.p
                className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {BANNERS[currentBanner].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <button
                  onClick={handleScrollDown}
                  className="bg-accent text-primary px-8 py-3 rounded-none font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:translate-x-2"
                >
                  Explorar Servicios
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FaChevronDown className="text-accent text-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;

