import React from 'react';

function ResourceFilter({ filters, onFilterChange }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-4">
      <h4 className="font-semibold mb-2">Filter Resources</h4>
      {Object.entries(filters).map(([filterName, options]) => (
        <div key={filterName} className="mb-3">
          <label htmlFor={`filter-${filterName}`} className="block text-gray-700 text-sm font-bold mb-1 capitalize">
            {filterName}:
          </label>
          <select
            id={`filter-${filterName}`}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            onChange={(e) => onFilterChange(filterName, e.target.value)}
          >
            <option value="">All</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default ResourceFilter;

// Example Usage:
// const resourceFiltersData = {
//   'Resource Type': ['Book', 'Article', 'Audio', 'Video'],
//   'Topic': ['Grammar', 'History', 'Culture', 'Literature'],
//   'Level': ['Beginner', 'Intermediate', 'Advanced'],
// };
// const handleFilter = (filterName, value) => {
//   console.log(`Filtering by ${filterName}: ${value}`);
//   // Implement your filtering logic here
// };
// <ResourceFilter filters={resourceFiltersData} onFilterChange={handleFilter} />