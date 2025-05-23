// src/culture/components/TimeHonoredTraditionsSection.js
import React from 'react';
import traditionsImage from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Placeholder for your image



const TimeHonoredTraditions = ({ sectionRef, id }) => { // Destructure props for ref and id
  return (
    <section
      ref={sectionRef} // Apply the ref
      id={id}         // Apply the id
      className="bg-white py-12 md:py-20 mt-8 rounded-lg shadow-xl mx-auto max-w-6xl" // Increased shadow to 'shadow-xl'
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Area (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            Time-Honored Traditions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The Akan people uphold countless traditions that mark every stage of life—from intricate naming ceremonies to vibrant festivals and solemn funeral rites of passage. These customs, rich in symbolism, celebrate community, spiritual beliefs, and the enduring legacy of ancestors.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"> {/* Added mb-6 for spacing */}
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-md hover:bg-orange-600 transition duration-300">
              Learning Ceremonies
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Rites of Passage
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Festivals
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Ancestral Worship
            </button>
          </div>

          {/* New Buttons: Mini Quiz and Image Gallery */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Mini Quiz Button */}
            <button className="bg-orange-600 text-white px-5 py-2 rounded-md text-md hover:bg-orange-700 transition duration-300 flex items-center">
              {/* Icon for Mini Quiz - using a simple SVG for now */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              Mini Quiz
            </button>
            {/* Image Gallery Button */}
            <button className="bg-yellow-500 text-white px-5 py-2 rounded-md text-md hover:bg-yellow-600 transition duration-300 flex items-center">
              {/* Icon for Image Gallery - using a simple SVG for now */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15z" clipRule="evenodd"></path>
              </svg>
              Image Gallery
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={traditionsImage} // Placeholder image
            alt="Akan Traditions"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: '350px' }} // Adjust height as needed
          />
        </div>
      </div>
    </section>
  );
};

export default TimeHonoredTraditions;