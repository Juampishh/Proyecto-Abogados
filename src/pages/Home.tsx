import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Service";
import Team from "../components/Team";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Location from "../components/Location";
import WhatsAppIcon from "../components/WhatsAppIcon";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <WhyChooseUs />
      <Services />
      <Team />
      <Location />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
};

export default Home;
