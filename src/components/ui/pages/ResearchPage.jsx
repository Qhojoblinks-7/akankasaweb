// src/pages/ResearchPage.jsx
import React, { useState } from 'react';
import Navbar from '../home/Header';
import Footer from '../home/Footer';

// Import components for each section of the Research page
import ResearchHero from '../research/ResearchHero';
import ResearchSearchBar from '../research/ResearchSearchBar';
import ResourceLibrary from '../research/ResourceLibrary';
import InteractiveModules from '../research/InteractiveModules';
import ResearchForum from '../research/ResearchForum';
import ContributeSection from '../research/ContributeSection';

// Import all modal components
import ForumPostDetailModal from '../forum/ForumPostDetailModal';
import NewTopicModal from '../forum/NewTopicModal'; // Assuming path is src/components/NewTopicModal.jsx
import AllDiscussionsModal from '../forum/AllDiscussionsModal'; // Assuming path is src/forum/AllDiscussionsModal.jsx

// Import data fetching function
import { getForumDiscussionById } from '../../data/forumPostsData';

function ResearchPage() {
  // State for managing ForumPostDetailModal (opens when clicking a specific discussion card)
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  // State for managing NewTopicModal (opens when clicking "Start New Topic")
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);

  // State for managing AllDiscussionsModal (opens when clicking "See all discussions")
  const [showAllDiscussionsModal, setShowAllDiscussionsModal] = useState(false);

  // --- Handlers for ForumPostDetailModal ---
  const handleOpenForumDetailModal = (discussionId) => {
    const discussion = getForumDiscussionById(discussionId);
    setSelectedDiscussion(discussion);
    setShowDetailModal(true);
  };

  const handleCloseForumDetailModal = () => {
    setShowDetailModal(false);
    setSelectedDiscussion(null); // Clear selected discussion when modal closes
  };

  // --- Handlers for NewTopicModal ---
  const handleOpenNewTopicModal = () => {
    setShowNewTopicModal(true);
  };

  const handleCloseNewTopicModal = () => {
    setShowNewTopicModal(false);
  };

  const handleNewTopicSubmit = ({ title, content }) => {
    // In a real application, you would send this data to your backend API
    console.log("New topic submitted:", { title, content });
    alert(`New topic "${title}" submitted! (This is a demo, not saved permanently)`);
    handleCloseNewTopicModal(); // Close the modal after submission (or after successful API call)
    // Optional: You might want to re-fetch forum discussions here to show the new topic
  };

  // --- Handlers for AllDiscussionsModal ---
  const handleOpenAllDiscussionsModal = () => {
    setShowAllDiscussionsModal(true);
  };

  const handleCloseAllDiscussionsModal = () => {
    setShowAllDiscussionsModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar /> {/* Your main header/navigation */}

      <main>
        <ResearchHero />
        <ResearchSearchBar />
        <ResourceLibrary />
        <InteractiveModules />
        {/* Pass down all necessary handlers to ResearchForum */}
        <ResearchForum
          onOpenForumDetailModal={handleOpenForumDetailModal}
          onOpenNewTopicModal={handleOpenNewTopicModal}
          onOpenAllDiscussionsModal={handleOpenAllDiscussionsModal}
        />
        <ContributeSection />
      </main>

      <Footer /> {/* Your site footer */}

      {/* Conditional rendering of ForumPostDetailModal */}
      {showDetailModal && (
        <ForumPostDetailModal
          discussion={selectedDiscussion}
          onClose={handleCloseForumDetailModal}
        />
      )}

      {/* Conditional rendering of NewTopicModal */}
      {showNewTopicModal && (
        <NewTopicModal
          onClose={handleCloseNewTopicModal}
          onSubmit={handleNewTopicSubmit}
        />
      )}

      {/* Conditional rendering of AllDiscussionsModal */}
      {showAllDiscussionsModal && (
        <AllDiscussionsModal
          onClose={handleCloseAllDiscussionsModal}
          // When a discussion is selected in AllDiscussionsModal, close it and open the detail modal
          onSelectDiscussion={handleOpenForumDetailModal}
        />
      )}
    </div>
  );
}

export default ResearchPage;