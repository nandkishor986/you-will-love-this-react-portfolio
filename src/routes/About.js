import React from "react";

import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import AboutContent from "../components/About/AboutContent.js";
import HeroProject from "../components/HeroProject/HeroProject.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <HeroProject
          heading="ABOUT ME"
          text="Empowering ideas through technology"
        />
        <AboutContent />
        <Footer />
      </motion.div>
    </div>
  );
};

export default About;
