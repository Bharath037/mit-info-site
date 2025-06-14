import React from "react";
import { motion } from "framer-motion";

// Components
import DashboardStats from "./DashboardStats";
import ClassSummaryTable from "./ClassSummaryTable";
import UserTable from "./UserTable";
import DepartmentManager from "./DepartmentManager";
import NoticePublisher from "./NoticePublisher";
import ProjectPanel from "./ProjectPanel";
import EventCalendar from "./EventCalendar";
import RoleAccessPanel from "./RoleAccessPanel";

const AdminDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-white p-6 space-y-8"
    >
      {/* Dashboard Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-3xl font-bold text-[#a31f34]"
      >
        🛠️ Admin Dashboard
      </motion.h1>

      {/* Dashboard Panels */}
      <DashboardStats />
      <ClassSummaryTable />
      <UserTable />
      <DepartmentManager />
      <NoticePublisher />
      <ProjectPanel />
      <EventCalendar />
      <RoleAccessPanel />
    </motion.div>
  );
};

export default AdminDashboard;
