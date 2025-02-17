import React from "react";
import { motion } from "framer-motion";

interface Lawyer {
  name: string;
  image: string;
  title: string;
}

const Team: React.FC = () => {
  const lawyers: Lawyer[] = [
    {
      name: "Dr. Clemente Gabriel Inza",
      image: "abogado.jpeg",
      title: "ABOGADO",
    },
    {
      name: "Dra. Maria Emilia Quevedo",
      image: "Maria Emilia.jpeg",
      title: "ABOGADA",
    },
    {
      name: "Dra. Veronica Daniela Falcon",
      image: "abogado 3.jpeg",
      title: "ABOGADA",
    },
  ];

  return (
    <section id="team" className="bg-[#1E2A38] text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-lg font-semibold text-[#4682B4] uppercase">
          Nuestro Equipo
        </h3>
        <motion.h2
          className="text-5xl font-bold mt-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Asesoramiento Integral
        </motion.h2>
        <p className="text-lg mt-6 text-gray-300 max-w-3xl mx-auto">
          Actualmente el Estudio está conformado por un equipo de profesionales
          altamente capacitados y comprometidos en la generación de valor para
          los clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
        {lawyers.map((lawyer, index) => (
          <motion.div
            key={index}
            className="bg-[#F9F9F9] rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-full h-auto object-contain filter grayscale"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold text-[#333333]">
                {lawyer.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium mt-1">
                {lawyer.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
