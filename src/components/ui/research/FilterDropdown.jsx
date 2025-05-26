// src/research/components/FilterDropdown.jsx
import React from 'react';

const FilterDropdown = ({ options, value, onChange }) => {
  return (
    // Added w-full for mobile (takes full width when stacked)
    // and md:w-auto for desktop (sizes naturally)
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white w-full md:w-auto"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;