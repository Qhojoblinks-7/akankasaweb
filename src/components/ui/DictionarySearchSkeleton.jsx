// In components/DictionarySearchSkeleton.js
import React from 'react';

function DictionarySearchSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-12 rounded-md mb-2"></div>
      <div className="bg-gray-200 h-8 rounded-md mb-2"></div>
      <div className="bg-gray-200 h-6 rounded-md mb-2"></div>
      {/* Add more skeleton elements as needed */}
    </div>
  );
}

export default DictionarySearchSkeleton;