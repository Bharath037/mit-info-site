import React from "react";
import { FaUserTie } from "react-icons/fa";

const StaffProfileCard = ({ staff }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 15px 25px rgba(220, 38, 38, 0.3)" }}
      className="bg-gradient-to-tr from-red-50 to-white w-full rounded-3xl border border-red-200 p-6 cursor-default select-none"
    >
      <h2 className="flex items-center text-2xl font-semibold text-red-700 mb-6">
        <FaUserTie className="mr-3 text-red-600" size={28} />
        Staff Profile
      </h2>
      <div className="space-y-4 text-gray-800 text-base">
        <p>
          <span className="font-semibold text-red-600">Name :</span> {staff.name}
        </p>
        <p>
          <span className="font-semibold text-red-600">Staff ID :</span> {staff.id}
        </p>
        <p>
          <span className="font-semibold text-red-600">Department :</span> {staff.department}
        </p>
        <p>
          <span className="font-semibold text-red-600">Subjects :</span>{" "}
          {staff.subjects?.join(", ")}
        </p>
      </div>
    </motion.div>
  );
};

export default StaffProfileCard;
