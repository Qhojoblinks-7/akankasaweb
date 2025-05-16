import React, { useState } from 'react';
import ForumHeader from '../ui/forum/ForumHeader';
import Breadcrumb from '../ui/forum/Breadcrumb';
import { Link } from 'react-router-dom';

const initialResources = [
  { id: '1', title: 'Akan Language Basics', description: 'Introduction to basic Akan phrases and grammar.', level: 'Beginner' },
  { id: '2', title: 'Ghanaian History Timeline', description: 'A timeline of significant events in Ghanaian history.', level: 'General' },
  { id: '3', title: 'Fante Proverbs and Meanings', description: 'A collection of Fante proverbs with their explanations.', level: 'Intermediate' },
  { id: '4', title: 'Ghanaian Music Genres', description: 'An overview of various music genres in Ghana.', level: 'General' },
  { id: '5', title: 'Twi Verb Conjugation', description: 'A guide to conjugating verbs in Twi.', level: 'Advanced' },
  { id: '6', title: 'Traditional Ghanaian Recipes', description: 'A collection of recipes for popular Ghanaian dishes.', level: 'General' },
  // Add more resources here
];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(initialResources);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = initialResources.filter(resource =>
      resource.title.toLowerCase().includes(term) ||
      resource.description.toLowerCase().includes(term) ||
      resource.level.toLowerCase().includes(term)
    );
    setFilteredResources(results);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <ForumHeader searchTerm={searchTerm} onSearchChange={handleSearchChange} /> {/* Pass props to ForumHeader */}
      <div className="container mx-auto mt-16 p-4 sm:p-6 md:p-8">
        <div className="mb-4">
          <Breadcrumb segments={[{ title: 'Forum', link: '/forum' }, { title: 'Resources' }]} />
        </div>
        {/* The search input is now in the ForumHeader */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Available Resources</h2>
          {filteredResources.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources.map(resource => (
                <li key={resource.id} className="bg-white rounded-md shadow-md p-4">
                  <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">Level: {resource.level}</span>
                    <Link to={`/resources/${resource.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs focus:outline-none focus:shadow-outline">
                      View Details
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No resources found matching your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;