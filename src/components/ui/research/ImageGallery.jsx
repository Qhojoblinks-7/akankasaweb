// src/components/ImageGallery.jsx
import React, { useState } from 'react';
import Lightbox from './Lightbox'; // Import the Lightbox component

const ImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (images.length === 0) {
    return <p className="text-gray-500">No images available for this gallery.</p>;
  }

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Image Gallery</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-cover" // Fixed height for grid consistency
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-xs p-2 truncate">
                {image.caption}
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
            </div>
          </div>
        ))}
      </div>

      <Lightbox image={selectedImage} onClose={closeLightbox} />
    </div>
  );
};

export default ImageGallery;