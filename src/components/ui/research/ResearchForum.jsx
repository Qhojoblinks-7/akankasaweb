// src/research/ResearchForum.jsx
import React, { useState, useEffect } from 'react';
import ForumDiscussionCard from './ForumDiscussionCard';
import { getLatestForumDiscussions } from '../../data/forumPostsData';

// Placeholder avatars (adjust paths or replace with actual imports)
import avatar1 from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';
// Make sure you have other avatar imports if needed by your data, e.g.:
// import avatar2 from '../../../assets/path/to/avatar2.jpg';
// import avatar3 from '../../../assets/path/to/avatar3.jpg';


// ResearchForum now accepts three handlers as props from ResearchPage
const ResearchForum = ({ onOpenForumDetailModal, onOpenNewTopicModal, onOpenAllDiscussionsModal }) => {
  const [latestDiscussions, setLatestDiscussions] = useState([]);

  useEffect(() => {
    // Fetch latest discussions when the component mounts
    setLatestDiscussions(getLatestForumDiscussions(3)); // Get top 3 latest
  }, []);

  // This handler will now call the prop function passed from ResearchPage
  const handleCardClick = (discussionId) => {
    console.log("handleCardClick called with ID:", discussionId);
    onOpenForumDetailModal(discussionId); // Calls the handler from ResearchPage
  };

  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Collaborative Research Forum
        </h2>
        <button
          onClick={onOpenNewTopicModal} // Calls the handler from ResearchPage
          className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm hover:bg-orange-600 transition duration-300 flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
          </svg>
          Start New Topic
        </button>
      </div>

      {/* Forum Discussions Card List */}
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v2H5V6zm0 4h10v2H5v-2zm0 4h7v2H5v-2z"></path>
          </svg>
          Latest Discussions in Research Forum
        </h3>
        <div className="divide-y divide-gray-200">
          {/* Map through the latest discussions and render a ForumDiscussionCard for each */}
          {latestDiscussions.map((discussion) => (
            <ForumDiscussionCard
              key={discussion.id} // Unique key for React list rendering
              title={discussion.title}
              author={discussion.posts[0]?.author || 'Unknown'} // Display author of the first post
              timeAgo={discussion.posts[0]?.timestamp || 'N/A'} // Display timestamp of the first post
              avatarSrc={discussion.posts[0]?.avatarSrc || avatar1} // Display avatar of the first post
              // No 'link' prop here, we use onClick for modal
              onClick={() => handleCardClick(discussion.id)} // This will open the detail modal via ResearchPage
            />
          ))}
        </div>
        <div className="text-right mt-6">
          {/* Change <a> to <button> and use the prop to open the AllDiscussionsModal */}
          <button
            onClick={onOpenAllDiscussionsModal} // Calls the handler from ResearchPage
            className="text-orange-600 font-semibold hover:underline focus:outline-none"
          >
            See all discussions
          </button>
        </div>
      </div>

      {/* Modals are no longer rendered here, they are in ResearchPage.jsx */}
    </section>
  );
};

export default ResearchForum;