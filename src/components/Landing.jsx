import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.6,
    },
  },
};

const Landing = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-4 md:px-16"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center md:text-left space-y-6"
        >
          <motion.h1
            variants={textVariants}
            custom={0}
            className="text-4xl md:text-6xl font-bold text-red-800 leading-tight"
          >
            Massachusetts <br /> Institute of Technology
          </motion.h1>
          <motion.p
            variants={textVariants}
            custom={1}
            className="text-gray-600 text-lg"
          >
            Welcome to the MIT Info Portal – Explore departments, labs,
            achievements, and more.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="flex justify-center"
        >
          <img
            src="https://www.logo.wine/a/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.svg"
            alt="MIT"
            className="w-full max-w-m"
            />

        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
