// src/components/Admin/DashboardStats.jsx
import React from "react";
import {
  Users,
  Briefcase,
  Building2,
  FlaskConical,
  Rocket,
} from "lucide-react";

const stats = [
  {
    label: "Total Students",
    value: 452,
    color: "bg-blue-500",
    icon: <Users className="h-6 w-6 mr-2" />,
  },
  {
    label: "Total Staff",
    value: 83,
    color: "bg-green-500",
    icon: <Briefcase className="h-6 w-6 mr-2" />,
  },
  {
    label: "Departments",
    value: 12,
    color: "bg-purple-500",
    icon: <Building2 className="h-6 w-6 mr-2" />,
  },
  {
    label: "Research Labs",
    value: 27,
    color: "bg-yellow-500",
    icon: <FlaskConical className="h-6 w-6 mr-2" />,
  },
  {
    label: "Ongoing Projects",
    value: 139,
    color: "bg-red-500",
    icon: <Rocket className="h-6 w-6 mr-2" />,
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-2xl text-white shadow-xl flex items-center transition-transform duration-300 ${stat.color}`}
        >
          {stat.icon}
          <div>
            <h3 className="text-lg font-medium">{stat.label}</h3>
            <p className="text-4xl font-bold">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;
