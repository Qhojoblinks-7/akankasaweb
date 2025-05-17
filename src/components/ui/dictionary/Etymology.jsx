import React from 'react';

function Etymology({ etymology }) {
  if (!etymology) {
    return null;
  }

  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-gray-800 mb-1">Etymology:</h4>
      <p className="text-gray-700">{etymology}</p>
    </div>
  );
}

export default Etymology;