// src/research/components/PopularTags.jsx
import React from 'react';

const PopularTags = ({ tags }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mt-4">
      <span className="font-semibold mr-2">Popular Tags:</span>
      {tags.map((tag, index) => (
        <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default PopularTags;