import { motion } from "framer-motion";
import { FaAward, FaLightbulb, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#1E2A38] text-white py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-6"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 px-4"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          Con más de 30 años de experiencia, somos el socio jurídico que
          necesitas para afrontar cualquier desafío legal, con un enfoque
          personalizado y soluciones innovadoras.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            className="p-8 bg-[#E3E3E3] rounded-xl shadow-lg transform hover:scale-105 transition-all flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <FaAward className="text-4xl text-[#243551] mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-[#243551]">
              Experiencia Inigualable
            </h3>
            <p className="text-[#243551]">
              Más de tres décadas en el sector, brindando soluciones efectivas y
              confiables.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-[#E3E3E3] rounded-xl shadow-lg transform hover:scale-105 transition-all flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <FaLightbulb className="text-4xl text-[#243551] mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-[#243551]">
              Innovación Continua
            </h3>
            <p className="text-[#243551]">
              Adoptamos las mejores tecnologías y estrategias para proporcionar
              servicios legales de vanguardia.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-[#E3E3E3] rounded-xl shadow-lg transform hover:scale-105 transition-all flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <FaUserTie className="text-4xl text-[#243551] mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-[#243551]">
              Atención Personalizada
            </h3>
            <p className="text-[#243551]">
              Nos enfocamos en cada cliente, brindando atención individualizada
              y soluciones a medida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
