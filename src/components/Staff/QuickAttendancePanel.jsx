// src/components/Staff/QuickAttendancePanel.jsx

import React, { useState, useEffect } from "react";
import studentsData from "../../data/students";

const QuickAttendancePanel = () => {
  const topThreeStudents = studentsData.slice(0, 3); // Get top 3

  const [attendance, setAttendance] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const initial = {};
    topThreeStudents.forEach((s) => {
      initial[s.id] = "Present"; // default to present
    });
    setAttendance(initial);
  }, []);

  const toggleAttendance = (id) => {
    if (submitted) return;
    setAttendance((prev) => ({
      ...prev,
      [id]: prev[id] === "Present" ? "Absent" : "Present",
    }));
  };

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit attendance?")) {
      console.log("Attendance submitted:", attendance);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col gap-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-red-700 mb-4">Quick Attendance</h2>
      {topThreeStudents.map((student) => (
        <div
          key={student.id}
          className="flex justify-between items-center border-b border-red-200 py-3"
        >
          <span className="text-gray-800">{student.name}</span>
          <button
            onClick={() => toggleAttendance(student.id)}
            disabled={submitted}
            aria-pressed={attendance[student.id] === "Present"}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500 ${
              attendance[student.id] === "Present"
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-red-500 text-white hover:bg-red-600"
            } ${submitted ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {attendance[student.id]}
          </button>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={submitted}
        className="mt-auto bg-red-600 text-white py-3 rounded-full text-lg font-semibold shadow hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitted ? "Attendance Submitted" : "Submit Attendance"}
      </button>
      {submitted && (
        <p className="text-green-700 font-medium mt-3 text-center">
          Attendance has been successfully submitted.
        </p>
      )}
    </div>
  );
};

export default QuickAttendancePanel;
