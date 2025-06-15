// src/components/Admin/ClassSummaryTable.jsx
import React from "react";

const mockClassData = [
  { className: "CSE 2nd Year", total: 54, present: 89, absent: 11 },
  { className: "ECE 3rd Year", total: 48, present: 85, absent: 15 },
  { className: "ME 1st Year", total: 40, present: 92, absent: 8 },
];

const ClassSummaryTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg p-6 w-full overflow-x-auto"
    >
      <h2 className="text-2xl font-bold text-rose-700 mb-4">
        📊 Class-Wise Summary
      </h2>

      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-rose-100 text-left text-xs font-semibold uppercase tracking-wider">
          <tr>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Total Students</th>
            <th className="px-4 py-2">Present (%)</th>
            <th className="px-4 py-2">Absent (%)</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockClassData.map((cls, idx) => (
            <motion.tr
              key={idx}
              className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <td className="px-4 py-3">{cls.className}</td>
              <td className="px-4 py-3">{cls.total}</td>
              <td className="px-4 py-3 text-green-600 font-semibold">{cls.present}%</td>
              <td className="px-4 py-3 text-red-500 font-semibold">{cls.absent}%</td>
              <td className="px-4 py-3">
                <button
                  className="px-4 py-1.5 bg-rose-600 text-white rounded-full text-xs hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
                >
                  View Details
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ClassSummaryTable;
