import React from "react";
import { FlaskConical } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot",
    description: "Built a chatbot using Python and NLP techniques to answer FAQs.",
    status: "Completed",
  },
  {
    title: "Library Management System",
    description: "Created a full-stack MERN app for managing college library records.",
    status: "In Progress",
  },
  {
    title: "Attendance Automation",
    description: "Used OpenCV and face recognition for automated attendance tracking.",
    status: "Pending Review",
  },
];

const statusColors = {
  Completed: "text-green-600",
  "In Progress": "text-yellow-600",
  "Pending Review": "text-red-600",
};

const ProjectsPanel = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-rose-700">Your Projects</h2>
      <div className="space-y-4">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border border-rose-100 rounded-lg p-4 hover:shadow transition"
          >
            <h3 className="text-lg font-semibold text-rose-600">{proj.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
            <span className={`text-sm mt-2 block font-medium ${statusColors[proj.status]}`}>
              Status: {proj.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPanel;
