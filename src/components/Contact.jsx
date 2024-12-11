import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Section */}
      <div className="xl:mt-12 flex flex-col xl:flex-row gap-10 overflow-hidden flex-grow">
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
              <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-3xl" />
              <a
                href="tel:+94764635795"
                className="text-white font-semibold text-lg hover:text-gray-200 transition-colors"
              >
                +94 764635795
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-teal-700 rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl" />
              <a
                href="mailto:mkarunarathna872@gmail.com"
                className="text-white font-semibold text-lg hover:text-gray-200 transition-colors truncate"
              >
                mkarunarathna872@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1"
          style={{
            height: "clamp(300px, 50vh, 550px)", // Responsive height
          }}
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black-200 text-white py-4 text-center rounded-lg mt-auto">
        <p className="text-sm md:text-base lg:text-lg px-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
