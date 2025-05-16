import React from 'react';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ThreadCard({ thread }) {
  const maxCommenterProfiles = 2; // Limit for mobile view

  return (
    <div className="bg-white rounded-md shadow-sm p-3 mb-3 flex flex-col sm:flex-row items-start sm:items-center"> {/* Removed overflow-hidden */}
      {/* Starter Profile */}
      <div className="w-8 h-8 rounded-full overflow-hidden mr-2 mb-2 sm:w-12 sm:h-12 sm:mr-4 sm:mb-0">
        <Link to={`/profile/${thread.starter?.id}`}>
          <img
            src={thread.starter?.profileImageUrl || '/images/default-profile.png'}
            alt={thread.starter?.username}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Thread Topic */}
      <div className="flex-grow min-w-0 ">
        <Link to={`/forum/thread/${thread.id}`} className="text-sm font-semibold hover:underline sm:text-lg">
          <span className="whitespace-normal break-words">{thread.topic}</span> {/* Removed truncate */}
        </Link>
        {thread.excerpt && <p className="text-gray-600 whitespace-normal break-words text-xs pr-5 mt-1 sm:text-sm">{thread.excerpt}</p>}
      </div>

      {/* Commenters' Profiles and Comment Count */}
      <div className="flex items-center ml-2 mt-auto sm:ml-4 sm:mt-0">
        <div className="flex-shrink-0 flex items-center order-2 sm:order-1 mr-2 sm:mr-0">
          <FaComment className="text-gray-500 mr-1 text-xs sm:text-sm" />
          <span className="text-xs text-gray-700 sm:text-sm">{thread.commentCount || 0}</span>
        </div>
        <div className="flex-shrink-0 flex items-center order-1 sm:order-2 ml-[-6px] sm:ml-[-8px]">
          {thread.lastCommenters &&
            thread.lastCommenters
              .slice(0, maxCommenterProfiles)
              .map(commenter => (
                <Link
                  key={commenter?.id}
                  to={`/profile/${commenter?.id}`}
                  className="w-6 h-6 rounded-full overflow-hidden border-2 border-white ml-[-6px] sm:w-8 sm:h-8 sm:ml-[-8px]"
                >
                  <img
                    src={commenter?.profileImageUrl || '/images/default-profile.png'}
                    alt={commenter?.username}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;