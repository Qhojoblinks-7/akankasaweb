// src/components/AkanArtistry.jsx
import React from 'react';
import artistryImage1 from '../../../assets/hero.jpg'; // Placeholder for first image
import artistryImage2 from '../../../assets/hero.jpg'; // Placeholder for second image

const AkanArtistry = () => {
  return (
    <section className="bg-white py-12 md:py-20 mt-8 rounded-lg shadow-md mx-auto max-w-6xl">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Area (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            Akan Artistry: Form and Meaning
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From intricate Kente cloths, symbolic Adinkra stamps, to the detailed gold weights and regal stools, Akan artistry is a language in itself. Each piece tells a story, conveying deep spiritual beliefs, societal values, and historical narratives.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-md hover:bg-orange-600 transition duration-300">
              Kente Cloth
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Adinkra Symbols
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Gold Weights
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Pottery
            </button>
          </div>
        </div>

        {/* Right Image Area (Two images stacked) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end space-y-4">
          <img
            src={artistryImage1} // Placeholder image 1
            alt="Akan Kente Cloth"
            className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover"
            style={{ maxHeight: '170px' }} // Adjust height as needed
          />
          <img
            src={artistryImage2} // Placeholder image 2
            alt="Akan Gold Weights"
            className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover"
            style={{ maxHeight: '170px' }} // Adjust height as needed
          />
        </div>
      </div>
    </section>
  );
};

export default AkanArtistry;