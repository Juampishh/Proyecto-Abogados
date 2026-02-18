import {
  FaBook,
  FaBalanceScale,
  FaHandshake,
  FaGavel,
  FaUserShield,
  FaFileContract,
  FaAward,
  FaLightbulb,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Interfaces
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BannerSlide {
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  icon: React.ElementType; // Store component reference, not instance
  description: string;
}

export interface TeamMember {
  name: string;
  image: string;
  title: string;
}

export interface WhyChooseUsItem {
  title: string;
  icon: React.ElementType;
  description: string;
}

// Data
export const CONTACT_INFO: ContactInfo = {
  phone: "+54-3794-336030",
  email: "info.solucionesjuridicasctes@gmail.com",
  address: "Tucumán 588, Corrientes Capital",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Servicios", href: "#services" },
  { label: "Equipo", href: "#team" },
  { label: "Contacto", href: "#contact" },
];

export const BANNERS: BannerSlide[] = [
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

export const SERVICES: ServiceItem[] = [
  {
    title: "Consultoría Legal",
    icon: FaBook,
    description:
      "Asesoramiento legal personalizado para resolver tus dudas y problemas jurídicos.",
  },
  {
    title: "Juicios",
    icon: FaBalanceScale,
    description:
      "Representación legal en juicios y litigios para defender tus derechos.",
  },
  {
    title: "Mediación",
    icon: FaHandshake,
    description: "Solución de conflictos a través de la mediación y el diálogo.",
  },
  {
    title: "Arbitraje",
    icon: FaGavel,
    description:
      "Resolución de disputas mediante arbitraje profesional y justo.",
  },
  {
    title: "Protección de Datos",
    icon: FaUserShield,
    description: "Asesoramiento en protección de datos y privacidad.",
  },
  {
    title: "Contratos",
    icon: FaFileContract,
    description:
      "Redacción y revisión de contratos para asegurar tus intereses.",
  },
];

export const TEAM: TeamMember[] = [
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

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Experiencia Inigualable",
    icon: FaAward,
    description:
      "Más de tres décadas en el sector, brindando soluciones efectivas y confiables.",
  },
  {
    title: "Innovación Continua",
    icon: FaLightbulb,
    description:
      "Adoptamos las mejores tecnologías y estrategias para proporcionar servicios legales de vanguardia.",
  },
  {
    title: "Atención Personalizada",
    icon: FaUserTie,
    description:
      "Nos enfocamos en cada cliente, brindando atención individualizada y soluciones a medida.",
  },
];

export const FOOTER_CREDITS = {
  year: new Date().getFullYear(),
  developer: "Juan Pablo Merino",
  developerLink: "https://www.linkedin.com/in/juan-pablo-merino-347b75218/",
};
