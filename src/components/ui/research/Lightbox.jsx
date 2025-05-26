// src/components/Lightbox.jsx
import React from 'react';

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image/content
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-gray-800 hover:bg-gray-900 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        {image.caption && (
          <div className="p-4 bg-gray-900 text-white text-sm text-center">
            {image.caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;