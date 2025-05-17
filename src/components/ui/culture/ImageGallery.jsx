import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  if (!images || images.length === 0) {
    return <p className="text-gray-500">No images available.</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-2">Image Gallery</h3>
      <div className="relative">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-64 object-cover rounded-md"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-full focus:outline-none"
            >
              &lt;
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-full focus:outline-none"
            >
              &gt;
            </button>
            <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-600">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
        <p className="text-sm text-gray-600 mt-2">{images[currentIndex].caption}</p>
      </div>
      {images.length <= 5 && images.length > 1 && (
        <div className="flex mt-2 space-x-2 overflow-x-auto">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-12 rounded-md overflow-hidden shadow-sm focus:outline-none ${
                currentIndex === index ? 'border-2 border-blue-500' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
      {images.length > 5 && (
        <div className="flex mt-2 space-x-2 overflow-x-auto">
          {images.slice(0, 5).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-12 rounded-md overflow-hidden shadow-sm focus:outline-none ${
                currentIndex === index ? 'border-2 border-blue-500' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
          {images.length > 5 && (
            <div className="flex items-center justify-center w-16 h-12 bg-gray-100 text-gray-500 rounded-md">
              +{images.length - 5}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;

