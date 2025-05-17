import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResourceLibrary({ resources, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-3">Resource Library</h3>
      <div className="mb-3">
        <label htmlFor="resource-category" className="mr-2 text-sm font-semibold">
          Filter by Category:
        </label>
        <select
          id="resource-category"
          className="shadow border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredResources.map((resource) => (
          <li key={resource.id} className="py-2 border-b last:border-b-0">
            <Link to={resource.url} className="text-blue-500 hover:underline">
              {resource.title}
            </Link>
            <p className="text-gray-600 text-sm">{resource.description}</p>
            {resource.downloadUrl && <Link to={resource.downloadUrl} className="text-green-500 hover:underline text-xs">Download</Link>}
          </li>
        ))}
        {filteredResources.length === 0 && <p className="text-gray-500">No resources found in this category.</p>}
      </ul>
    </div>
  );
}

export default ResourceLibrary;

// Example Usage:
// const resourceData = [
//   { id: 'r1', title: 'Akan Proverbs: A Collection', description: 'A compilation of popular Akan proverbs.', category: 'Culture', url: '/resources/proverbs', downloadUrl: '/downloads/akan_proverbs.pdf' },
//   { id: 'r2', title: 'Basic Akan Grammar', description: 'An introductory guide to Akan grammar rules.', category: 'Language Learning', url: '/resources/grammar' },
//   { id: 'r3', title: 'The History of the Ashanti Kingdom', description: 'A detailed account of the Ashanti Kingdom.', category: 'History', url: '/resources/ashanti_history' },
//   // ... more resources
// ];
// const resourceCategories = ['Culture', 'Language Learning', 'History'];
// <ResourceLibrary resources={resourceData} categories={resourceCategories} />