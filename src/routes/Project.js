import React from "react";

import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeroProject from "../components/HeroProject/HeroProject.js";
import SkillsCard from "../components/SkillsCard/SkillsCard.js";
import Work from "../components/WorkCard/Work.js";
import { motion } from "framer-motion";


const Project = () => {
  return (
    <div>
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
      <Navbar />
      <HeroProject heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <SkillsCard />
      <Footer />
      </motion.div>
    </div>
  );
};

export default Project;
