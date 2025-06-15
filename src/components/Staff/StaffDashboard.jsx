import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffProfileCard from "./StaffProfileCard";
import ClassListPanel from "./ClassListPanel";
import NoticesPanel from "../Students/NoticesPanel";
import students from "../../data/students"; // ✅ Default import

const staff = {
  name: "Dr. Samantha Lee",
  id: "MIT-STF-001",
  department: "Computer Science",
  subjects: ["Databases", "Artificial Intelligence", "Networks"],
};

const notices = [
  {
    title: "Meeting with HOD",
    description:
      "Staff meeting with HOD scheduled at 3 PM today in Seminar Hall. Be on time.",
  },
  {
    title: "Submit Grades",
    description:
      "Ensure grades for mid-term assessments are submitted by Friday 5 PM.",
  },
  {
    title: "Departmental Review",
    description:
      "Annual departmental review will take place on Monday. Prepare all reports.",
  },
];

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [attendanceStatus, setAttendanceStatus] = useState({});

  useEffect(() => {
    const initialStatus = {};
    students.forEach((student) => {
      initialStatus[student.regNo] = student.present ? "Present" : "Absent";
    });
    setAttendanceStatus(initialStatus);
  }, []);

  const toggleAttendance = (regNo) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [regNo]: prev[regNo] === "Present" ? "Absent" : "Present",
    }));
  };

  const presentCount = Object.values(attendanceStatus).filter(
    (status) => status === "Present"
  ).length;
  const absentCount = students.length - presentCount;
  const attendancePercent = students.length
    ? Math.round((presentCount / students.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 flex flex-col gap-6 font-inter">
      <h1 className="text-3xl font-bold text-red-800 text-center">
        Staff Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full">
          <div className="bg-white rounded-xl shadow-md p-4">
            <StaffProfileCard staff={staff} />
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-red-800">
                Quick Attendance
              </h2>
              <button
                onClick={() => navigate("/dashboard/staff/students-attendance")}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-200"
              >
                View Full List
              </button>
            </div>

            <table className="w-full text-sm text-left mb-4 rounded-lg overflow-hidden">
              <thead className="bg-red-100">
                <tr className="text-red-700">
                  <th className="py-2 px-3">S.No</th>
                  <th className="py-2 px-3">Register No</th>
                  <th className="py-2 px-3">Name</th>
                  <th className="py-2 px-3">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {students.slice(0, 3).map((student, index) => (
                  <tr
                    key={student.regNo}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="py-2 px-3">{index + 1}</td>
                    <td className="py-2 px-3">{student.regNo}</td>
                    <td className="py-2 px-3">{student.name}</td>
                    <td className="py-2 px-3">
                      <button
                        onClick={() => toggleAttendance(student.regNo)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium text-white transition-colors duration-200 ${
                          attendanceStatus[student.regNo] === "Present"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        } shadow-sm hover:shadow-md`}
                      >
                        {attendanceStatus[student.regNo]}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <ClassListPanel />

        {/* Attendance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-md p-5 w-full"
        >
          <h2 className="text-lg font-semibold text-red-800 mb-3">
            Attendance Summary
          </h2>
          <div className="text-sm text-gray-800 space-y-2">
            <div className="flex justify-between flex-wrap gap-2 mb-3">
              <p>
                <strong>Total:</strong> {students.length} students
              </p>
              <p>
                <strong>Present:</strong> {presentCount}
              </p>
              <p>
                <strong>Absent:</strong> {absentCount}
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${attendancePercent}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-red-600 h-4 rounded-full text-xs text-white flex items-center justify-center font-medium"
              >
                {attendancePercent}%
              </motion.div>
            </div>

            {attendancePercent < 100 && (
              <p className="text-red-500 text-xs mt-2">
                *Attendance is not 100%. Please review absent students.
              </p>
            )}
          </div>
        </motion.div>

        {/* Notices */}
        <div className="col-span-1 lg:col-span-2">
          <NoticesPanel notices={notices} />
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
