import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FlaskConical } from "lucide-react";

const projects = [
  {
    title: "AI Research Assistant",
    mentor: "Dr. Evelyn Harper",
    category: "Artificial Intelligence",
    status: "Ongoing",
  },
  {
    title: "Smart Attendance Tracker",
    mentor: "Prof. Lucas Bennett",
    category: "IoT",
    status: "Completed",
  },
  {
    title: "Autonomous Drone Navigation",
    mentor: "Dr. Olivia Cross",
    category: "Robotics",
    status: "Ongoing",
  },
  {
    title: "Quantum Computing Simulator",
    mentor: "Prof. Noah Wright",
    category: "Quantum",
    status: "Completed",
  },
  {
    title: "Blockchain-Based Voting System",
    mentor: "Dr. Amelia Brooks",
    category: "Blockchain",
    status: "Ongoing",
  },
];

const statusColors = {
  Ongoing: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
};

const categoryColors = {
  "Artificial Intelligence": "bg-blue-100 text-blue-700",
  IoT: "bg-pink-100 text-pink-700",
  Robotics: "bg-purple-100 text-purple-700",
  Quantum: "bg-indigo-100 text-indigo-700",
  Blockchain: "bg-emerald-100 text-emerald-700",
};

const ProjectPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-semibold text-rose-700 mb-4 flex items-center gap-2">
        <FlaskConical className="text-rose-500" />
        Research Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="p-4 rounded-xl bg-rose-50 border border-rose-100 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[p.category]}`}
              >
                {p.category}
              </span>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <h3 className="text-base font-bold text-gray-800">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              Mentor: <em>{p.mentor}</em>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
