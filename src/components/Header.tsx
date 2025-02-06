import {
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
      {/* Contenedor de datos de contacto con desplazamiento infinito */}
      <div className="absolute top-0 left-0 w-full text-white py-1 z-40">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <div className="inline-block mr-8">
              <FaPhoneAlt className="inline-block mr-2" />
              <span>Contáctanos: 123-456-789</span>
            </div>
            <div className="inline-block mr-8 ml-16">
              <FaEnvelope className="inline-block mr-2" />
              <span>contacto@empresa.com</span>
            </div>
            <div className="inline-block ml-16">
              <FaMapMarkerAlt className="inline-block mr-2" />
              <span>Dirección: Calle Ficticia 123, Ciudad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full bg-transparent text-white z-50 mt-8">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <FaBalanceScale className="text-white h-12 w-12" />
          </div>
          <nav>
            <ul className="flex space-x-8 md:space-x-16">
              <li>
                <a href="#services" className="hover:text-gray-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-gray-300">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
