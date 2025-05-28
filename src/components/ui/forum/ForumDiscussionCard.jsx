// src/research/ForumDiscussionCard.jsx
import React from 'react';

// Ensure 'link' is NOT in the destructuring of props
const ForumDiscussionCard = ({ title, author, timeAgo, avatarSrc, onClick }) => {
  return (
    <div
      className="flex items-center py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      <img src={avatarSrc} alt={author} className="w-10 h-10 rounded-full object-cover mr-4 flex-shrink-0" />
      <div className="flex-grow">
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">
          <span className="font-normal">Posted by {author}</span> • <span className="text-gray-500">{timeAgo}</span>
        </p>
      </div>
    </div>
  );
};

export default ForumDiscussionCard;