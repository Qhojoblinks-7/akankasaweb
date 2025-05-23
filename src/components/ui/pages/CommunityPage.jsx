// src/community/CommunityPage.js
import React from 'react';

// Import all the community-specific components
import CommunityHeroSection from '../community/CommunityHeroSection';
import FeaturedDiscussions from '../community/FeaturedDiscussions';
import DiscussionBoards from '../community/DiscussionBoards';
import EventsCalendarSection from '../community/EventsCalendarSection';
import CreateProfileSection from '../community/CreateProfileSection';
import ConnectAndShareSection from '../community/ConnectAndShareSection';

function CommunityPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <CommunityHeroSection />
      <FeaturedDiscussions />
      <DiscussionBoards />
      <EventsCalendarSection />
      <CreateProfileSection />
      <ConnectAndShareSection />
    </div>
  );
}

export default CommunityPage;