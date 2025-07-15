import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import HeroImg from "../components/HeroImg/HeroImg.js";
import Work from "../components/WorkCard/Work.js";
import Footer from "../components/Footer/Footer.js";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
