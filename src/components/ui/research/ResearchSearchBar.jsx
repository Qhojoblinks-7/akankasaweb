// src/research/ResearchSearchBar.jsx
import React, { useState } from 'react';
import SearchBarInput from './SearchBarInput';
import FilterGroup from './FilterGroup';
import PopularTags from './PopularTags';

const ResearchSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'All Types',
    methodology: 'All Methodologies',
    dates: 'All Dates',
    linguistics: 'All Linguistics',
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const filterOptions = [
    { name: 'type', options: ['All Types', 'Documents', 'Videos', 'Interactive Modules'], value: filters.type },
    { name: 'methodology', options: ['All Methodologies', 'Qualitative', 'Quantitative'], value: filters.methodology },
    { name: 'dates', options: ['All Dates', 'Last 30 days', 'Last 6 months', 'Last year'], value: filters.dates },
    { name: 'linguistics', options: ['All Linguistics', 'Phonology', 'Syntax'], value: filters.linguistics },
  ];

  const popularTags = [
    'Akan Dialects', 'Oral Tradition', 'History',
    'Cultural Practices', 'Ethnolinguistics'
  ];

  return (
    <section className="bg-white py-8 rounded-lg shadow-xl mx-auto max-w-6xl mt-8 px-4 md:px-8">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <SearchBarInput
          placeholder="Search resources, keywords, authors..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* FilterGroup will now stack vertically on mobile */}
        <FilterGroup filters={filterOptions} onFilterChange={handleFilterChange} />
      </div>

      {/* Moved PopularTags outside the main flex container for better spacing */}
      {/* Add a bit of top margin if needed, or adjust mb-4 on the flex container */}
      <div className="mt-4"> {/* Added a div for explicit margin control */}
         <PopularTags tags={popularTags} />
      </div>
    </section>
  );
};

export default ResearchSearchBar;