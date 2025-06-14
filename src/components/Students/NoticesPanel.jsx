import React from "react";
import { MdAnnouncement } from "react-icons/md";

const NoticesPanel = ({ notices, title = "Notices" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-red-200 w-full">
      <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
        <MdAnnouncement className="text-red-500 text-xl" />
        {title}
      </h2>

      {notices.length === 0 ? (
        <p className="text-gray-500 text-sm italic">No notices at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {notices.map((notice, index) => (
            <li
              key={index}
              className="p-4 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition"
            >
              <h3 className="text-red-700 font-semibold text-lg">
                {notice.title}
              </h3>
              <p className="text-gray-800 text-sm mt-1">{notice.description}</p>
              {notice.date && (
                <p className="text-xs text-gray-500 mt-2">
                  📅 {new Date(notice.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoticesPanel;
