import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const grades = [
  { subject: "Data Structures", grade: "A" },
  { subject: "Operating Systems", grade: "B+" },
  { subject: "Mathematics", grade: "A-" },
  { subject: "AI Fundamentals", grade: "A+" },
  { subject: "Computer Networks", grade: "B" },
  { subject: "Database Systems", grade: "A" },
  { subject: "Machine Learning", grade: "A+" },
  { subject: "Software Engineering", grade: "A-" },
  { subject: "Web Development", grade: "B+" },
  { subject: "Discrete Mathematics", grade: "A" },
];

const gradeColors = {
  "A+": "text-green-600",
  A: "text-green-500",
  "A-": "text-green-400",
  "B+": "text-yellow-500",
  B: "text-yellow-600",
  "B-": "text-yellow-700",
  C: "text-orange-600",
  D: "text-red-500",
  F: "text-red-700",
};

const GradesPanel = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl border border-rose-100">
      <h2 className="text-2xl font-bold text-rose-700 mb-4 flex items-center gap-2">
        <FaStar className="text-rose-500" /> Grades Overview
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-rose-100 text-rose-700">
              <th className="p-3 border-b-2 border-rose-200">Subject</th>
              <th className="p-3 border-b-2 border-rose-200">Grade</th>
              <th className="p-3 border-b-2 border-rose-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((item, index) => (
              <tr key={index} className="hover:bg-rose-50 transition duration-150">
                <td className="p-3 border-b border-rose-100">{item.subject}</td>
                <td
                  className={`p-3 border-b border-rose-100 font-semibold ${
                    gradeColors[item.grade] || "text-gray-700"
                  }`}
                >
                  {item.grade}
                </td>
                <td className="p-3 border-b border-rose-100">
                  <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium">
                    <FaCheckCircle className="text-green-500" /> Passed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesPanel;
