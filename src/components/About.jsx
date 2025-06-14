import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-24 px-6 md:px-24 font-inter text-gray-800 overflow-hidden"
    >
      {/* Decorative Gradient Blob (optional) */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-100 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Animated Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-6 drop-shadow-md text-center relative">
          About the Massachusetts Institute of Technology (MIT)
          <motion.span
            className="block h-1 w-24 bg-red-500 mx-auto mt-3 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "center" }}
          />
        </h2>

        {/* Animated Paragraphs */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center text-gray-700 mb-6"
        >
          Founded in 1861, MIT stands as a global leader in research, innovation,
          and education in science, engineering, and technology. Its mission is to
          advance knowledge and educate students to address the world’s greatest
          challenges.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center text-gray-700 mb-6"
        >
          Home to cutting-edge research centers, world-class faculty, and a vibrant
          community of scholars, MIT fosters a culture of creativity and
          entrepreneurship. It drives innovation that shapes industries and
          improves lives globally.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center text-gray-700"
        >
          From pioneering advancements in artificial intelligence and
          sustainability to groundbreaking discoveries in physics and biology,
          MIT remains at the forefront of knowledge, inspiring the next generation
          of leaders and visionaries.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
