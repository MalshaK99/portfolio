import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Parent container animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        when: "beforeChildren", // Start child animations after parent is visible
      },
    },
  };

  // Individual card animation settings
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring", // Spring physics for smoother animations
        stiffness: 80,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className='flex flex-row flex-wrap justify-center gap-10'
      variants={containerVariants} // Apply container animation
      initial="hidden"
      animate="visible"
    >
      {technologies.map((technology) => (
        <motion.div
          className='w-28 h-28 flex items-center justify-center'
          key={technology.name}
          variants={itemVariants} // Apply individual card animation
        >
          <img
            src={technology.icon} // Render the icon directly as an image
            alt={technology.name}
            className='w-full h-full object-contain'
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
