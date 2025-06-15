import React, { useState } from "react";

const NoticePublisher = () => {
  const [notice, setNotice] = useState("");

  const handlePost = () => {
    if (notice.trim() !== "") {
      alert(`✅ Notice posted:\n\n${notice}`);
      setNotice("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-semibold text-rose-700 mb-4">📌 Post a Notice</h2>
      <textarea
        value={notice}
        onChange={(e) => setNotice(e.target.value)}
        rows={4}
        placeholder="Enter your notice..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 transition resize-none"
      />
      <div className="flex justify-end">
        <button
          onClick={handlePost}
          disabled={!notice.trim()}
          className="mt-4 px-5 py-2 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post Notice
        </button>
      </div>
    </motion.div>
  );
};

export default NoticePublisher;
