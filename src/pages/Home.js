import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Whatsapp from '../components/Whatsapp/Whatsapp';
import Info from '../components/Info/Info';
import { homeObjTwo } from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjTwo} />
      <Services />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
