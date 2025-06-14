import React from "react";
import StudentProfileCard from "./StudentProfileCard";
import GradesPanel from "./GradesPanel";
import ProjectsPanel from "./ProjectsPanel";
import NoticesPanel from "../Students/NoticesPanel";
import { motion } from "framer-motion"; // For future enhancements

const student = {
  name: "John Doe",
  id: "MIT2023123",
  course: "Computer Science",
  year: "2nd",
};

const notices = [
  {
    title: "Exam Schedule Released",
    description: "Mid-semester exams start from July 5th.",
    date: "2025-06-14",
  },
  {
    title: "Library Access Notice",
    description: "Library will be closed this Saturday due to maintenance.",
    date: "2025-06-13",
  },
];

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-8 flex flex-col items-center font-inter">
      <h1 className="text-4xl font-extrabold text-[#a31f34] mb-8 drop-shadow-sm text-center">
        Student Dashboard
      </h1>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Left: Profile + Projects */}
        <div className="flex flex-col gap-6">
          <StudentProfileCard student={student} />
          <ProjectsPanel />
        </div>

        {/* Right: Grades */}
        <GradesPanel />
      </div>

      {/* Notices Full Width */}
      <div className="w-full max-w-7xl mt-8">
        <NoticesPanel title="Student Notices" notices={notices} />
      </div>
    </div>
  );
};

export default StudentDashboard;
