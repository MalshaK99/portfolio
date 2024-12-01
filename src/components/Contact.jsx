import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Information Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-xl"
      >
        <p className="text-teal-500 font-medium mb-4">Get in touch</p>
        <h3 className="text-white text-3xl font-bold mb-6">Contact.</h3>

        <div className="flex flex-col gap-6">
          {/* Phone Number */}
          <div className="flex items-center gap-4 p-4 bg-teal-700 rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-white text-3xl"
            />
            <a
              href="tel:+94764635795"
              className="text-white font-semibold text-lg hover:text-gray-200 transition-colors"
            >
              +94 764635795
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-teal-700 rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white text-3xl"
            />
            <a
              href="mailto:mkarunarathna872@gmail.com"
              className="text-white font-semibold text-lg hover:text-gray-200 transition-colors"
            >
              mkarunarathna872@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
