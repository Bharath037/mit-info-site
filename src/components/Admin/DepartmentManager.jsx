// src/components/Admin/DepartmentManager.jsx
import React from "react";
import { motion } from "framer-motion";

const departments = [
  { code: "CSE", name: "Computer Science & Engineering" },
  { code: "ECE", name: "Electronics & Communication Engineering" },
  { code: "ME", name: "Mechanical Engineering" },
  { code: "CE", name: "Civil Engineering" },
  { code: "EE", name: "Electrical Engineering" },
  { code: "IT", name: "Information Technology" },
  { code: "BT", name: "Biotechnology" },
  { code: "CH", name: "Chemical Engineering" },
  { code: "AE", name: "Aerospace Engineering" },
  { code: "PH", name: "Physics" },
  { code: "MA", name: "Mathematics" },
  { code: "HS", name: "Humanities & Social Sciences" },
];

const DepartmentManager = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-rose-700 mb-4">🏛️ Departments</h2>
      <ul className="space-y-2 pl-5 list-disc text-gray-800 text-sm">
        {departments.map((dept, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="hover:text-rose-600 transition-colors"
          >
            <span className="font-semibold text-rose-800">{dept.code}</span>:{" "}
            {dept.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DepartmentManager;
