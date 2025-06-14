import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Departments from "./components/Departments";
import Projects from "./pages/Projects";
import Labs from "./components/Labs";
import News from "./components/News";
import Alumni from "./components/Alumni";
import Contact from "./components/Contact";

import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Admissions from "./pages/Admissions";
import DepartmentsPage from "./pages/DepartmentsPage";

import StudentDashboard from "./components/Students/StudentDashboard";
import StaffDashboard from "./components/Staff/StaffDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import FullStudentAttendance from "./components/Staff/FullStudentAttendance";

import { AttendanceProvider } from "./context/AttendanceContext";

function App() {
  return (
    <Router>
      <AttendanceProvider>
        <div className="font-sans scroll-smooth">
          <Routes>

            {/* Public Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Landing />
                  <About />
                  <Departments />
                  <Labs />
                  <News />
                  <Alumni />
                  <Contact />
                </>
              }
            />

            {/* Static Content Pages */}
            <Route path="/gallery" element={<><Navbar /><Gallery /></>} />
            <Route path="/admissions" element={<><Navbar /><Admissions /></>} />
            <Route path="/departments" element={<><Navbar /><DepartmentsPage /></>} />
            <Route path="/projects" element={<><Navbar /><Projects /></>} />

            {/* Login Page */}
            <Route path="/login" element={<Login />} />

            {/* Dashboards (No Navbar) */}
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/staff" element={<StaffDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />

            {/* Staff Attendance Pages */}
            <Route path="/dashboard/staff/students-attendance" element={<FullStudentAttendance />} />

          </Routes>
        </div>
      </AttendanceProvider>
    </Router>
  );
}

export default App;
