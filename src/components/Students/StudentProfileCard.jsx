import React from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";

const StudentProfileCard = ({ student }) => {
  return (
    <div className="bg-white w-full rounded-2xl shadow-lg border border-rose-200 p-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaUserGraduate className="text-rose-500 text-2xl" />
        <h2 className="text-2xl font-bold text-rose-700">Student Profile</h2>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-800 text-sm md:text-base">
        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md">
          <FaUserGraduate className="text-rose-400" />
          <span>
            <strong>Name:</strong> {student.name || "John Doe"}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md">
          <FaUniversity className="text-rose-400" />
          <span>
            <strong>Student ID:</strong> { "MIT2025123"||student.id }
          </span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md">
          <FaUniversity className="text-rose-400" />
          <span>
            <strong>Course:</strong> {student.course || "Not Available"}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md">
          <FaCalendarAlt className="text-rose-400" />
          <span>
            <strong>Year:</strong> {student.year || "N/A"}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md">
          <FaEnvelope className="text-rose-400" />
          <span>
            <strong>Email:</strong> {student.email || "johndoe@mit.edu"}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md">
          <FaPhone className="text-rose-400" />
          <span>
            <strong>Phone:</strong> {student.phone || "+1 617-362-1102"}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 p-3 rounded-md col-span-1 md:col-span-2">
          <FaCalendarAlt className="text-rose-400" />
          <span>
            <strong>Date of Birth:</strong> {student.dob || "Jan 1, 2004"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileCard;
