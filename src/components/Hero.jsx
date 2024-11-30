import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import myimage from "../assets/malshaa.jpg";

const phrases = [
  "Full Stack Developer",
  "Software Engineer",
  "Tech Enthusiast",
];
const typingSpeed = 150;
const deletingSpeed = 100;
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
    <section className="relative w-full h-screen bg-[#111827] text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Malsha Karunarathna
          </h1>
          <h2 className="text-2xl font-light text-green-400 mb-6">
            I'm a{" "}
            <span className="font-bold text-green-400 relative inline-block">
              {currentPhrase}
              <span className="absolute -right-2 top-0 animate-blink">|</span>
            </span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I am a motivated software developer seeking an internship
            opportunity in full-stack development. I excel at collaborating
            closely with clients to create efficient and user-friendly solutions
            that address real-world challenges. I'm eager to contribute my
            skills to a dynamic team and help bring innovative ideas to life.
          </p>

          <motion.a
            href="./assets/cv.pdf"
            download="Malsha_Karunarathna_Resume.pdf"
            className="inline-block px-6 py-3 bg-green-500 text-black font-semibold rounded-md shadow transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            // transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{
              scale: 1.1, // Slightly increase the size on hover
              backgroundColor: "rgba(72, 187, 120, 1)", // Change to a darker green
            }}
            whileTap={{
              scale: 0.95, // Slightly decrease the size on tap
              backgroundColor: "rgba(34, 139, 76, 1)", // Change to an even darker green
            }}
          >
            Download CV
          </motion.a>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/MalshaK99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-black-900 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/malsha-karunarathna-350782228/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-900 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-900 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
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
            <motion.circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="rgba(72, 187, 120, 0.9)" // Green stroke color
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
      </div>
    </section>
  );
};

export default Hero;
