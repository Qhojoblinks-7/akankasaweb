// src/research/ResearchSearchBar.jsx
import React from 'react';

const ResearchSearchBar = () => {
  return (
    <section className="bg-white py-8 rounded-lg shadow-xl mx-auto max-w-6xl mt-8 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search resources, keywords, authors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:w-2/3">
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
            <option>All Types</option>
            <option>Documents</option>
            <option>Videos</option>
            <option>Interactive Modules</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
            <option>All Methodologies</option>
            <option>Qualitative</option>
            <option>Quantitative</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
            <option>All Dates</option>
            <option>Last 30 days</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white">
            <option>All Linguistics</option>
            <option>Phonology</option>
            <option>Syntax</option>
          </select>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mt-4">
        <span className="font-semibold mr-2">Popular Tags:</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Akan Dialects</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Oral Tradition</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">History</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Cultural Practices</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Ethnolinguistics</span>
      </div>
    </section>
  );
};

export default ResearchSearchBar;