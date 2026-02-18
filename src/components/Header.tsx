import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { CONTACT_INFO, NAV_LINKS } from "../constants/content";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      {/* Top Bar - Premium & Static */}
      <div className="hidden lg:flex justify-between items-center bg-primary text-gray-300 py-3 px-8 text-sm tracking-wide border-b border-gray-800 z-50 relative">
        <div className="flex space-x-6">
          <div className="flex items-center hover:text-accent transition-colors duration-300 cursor-pointer">
            <FaPhoneAlt className="mr-2 text-accent" />
            <span>{CONTACT_INFO.phone}</span>
          </div>
          <div className="flex items-center hover:text-accent transition-colors duration-300 cursor-pointer">
            <FaEnvelope className="mr-2 text-accent" />
            <span>{CONTACT_INFO.email}</span>
          </div>
        </div>
        <div className="flex items-center hover:text-accent transition-colors duration-300 cursor-pointer">
          <FaMapMarkerAlt className="mr-2 text-accent" />
          <span>{CONTACT_INFO.address}</span>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "glass-effect py-4 shadow-lg top-0"
          : "bg-transparent py-6 top-[46px]" /* 46px accounts for Top Bar */
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="text-2xl font-serif font-bold text-white tracking-widest uppercase">
              Estudio <span className="text-accent">Tucumán</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navVariants}
                >
                  <a
                    href={link.href}
                    className="text-white font-medium text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white text-2xl cursor-pointer z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden fixed inset-0 bg-primary/95 flex flex-col items-center justify-center space-y-8 z-40"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-2xl text-white font-serif hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

