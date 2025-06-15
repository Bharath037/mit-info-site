import React from "react";

const labs = [
  {
    name: "MIT Media Lab",
    description: "Exploring future tech in human-computer interaction, design, and AI.",
  },
  {
    name: "Computer Science & AI Lab (CSAIL)",
    description: "One of the world’s top labs for artificial intelligence and computing.",
  },
  {
    name: "Lincoln Laboratory",
    description: "R&D in national security, sensors, and communication technologies.",
  },
  {
    name: "Research Laboratory of Electronics",
    description: "Quantum electronics, photonics, and information systems innovation.",
  },
  {
    name: "Biological Engineering Lab",
    description: "Pioneering bioengineering solutions for health and environment.",
  },
  {
    name: "Energy Initiative Lab",
    description: "Advancing sustainable energy through technology and policy research.",
  },
];

const Labs = () => {
  return (
    <section id="labs" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-red-800 mb-3">Research Labs</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {labs.map((lab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: index * 0.10,
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="bg-white rounded-3xl p-7 shadow-lg border-t-4 border-red-600 hover:shadow-2xl hover:scale-[1.04] transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-red-800 mb-3">{lab.name}</h3>
            <p className="text-gray-700 leading-relaxed">{lab.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Labs;
