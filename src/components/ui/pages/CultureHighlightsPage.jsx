import React, { useState, useEffect } from 'react';
import CultureSectionNavigation from '../culture/CultureSectionNavigation';
import CultureArticle from '../culture/CultureArticle';
import ImageGallery from '../culture/ImageGallery';
import Timeline from '../culture/Timeline';
import InteractiveMap from '../culture/InteractiveMap';
import UserContentUpload from '../culture/UserContentUpload';

// Mock data - replace with your actual data fetching
const cultureSectionsData = [
  { id: 'traditions', label: 'Traditions', path: '/culture/traditions' },
  { id: 'history', label: 'History', path: '/culture/history' },
  { id: 'arts', label: 'Arts', path: '/culture/arts' },
  // Add more sections as needed
];

// Mock data for the currently viewed content - replace with dynamic data fetching based on the route
const mockArticleData = {
  title: 'Akan Matrilineal System',
  image: '/images/akan_family.jpg', // Replace with actual image path
  content: [
    'The Akan people are well known for their matrilineal system of inheritance...',
    'Under this system, lineage and inheritance are traced through the female line...',
    'This has significant implications for family structure, roles, and responsibilities within Akan society.',
    'Understanding the matrilineal system is crucial to grasping many aspects of Akan culture and social organization.',
  ],
  sources: ['J.S. Pobee, Akan Society', 'Kwame Arhin, West African Chiefs'],
};

const mockGalleryImages = [
  { url: '/images/akan_art1.jpg', alt: 'Akan Gold Stool', caption: 'Akan Gold Stool - symbol of authority.' }, // Replace with actual image paths
  { url: '/images/akan_dance.jpg', alt: 'Akan Traditional Dance', caption: 'A vibrant Akan traditional dance performance.' },
  // Add more images
];

const mockTimelineEvents = [
  { year: 'c. 13th Century', title: 'Emergence of Early Akan States', description: 'Early Akan groups begin to form states in the forest region.' },
  { year: '1701', title: 'Ashanti Confederacy Formed', description: 'The Golden Stool unites the Ashanti states into a powerful confederacy.' },
  // Add more events
];

function CultureHighlightsPage() {
  const handleUserContentSubmit = (formData) => {
    console.log('User submitted cultural content:', formData);
    // Implement your logic to handle the submitted data (e.g., send to backend for moderation)
    alert('Your contribution has been submitted for review.');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Akan Culture Highlights</h1>

      <CultureSectionNavigation sections={cultureSectionsData} />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Highlight</h2>
        <CultureArticle article={mockArticleData} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
        <ImageGallery images={mockGalleryImages} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Historical Timeline</h2>
        <Timeline events={mockTimelineEvents} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Akan Regions</h2>
        <InteractiveMap />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Share Your Knowledge</h2>
        <p className="text-gray-700 mb-2">Contribute to our cultural archive by sharing your insights, stories, and media.</p>
        <UserContentUpload onSubmit={handleUserContentSubmit} />
      </div>
    </div>
  );
}

export default CultureHighlightsPage;