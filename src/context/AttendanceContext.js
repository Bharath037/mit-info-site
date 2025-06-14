// src/context/AttendanceContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import students from "../data/students"; // ✅ Importing student records

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendanceData, setAttendanceData] = useState({});

  // Initialize attendance based on student list
  useEffect(() => {
    const initial = {};
    students.forEach((student) => {
      initial[student.regNo] = student.present ? "Present" : "Absent";
    });
    setAttendanceData(initial);
  }, []);

  const updateAttendance = (newData) => {
    setAttendanceData(newData);
  };

  return (
    <AttendanceContext.Provider value={{ attendanceData, updateAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);

