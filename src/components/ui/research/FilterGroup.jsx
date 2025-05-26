// src/research/components/FilterGroup.jsx
import React from 'react';
import FilterDropdown from './FilterDropdown';

const FilterGroup = ({ filters, onFilterChange }) => {
  return (
    // Changed to flex-col on mobile, then md:flex-row md:flex-wrap for desktop
    // w-full makes it take full width on mobile before md breakpoint
    <div className="flex flex-col gap-3 w-full md:flex-row md:flex-wrap md:justify-start">
      {filters.map((filter) => (
        <FilterDropdown
          key={filter.name}
          options={filter.options}
          value={filter.value}
          onChange={(e) => onFilterChange(filter.name, e.target.value)}
        />
      ))}
    </div>
  );
};

export default FilterGroup;