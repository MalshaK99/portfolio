import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import myimage from "../assets/malshaa.webp";
import cv from "../assets/cv.pdf";

const phrases = [
  "Full Stack Developer",
  "Software Engineer",
  "Tech Enthusiast",
];
const typingSpeed = 200;
const deletingSpeed = 150;
const pauseBetween = 1500;

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPosition, setTypingPosition] = useState(0);

  useEffect(() => {
    let timer;

    const fullPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypingPosition((prev) => prev - 1);
        if (typingPosition === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypingPosition((prev) => prev + 1);
        if (typingPosition === fullPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseBetween);
        }
      }, typingSpeed);
    }

    setCurrentPhrase(fullPhrase.slice(0, typingPosition));

    return () => clearTimeout(timer);
  }, [typingPosition, isDeleting, phraseIndex]);

  return (
    <section className="relative w-full min-h-screen text-white  flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-teal-300 via-teal-100 to-white-100 bg-clip-text text-transparent">
            Malsha Karunarathna
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-teal-600 mb-6">
            I'm a{" "}
            <span className="font-bold text-teal-600 relative inline-block">
              {currentPhrase}
              <span className="absolute -right-2 top-0 text-white text-3xl animate-blink">
                |
              </span>
            </span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
            I am an ambitious and driven individual seeking internship
            opportunities to apply and expand my skills in Software Engineering.
            With hands-on experience in building innovative projects, I am
            passionate about solving real-world problems through technology. I
            am eager to learn and grow in a collaborative and dynamic work
            environment.
          </p>
          <motion.a
            href={cv}
            download="Malsha_Karunarathna_Resume.pdf"
            className="inline-block px-6 py-3 bg-teal-500 text-black font-semibold rounded-md shadow transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 128, 128, 1)",
            }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "rgba(0, 77, 64, 1)",
            }}
          >
            Download CV
          </motion.a>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/MalshaK99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-800 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/malsha-karunarathna-350782228/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-800 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-800 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a> */}
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Orbiting Circular Frame */}
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute"
          >
            {/* Gradient Definition */}
            <defs>
              <linearGradient
                id="circleGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#CCFBF1" /> {/* teal-100 */}
                <stop offset="100%" stopColor="#065D69" /> {/* teal-800 */}
              </linearGradient>
            </defs>

            {/* Circle with Gradient Stroke */}
            <motion.circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="url(#circleGradient)" // Reference the gradient correctly
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                repeat: Infinity,
                duration: 4, // Time to complete one clockwise loop
                ease: "linear",
                times: [0, 0.5, 1], // Timing for fading effect
              }}
            />
          </svg>

          {/* Image */}
          <img
            src={myimage}
            alt="Malsha Karunarathna"
            className="relative w-[360px] h-[360px] object-cover rounded-full shadow-lg"
          />
        </motion.div>

        {/* Scroll Down Button */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <a href="#Works">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-teal-500 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-teal-500 mb-1"
              />
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
