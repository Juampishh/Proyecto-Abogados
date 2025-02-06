import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaBalanceScale,
  FaHandshake,
  FaGavel,
  FaUserShield,
  FaFileContract,
} from "react-icons/fa";

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const services: Service[] = [
  {
    title: "Consultoría Legal",
    icon: <FaBook />,
    description:
      "Asesoramiento legal personalizado para resolver tus dudas y problemas jurídicos.",
  },
  {
    title: "Juicios",
    icon: <FaBalanceScale />,
    description:
      "Representación legal en juicios y litigios para defender tus derechos.",
  },
  {
    title: "Mediación",
    icon: <FaHandshake />,
    description:
      "Solución de conflictos a través de la mediación y el diálogo.",
  },
  {
    title: "Arbitraje",
    icon: <FaGavel />,
    description:
      "Resolución de disputas mediante arbitraje profesional y justo.",
  },
  {
    title: "Protección de Datos",
    icon: <FaUserShield />,
    description: "Asesoramiento en protección de datos y privacidad.",
  },
  {
    title: "Contratos",
    icon: <FaFileContract />,
    description:
      "Redacción y revisión de contratos para asegurar tus intereses.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ofrecemos asesoramiento legal experto en varias áreas del derecho para
          satisfacer todas tus necesidades jurídicas.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#243551] p-8 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="text-5xl text-white mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-white">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
