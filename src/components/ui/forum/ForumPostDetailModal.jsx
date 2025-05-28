// src/forum/ForumPostDetailModal.jsx
import React, { useEffect, useRef } from 'react';

const ForumPostDetailModal = ({ discussion, onClose }) => {
  if (!discussion) return null;

  const modalBodyRef = useRef(null);

  useEffect(() => {
    const contentElement = modalBodyRef.current;
    if (contentElement) {
      const links = contentElement.querySelectorAll('a');

      const handleClick = (e) => {
        // Prevent default navigation for internal links (those starting with /)
        if (e.currentTarget.getAttribute('href')?.startsWith('/')) {
          e.preventDefault();
          console.log(`Internal link clicked: ${e.currentTarget.getAttribute('href')}`);
          alert(`Internal link "${e.currentTarget.getAttribute('href')}" clicked! (Navigation prevented for demo)`);
          // You could potentially use react-router-dom's navigate here if needed,
          // but for a modal, usually you just want to prevent navigation.
        }
      };

      links.forEach(link => {
        link.addEventListener('click', handleClick);
      });

      return () => {
        links.forEach(link => {
          link.removeEventListener('click', handleClick);
        });
      };
    }
  }, [discussion]); // Re-run if discussion changes

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent backdrop-blur-lg overflow-y-auto"
      onClick={onClose} // Allows clicking outside the modal to close it
    >
      <div
        className="bg-gray-100 rounded-lg shadow-xl w-full max-w-3xl overflow-hidden animate-fade-in-up h-screen transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Prevents click on modal content from closing the modal
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
            {discussion.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1 transition-colors duration-200"
            aria-label="Close discussion"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Modal Body: Discussion Posts (scrollable) */}
        <div ref={modalBodyRef} className="p-4 md:p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-4"> {/* Creates gap between individual post cards */}
            {discussion.posts.map((post) => (
              // Individual post card styling - matches screenshot
              <div key={post.postId} className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
                <div className="flex items-start mb-3">
                  <img
                    src={post.avatarSrc}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                {/* Dynamically created HTML content - uses 'prose' and custom 'proverb-highlight' */}
                <div
                  className="prose prose-sm max-w-none text-gray-700 mt-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                {/* Reply/Quote/View Profile Links - Adjusted to match screenshot */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4 pt-3 border-t border-gray-100">
                    <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Reply
                    </a>
                    <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 00-1 1v1h2V3a1 1 0 00-1-1zM5 5a2 2 0 00-2 2v2h14V7a2 2 0 00-2-2H5zm0 9a2 2 0 00-2 2v2h14v-2a2 2 0 00-2-2H5zM5 11h10v2H5v-2z"></path></svg>
                        Quote
                    </a>
                    {/* View Profile button with light background */}
                    <a href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-300 transition-colors duration-200">
                      View Profile
                    </a>
                </div>
              </div>
            ))}
          </div>

          {/* Add Your Reply section */}
          <div className="bg-white rounded-lg p-5 mt-6 shadow-sm border border-gray-200">
            <h4 className="text-md font-semibold text-gray-800 mb-3">Add Your Reply</h4>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-800 h-28 resize-y"
              placeholder="Write your reply... You can @mention users, quote previous posts, or add links to lessons, dictionary entries, or cultural articles."
            ></textarea>
            <div className="flex justify-end space-x-3 mt-3">
              <button className="px-5 py-2 text-sm font-medium rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200">
                Preview
              </button>
              <button className="px-5 py-2 text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-200">
                Post Reply
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Markdown & basic HTML supported. Please be respectful and stay on topic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPostDetailModal;