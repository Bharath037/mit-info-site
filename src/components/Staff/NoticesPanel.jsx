import React from "react";

const NoticesPanel = ({ notices }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-blue-800 mb-5 border-b border-blue-200 pb-2">
        Staff Notices
      </h2>
      <ul className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
        {notices.length === 0 ? (
          <li className="text-gray-500 italic text-center">No notices available</li>
        ) : (
          notices.map((notice, index) => (
            <li
              key={index}
              className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
              role="listitem"
              tabIndex={0}
              aria-label={`Notice titled ${notice.title}`}
            >
              <h3 className="text-blue-700 font-semibold">{notice.title}</h3>
              <p className="text-gray-700 text-sm mt-1">{notice.description}</p>
              {notice.date && (
                <time
                  dateTime={notice.date}
                  className="text-xs text-blue-400 mt-1 block"
                >
                  {new Date(notice.date).toLocaleDateString()}
                </time>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NoticesPanel;
