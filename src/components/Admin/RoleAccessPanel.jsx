import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserCog, GraduationCap } from "lucide-react";

const roles = [
  { name: "Admin", access: "Full", icon: <ShieldCheck className="w-5 h-5 text-rose-600" /> },
  { name: "Staff", access: "Moderate", icon: <UserCog className="w-5 h-5 text-blue-600" /> },
  { name: "Student", access: "Limited", icon: <GraduationCap className="w-5 h-5 text-green-600" /> },
];

const accessStyles = {
  Full: "bg-rose-100 text-rose-700",
  Moderate: "bg-blue-100 text-blue-700",
  Limited: "bg-green-100 text-green-700",
};

const RoleAccessPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-semibold text-rose-700 mb-4 flex items-center gap-2">
        🔐 Role Access Levels
      </h2>
      <table className="w-full text-sm text-gray-700">
        <thead className="bg-rose-100 rounded">
          <tr>
            <th className="text-left px-4 py-2">Role</th>
            <th className="text-left px-4 py-2">Access</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-rose-100 hover:bg-rose-50 transition"
            >
              <td className="px-4 py-2 font-medium flex items-center gap-2">
                {role.icon}
                {role.name}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${accessStyles[role.access]}`}
                >
                  {role.access}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default RoleAccessPanel;
