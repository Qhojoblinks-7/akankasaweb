// src/research/ForumDiscussionCard.jsx
import React from 'react';

const ForumDiscussionCard = ({ title, author, timeAgo, avatarSrc, link, onClick }) => {
  return (
    // Add onClick handler here
    <div
      className="flex items-center py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      <img src={avatarSrc} alt={author} className="w-10 h-10 rounded-full object-cover mr-4" />
      <div className="flex-grow">
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">
          <span className="font-normal">{author}</span> • <span className="text-gray-500">{timeAgo}</span>
        </p>
      </div>
      <div className="ml-4 text-gray-500 text-sm">
        {/* You could add a reply count here from data if available */}
        {/* <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7h10v2H5V7zm0 4h7v2H5v-2z" clipRule="evenodd"></path></svg> 3</span> */}
      </div>
    </div>
  );
};

export default ForumDiscussionCard;