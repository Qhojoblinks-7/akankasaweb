// src/research/ForumDiscussionCard.jsx
import React from 'react';

const ForumDiscussionCard = ({ title, author, timeAgo, avatarSrc, link }) => {
  return (
    <a href={link} className="flex items-start p-4 hover:bg-gray-50 transition duration-200 rounded-lg -mx-4">
      {avatarSrc && (
        <img
          src={avatarSrc}
          alt={`${author}'s avatar`}
          className="w-10 h-10 rounded-full mr-4 object-cover"
        />
      )}
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800 text-base mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">
          Posted by {author} &bull; {timeAgo}
        </p>
      </div>
    </a>
  );
};

export default ForumDiscussionCard;