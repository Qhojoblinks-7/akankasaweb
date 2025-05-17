import React, { useState, useEffect } from 'react';
import CommunityForum from '../community/CommunityForum';
import UserProfile from '../community/UserProfile';
import EventsCalendar from '../community/EventsCalendar';
import SocialShare from '../community/SocialShare'; // Import the SocialShare component

function CommunityPage() {
  // Mock data - replace with your actual data fetching
  const initialPosts = [
    { id: 'cp1', title: 'Akan Proverbs and their Meanings', author: 'Nana Akua', date: '2024-05-01', content: 'Let\'s discuss some common Akan proverbs and their interpretations...', replies: 5 },
    { id: 'cp2', title: 'The Role of Family in Akan Society', author: 'Kofi Mensah', date: '2024-05-10', content: 'How important is the extended family structure in modern Akan culture?', replies: 12 },
    // ... more posts
  ];

  const currentUserProfile = {
    id: 'u1',
    username: 'AgyeiKwame',
    avatar: '/images/default_avatar.png', // Replace with actual path
    joinDate: '2023-08-15',
    bio: 'Enthusiastic learner of Akan language and culture. Interested in connecting with others!',
    posts: [
      { id: 'up1', title: 'My Journey Learning Twi', url: '/forum/posts/up1' },
      { id: 'up2', title: 'Favorite Akan Traditional Foods', url: '/forum/posts/up2' },
    ],
    // ... more user data
  };

  const communityEvents = [
    { id: 'e1', title: 'Akan Language Exchange Meetup', date: '2025-06-05', location: 'Accra Cultural Center', description: 'Practice speaking Akan with fellow learners.' },
    { id: 'e2', title: 'Workshop: Akan Drumming and Dance', date: '2025-07-12', location: 'University of Ghana, Legon', description: 'Learn traditional Akan drumming techniques and dance steps.' },
    // ... more events
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Akan Community</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Forum Discussions</h2>
          <CommunityForum posts={initialPosts} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <UserProfile user={currentUserProfile} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <EventsCalendar events={communityEvents} />
      </div>

      {/* You might want to add a section for social sharing here */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Connect & Share</h2>
        <SocialShare url={window.location.href} title="Join the Akan Kasa ne Amammere Community!" hashtags={['Akan', 'Culture', 'Language']} />
      </div>
    </div>
  );
}

export default CommunityPage;