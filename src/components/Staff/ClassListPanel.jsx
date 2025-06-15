import React from "react";
import { motion } from "framer-motion";

const classes = [
  {
    className: "CSE 2A",
    semester: "3rd",
    subject: "DBMS",
  },
  {
    className: "CSE 2B",
    semester: "3rd",
    subject: "Computer Networks",
  },
  {
    className: "CSE 3A",
    semester: "5th",
    subject: "AI",
  },
];

// Animation variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ClassListPanel = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariant}
      className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 w-full max-w-5xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-[#a31f34] mb-6 flex justify-between items-center"
      >
        My Classes
        <span className="bg-[#fbeaec] text-[#a31f34] text-sm font-semibold px-4 py-1 rounded-full">
          {classes.length}
        </span>
      </motion.h2>

      <motion.div variants={containerVariant} className="space-y-4">
        {classes.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="bg-[#fdf2f3] border border-[#f4c3c9] rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="font-medium text-lg text-[#a31f34]">Class: {item.className}</p>
            <p className="text-[#a31f34]">Semester: {item.semester}</p>
            <p className="text-[#a31f34]">Subject: {item.subject}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ClassListPanel;
