import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, UserCog, ShieldCheck } from "lucide-react";

const users = [
  { name: "Liam Anderson", role: "Student", class: "CSE 3rd Year" },
  { name: "Sophia Carter", role: "Student", class: "ECE 2nd Year" },
  { name: "James Mitchell", role: "Staff", class: "ME Department" },
  { name: "Ava Thompson", role: "Admin", class: "—" },
];

const roleIcons = {
  Student: <GraduationCap className="w-4 h-4 text-green-600" />,
  Staff: <UserCog className="w-4 h-4 text-blue-600" />,
  Admin: <ShieldCheck className="w-4 h-4 text-rose-600" />,
};

const roleBadgeColor = {
  Student: "bg-green-100 text-green-700",
  Staff: "bg-blue-100 text-blue-700",
  Admin: "bg-rose-100 text-rose-700",
};

const UserTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-semibold text-rose-700 mb-4">👤 User Management</h2>
      <table className="w-full text-sm text-gray-700">
        <thead className="bg-rose-100 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Department/Class</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-gray-200 hover:bg-rose-50 transition"
            >
              <td className="px-4 py-2 font-medium">{user.name}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                {roleIcons[user.role]}
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${roleBadgeColor[user.role]}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-2">{user.class}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default UserTable;
