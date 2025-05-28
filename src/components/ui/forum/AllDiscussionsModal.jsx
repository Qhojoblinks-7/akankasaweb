// src/forum/AllDiscussionsModal.jsx
import React from 'react';
import { forumDiscussions } from '../../data/forumPostsData'; // Import ALL discussions

const AllDiscussionsModal = ({ onClose, onSelectDiscussion }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 overflow-y-auto"
      onClick={onClose} // Allows clicking outside to close
    >
      <div
        className="bg-gray-100 rounded-lg shadow-xl w-full max-w-3xl overflow-hidden animate-fade-in-up transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Prevents click on modal content from closing
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            All Forum Discussions
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1 transition-colors duration-200"
            aria-label="Close all discussions"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Modal Body: List of all discussions */}
        <div className="p-4 md:p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-4"> {/* Use space-y for gaps between cards */}
            {forumDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                    onSelectDiscussion(discussion.id); // Call the prop to open the detail modal with this discussion
                    onClose(); // Close this "All Discussions" modal
                }}
              >
                <h3 className="font-semibold text-gray-800 text-lg">{discussion.title}</h3>
                {/* Display author and timestamp of the first post as summary */}
                <p className="text-gray-600 text-sm mt-1">
                  Latest Post by {discussion.posts[0]?.author || 'Unknown'} &bull; {discussion.posts[0]?.timestamp || 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDiscussionsModal;