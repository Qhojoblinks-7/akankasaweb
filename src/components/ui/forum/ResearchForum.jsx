// src/research/ResearchForum.jsx
import React, { useState, useEffect } from 'react';
import ForumDiscussionCard from './ForumDiscussionCard';
import ForumPostDetailModal from '../components/ForumPostDetailModal'; // Corrected path
import NewTopicModal from '../components/NewTopicModal';
import { getLatestForumDiscussions, getForumDiscussionById } from '../data/forumPostsData';

// Placeholder avatars (adjust paths or replace with actual imports)
import avatar1 from '../assets/avatars/avatar-kwamea.jpg';
// ... (other avatar imports) ...

const ResearchForum = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [latestDiscussions, setLatestDiscussions] = useState([]);

  useEffect(() => {
    setLatestDiscussions(getLatestForumDiscussions(3));
  }, []);

  const handleCardClick = (discussionId) => {
    const discussion = getForumDiscussionById(discussionId);
    setSelectedDiscussion(discussion);
    setShowDetailModal(true);
  };

  const handleNewTopicSubmit = ({ title, content }) => {
    console.log("New topic submitted:", { title, content });
    alert(`New topic "${title}" submitted! (This is a demo, not saved permanently)`);
    setShowNewTopicModal(false);
  };

  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Collaborative Research Forum
        </h2>
        <button
          onClick={() => setShowNewTopicModal(true)}
          className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm hover:bg-orange-600 transition duration-300 flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
          </svg>
          Start New Topic
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v2H5V6zm0 4h10v2H5v-2zm0 4h7v2H5v-2z"></path>
          </svg>
          Latest Discussions in Research Forum
        </h3>
        <div className="divide-y divide-gray-200">
          {latestDiscussions.map((discussion) => (
            <ForumDiscussionCard
              key={discussion.id}
              title={discussion.title}
              author={discussion.posts[0]?.author || 'Unknown'}
              timeAgo={discussion.posts[0]?.timestamp || 'N/A'}
              avatarSrc={discussion.posts[0]?.avatarSrc || avatar1}
              // !!! IMPORTANT: Ensure there is NO 'link={discussion.link}' or similar here !!!
              onClick={() => handleCardClick(discussion.id)}
            />
          ))}
        </div>
        <div className="text-right mt-6">
          {/* This 'a href="#"' is fine as it doesn't try to change the URL. */}
          <a href="#" className="text-orange-600 font-semibold hover:underline">
            See all discussions
          </a>
        </div>
      </div>

      {showDetailModal && (
        <ForumPostDetailModal
          discussion={selectedDiscussion}
          onClose={() => setShowDetailModal(false)}
        />
      )}

      {showNewTopicModal && (
        <NewTopicModal
          onClose={() => setShowNewTopicModal(false)}
          onSubmit={handleNewTopicSubmit}
        />
      )}
    </section>
  );
};

export default ResearchForum;