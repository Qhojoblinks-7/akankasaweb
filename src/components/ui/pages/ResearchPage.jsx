import React, { useState, useEffect, useCallback } from 'react';
import ResourceLibrary from '../research/ResourceLibrary';
import ResearchModule from '../research/ResearchModule';
import ResearchForum from '../research/ResearchForum';
import LinguisticTool from '../research/LinguisticTool';
import DownloadButton from '../research/DownloadButton';
import ResourceFilter from '../research/ResourceFilter';

// Mock data - replace with your actual data fetching
const researchResources = [
  { id: 'rr1', title: 'Akan Folktales: A Comparative Study', description: 'Analysis of Akan folktales across different regions.', category: 'Folklore', level: 'Advanced', url: '/research/folktales', downloadUrl: '/downloads/akan_folktales.pdf' },
  { id: 'rr2', title: 'Akan Tone and Intonation', description: 'An investigation into the tonal aspects of the Akan language.', category: 'Linguistics', level: 'Intermediate', url: '/research/akan_tone' },
  { id: 'rr3', title: 'The Role of Akan Proverbs in Conflict Resolution', description: 'Exploration of how proverbs are used in resolving disputes.', category: 'Culture', level: 'Beginner', url: '/research/proverbs' },
  // ... more resources
];

const resourceCategories = ['All', 'Linguistics', 'Culture', 'History', 'Folklore'];
const resourceLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const researchModules = [
  { id: 'rm1', title: 'Akan Naming Ceremonies', description: 'An interactive module on the significance and rituals of Akan naming ceremonies.', content: '<p>This module will include videos, images, and quizzes...</p>', links: [] },
  { id: 'rm2', title: 'The Golden Stool of Asante', description: 'Explore the history and cultural importance of the Golden Stool.', content: '<p>Interactive timeline and 3D model of the stool...</p>', links: [] },
  // ... more modules
];

const forumPosts = [
  { id: 'fp1', title: 'Research on Akan Oral Literature', author: 'Ama Serwaa', date: '2024-03-10', excerpt: 'Discussing current research methodologies in the study of Akan oral literature...' },
  { id: 'fp2', title: 'Challenges in Transcribing Akan Dialects', author: 'Kwame Bonsu', date: '2024-03-15', excerpt: 'Sharing experiences and best practices for transcribing various Akan dialects...' },
  // ... more posts
];

function ResearchPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    level: 'All',
  });

  const handleFilterChange = useCallback((filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  }, []);

  const filteredResources = researchResources.filter(resource => {
    return (filters.category === 'All' || resource.category === filters.category) &&
           (filters.level === 'All' || resource.level === filters.level);
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Akan Research Features</h1>

      <ResourceFilter
        filters={{ Category: resourceCategories, Level: resourceLevels }}
        onFilterChange={handleFilterChange}
      />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resource Library</h2>
        <ResourceLibrary resources={filteredResources} categories={resourceCategories.slice(1)} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchModules.map(module => (
            <ResearchModule key={module.id} module={module} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research Forum</h2>
        <ResearchForum posts={forumPosts} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Linguistic Tools</h2>
        <LinguisticTool />
      </div>

      {/* Example Download Button Usage */}
      <DownloadButton url="/downloads/research_paper.pdf" filename="research_paper.pdf" label="Download Research Paper" />
    </div>
  );
}

export default ResearchPage;