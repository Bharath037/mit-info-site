import React from "react";

const newsItems = [
  {
    title: "MIT Develops AI System for Drug Discovery",
    date: "June 5, 2025",
    description:
      "MIT researchers unveil a new AI that accelerates pharmaceutical development by analyzing molecules faster than ever before.",
  },
  {
    title: "MIT Launches New Quantum Computing Center",
    date: "May 22, 2025",
    description:
      "A state-of-the-art research hub focused on pushing boundaries in quantum algorithms and error correction.",
  },
  {
    title: "Alumni Spotlight: MIT Grad Wins Turing Award",
    date: "April 30, 2025",
    description:
      "MIT alum recognized for foundational work in cryptography and secure systems design.",
  },
];

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

// Animation variants for each news card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const News = () => {
  return (
    <section id="news" className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-red-800 mb-16 tracking-tight">
          Latest News
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-shadow transition-transform duration-300 border-l-8 border-red-600 cursor-default"
            >
              <div className="flex items-center mb-3 space-x-3">
                <h3 className="text-2xl font-semibold text-red-700 flex-1">
                  {item.title}
                </h3>
                <div className="w-16 h-1 rounded-full bg-red-400 animate-pulse" />
              </div>
              <p className="text-sm text-gray-500 mb-4 font-medium">{item.date}</p>
              <p className="text-gray-800 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
