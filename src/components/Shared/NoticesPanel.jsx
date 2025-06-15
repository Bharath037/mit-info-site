import React from "react";

const NoticesPanel = ({ notices = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full"
    >
      <h2 className="text-2xl font-bold text-blue-800 mb-4">📢 Notices</h2>

      {notices.length === 0 ? (
        <p className="text-sm text-gray-500">No current notices available.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition duration-200"
            >
              <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                📝 {notice.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{notice.description}</p>
              {notice.date && (
                <p className="text-xs text-gray-500 mt-1">📅 {notice.date}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NoticesPanel;
