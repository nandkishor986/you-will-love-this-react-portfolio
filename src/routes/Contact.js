import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeroProject from "../components/HeroProject/HeroProject.js";
import Form from "../components/Form/Form.js";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Navbar />
        <HeroProject heading="CONTACT" text="Lets have a chat" />
        <Form />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
