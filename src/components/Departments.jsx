import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const departments = [
  {
    title: "Computer Science & Artificial Intelligence",
    description:
      "Cutting-edge research and education in AI, ML, robotics, and software engineering.",
  },
  {
    title: "Electrical Engineering",
    description:
      "Advancing electronics, circuits, communication, and quantum computing.",
  },
  {
    title: "Mechanical Engineering",
    description:
      "Innovation in robotics, energy systems, and manufacturing technologies.",
  },
  {
    title: "Biological Engineering",
    description:
      "Blending biology and engineering to tackle medical and environmental challenges.",
  },
  {
    title: "Civil & Environmental Engineering",
    description:
      "Designing sustainable infrastructure and environmental systems.",
  },
];

const Departments = () => {
  const navigate = useNavigate();

  return (
    <section id="departments" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-red-800 mb-3">Departments</h2>
        <button
          onClick={() => navigate("/departments")}
          className="text-red-700 border border-red-700 px-4 py-1 rounded-full text-sm font-semibold hover:bg-red-700 hover:text-white transition"
          aria-label="View all departments and schools"
        >
          View Departments & Schools
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10">
        {departments.map((dept, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ x: isLeft ? -120 : 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="bg-red-50 p-8 rounded-3xl shadow-lg max-w-md w-full mx-auto"
            >
              <h3 className="text-2xl font-semibold text-red-800 mb-3">
                {dept.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{dept.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Departments;
