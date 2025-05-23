// src/research/ResearchForum.jsx
import React from 'react';
import ForumDiscussionCard from './ForumDiscussionCard'; // Import the ForumDiscussionCard component

// Import placeholder avatars (replace with actual paths if needed)
import avatar1 from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Assuming you have these in src/assets
import avatar2 from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';
import avatar3 from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';

const ResearchForum = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Collaborative Research Forum
        </h2>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm hover:bg-orange-600 transition duration-300 flex items-center">
          {/* Icon for Start New Topic */}
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
          </svg>
          Start New Topic
        </button>
      </div>

      {/* Forum Discussions Card */}
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          {/* Icon for Latest Discussions */}
          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v2H5V6zm0 4h10v2H5v-2zm0 4h7v2H5v-2z"></path>
          </svg>
          Latest Discussions in Research Forum
        </h3>
        <div className="divide-y divide-gray-200">
          <ForumDiscussionCard
            title="Comparing Akan Dialectal Variations: Field Methods"
            author="Dr. Daniel Tetteh"
            timeAgo="2 days ago"
            avatarSrc={avatar1}
            link="#"
          />
          <ForumDiscussionCard
            title="Ethnographic Approaches to Akan Cultural Practices"
            author="Ama Serwaa"
            timeAgo="1 week ago"
            avatarSrc={avatar2}
            link="#"
          />
          <ForumDiscussionCard
            title="Recent Publications on Akan Syntax (2024)"
            author="Prof. Kwaku Addai"
            timeAgo="5 days ago"
            avatarSrc={avatar3}
            link="#"
          />
        </div>
        <div className="text-right mt-6">
          <a href="#" className="text-orange-600 font-semibold hover:underline">
            See all discussions
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchForum;