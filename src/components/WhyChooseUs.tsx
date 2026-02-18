import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "../constants/content";

const WhyChooseUs = () => {
  return (
    <section className="bg-primary text-white py-24 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-6">Nuestra Firma</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
              ¿Por qué elegir <br /> <span className="text-gray-400">Estudio Tucumán?</span>
            </h2>
            <div className="bg-white/10 p-8 border-l-4 border-accent">
              <p className="text-xl text-gray-300 italic font-serif">
                "Con más de 30 años de experiencia, somos el socio jurídico que necesitas para afrontar cualquier desafío legal, con un enfoque personalizado y soluciones innovadoras."
              </p>
            </div>
          </motion.div>

          {/* Right Column: List */}
          <div className="space-y-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500">
                      <Icon className="text-2xl text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

