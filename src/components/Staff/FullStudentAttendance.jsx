import React, { useEffect, useState } from "react";

const studentList = [
  { regNo: "MIT2023001", name: "Ethan Carter" },
  { regNo: "MIT2023002", name: "Olivia Morgan" },
  { regNo: "MIT2023003", name: "Liam Thompson" },
  { regNo: "MIT2023004", name: "Sophia Bennett" },
  { regNo: "MIT2023005", name: "Noah Anderson" },
  { regNo: "MIT2023006", name: "Ava Roberts" },
  { regNo: "MIT2023007", name: "James Wilson" },
  { regNo: "MIT2023008", name: "Isabella Clark" },
  { regNo: "MIT2023009", name: "Benjamin Lewis" },
  { regNo: "MIT2023010", name: "Mia Walker" },
];

const StudentAttendance = () => {
  const [attendance, setAttendance] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const initialAttendance = {};
    studentList.forEach((student) => {
      initialAttendance[student.regNo] = true; // Default Present
    });
    setAttendance(initialAttendance);
  }, []);

  const toggleAttendance = (regNo) => {
    if (submitted) return;
    setAttendance((prev) => ({
      ...prev,
      [regNo]: !prev[regNo],
    }));
  };

  const handleSubmit = () => {
    const date = new Date().toLocaleString();
    const results = studentList.map((student) => ({
      regNo: student.regNo,
      name: student.name,
      status: attendance[student.regNo] ? "Present" : "Absent",
    }));

    console.log("📅 Attendance taken on:", date);
    console.table(results);
    setSubmitted(true);
    alert("✅ Attendance submitted and saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-50 p-8 font-sans">
      <h2 className="text-3xl font-extrabold text-red-700 mb-10 text-center tracking-wide">
        Student Attendance
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-red-300 bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-red-100 sticky top-0 text-red-700 text-left uppercase text-sm font-semibold tracking-wide select-none">
            <tr>
              <th className="py-4 px-6 border-b border-red-300">S.No</th>
              <th className="py-4 px-6 border-b border-red-300">Register No</th>
              <th className="py-4 px-6 border-b border-red-300">Name</th>
              <th className="py-4 px-6 border-b border-red-300">Mark Attendance</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => {
              const isPresent = attendance[student.regNo];
              return (
                <tr
                  key={student.regNo}
                  className="border-b border-red-200 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6 font-mono text-red-600">{student.regNo}</td>
                  <td className="py-3 px-6 font-medium text-red-800">{student.name}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => toggleAttendance(student.regNo)}
                      disabled={submitted}
                      className={`px-5 py-2 rounded-full text-white font-semibold transition duration-300 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isPresent
                          ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                          : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                      } ${submitted ? "cursor-not-allowed opacity-60" : ""}`}
                      aria-pressed={isPresent}
                      aria-label={`${student.name} is marked as ${
                        isPresent ? "Present" : "Absent"
                      }. Click to toggle attendance.`}
                    >
                      {isPresent ? "Present" : "Absent"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-bold px-10 py-3 rounded-full shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500"
          >
            Submit Attendance
          </button>
        ) : (
          <p className="text-green-600 font-semibold text-lg mt-6">
            Attendance has been submitted and locked.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentAttendance;
