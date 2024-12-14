import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <motion.div
          className='w-28 h-28 flex items-center justify-center'
          key={technology.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={technology.icon} // Render the icon directly as an image
            alt={technology.name}
            className='w-full h-full object-contain'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
