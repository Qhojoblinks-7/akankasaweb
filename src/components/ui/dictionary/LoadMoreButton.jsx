// src/components/LoadMoreButton.js
import React from 'react';

function LoadMoreButton({ onClick }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Load More Words
      </button>
    </div>
  );
}

export default LoadMoreButton;