import React from 'react';
import { Link } from 'react-router-dom';

const CommentCard = ({ comment }) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-md">
      <div className="flex items-start mb-2">
        <img
          src={comment.author.profileImageUrl}
          alt={comment.author.username}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <Link
            to={`/user/${comment.author.username}`}
            className="text-blue-500 hover:underline font-semibold"
          >
            {comment.author.username}
          </Link>
          <span className="text-gray-500 ml-2 text-sm">
            {comment.createdAt ? comment.createdAt.toLocaleDateString() : 'Date Unavailable'}
          </span>
        </div>
      </div>
      <p className="text-gray-700">{comment.text}</p>
    </div>
  );
};

export default CommentCard;