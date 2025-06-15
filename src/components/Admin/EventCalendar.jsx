import React from "react";

const events = [
  { date: "2025-06-20", title: "📘 Mid Sem Exams Begin" },
  { date: "2025-07-01", title: "🚀 MIT Tech Fest 2025" },
  { date: "2025-07-15", title: "🎓 Convocation Ceremony" },
  { date: "2025-08-05", title: "📄 Final Project Submission" },
  { date: "2025-08-20", title: "🏖️ Summer Break Begins" },
  { date: "2025-09-01", title: "🏫 New Semester Orientation" },
  { date: "2025-09-10", title: "💼 MIT Career Fair" },
];

const EventCalendar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-rose-700 mb-4">📅 Upcoming Events</h2>
      <ul className="space-y-3 text-sm text-gray-800">
        {events.map((event, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex flex-col sm:flex-row sm:items-center gap-1"
          >
            <span className="font-semibold text-rose-600 w-32">{event.date}</span>
            <span className="text-gray-700">{event.title}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EventCalendar;
