import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Location: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-100" id="location">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-gray-600">
            Visítanos en nuestras oficinas o contáctanos para más información.
          </p>
        </div>

        {/* Contenedor de la información de contacto */}
        <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center">
          {/* Detalles de contacto */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-[#1E2A38] shadow-lg rounded-l-lg mb-6 lg:mb-0">
            <div className="flex flex-col items-center mb-6">
              <FaMapMarkerAlt className="text-4xl text-white mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">Dirección</h3>
                <p className="text-gray-300">Tucumán 588, Corrientes</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <FaPhoneAlt className="text-4xl text-white mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">Teléfono</h3>
                <p className="text-gray-300">123-456-789</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-4xl text-white mb-4" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  Correo Electrónico
                </h3>
                <p className="text-gray-300">contacto@empresa.com</p>
              </div>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="w-full sm:w-1/2 lg:w-2/3 p-6 bg-[#1E2A38] shadow-lg rounded-r-lg">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.184510169637!2d-58.844110923723406!3d-27.463514576323178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456cb00c3b2e85%3A0xd6748baf9088f986!2sTucum%C3%A1n%20588%2C%20W3400BND%20Corrientes!5e0!3m2!1ses-419!2sar!4v1738868003646!5m2!1ses-419!2sar"
                className="w-full h-full rounded-lg"
                title="Ubicación"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
