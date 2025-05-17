import React from 'react';

function DictionarySearchSkeleton() {
  const itemCount = 3; // Control the number of skeleton items

  return (
    <div className="animate-pulse">
      {Array.from({ length: itemCount }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="bg-gray-200 h-12 rounded-md mb-2"></div>
          <div className="bg-gray-200 h-8 rounded-md mb-2"></div>
          <div className="bg-gray-200 h-6 rounded-md mb-4"></div> {/* Increased mb for separation */}
        </React.Fragment>
      ))}
      {/* You can add more varied skeleton elements here if needed */}
    </div>
  );
}

export default DictionarySearchSkeleton;