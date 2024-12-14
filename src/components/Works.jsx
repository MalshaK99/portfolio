import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  youtube_link,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Slight zoom-in effect on hover
      initial={{ opacity: 0, y: 20 }} // Start slightly below with no opacity
      animate={{ opacity: 1, y: 0 }} // Fade in and move to its final position
      transition={{ duration: 0.5, delay: index * 0.2 }} // Smooth transition with delay per card
      className="bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
          {/* GitHub Icon */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          {/* YouTube Icon */}
          <div
            onClick={() => window.open(youtube_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={youtube}
              alt="demo"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="work">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Fade in from a small vertical offset
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Subtle fade-in and movement
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex"
      >
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="mt-20 flex flex-wrap gap-7"
        initial={{ opacity: 0 }} // Start with no opacity
        animate={{ opacity: 1 }} // Gradually fade in the container
        transition={{ duration: 0.5, delay: 0.3 }} // Delay slightly after description
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "works");
