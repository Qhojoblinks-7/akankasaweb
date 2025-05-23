// src/components/AkanSociety.jsx
import React from 'react';
import societyImage from '../../../assets/hero.jpg'; // Placeholder for your image


const AkanSociety = () => { // Removed sectionRef and id as it's not a direct scroll target in your current CulturePage setup
  return (
    <section className="bg-orange-50 py-12 md:py-20 mt-8 rounded-lg shadow-xl mx-auto max-w-6xl"> {/* Changed background and shadow */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Image Area */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 pr-0 md:pr-8">
          <img
            src={societyImage} // Placeholder image
            alt="Akan Society"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: '350px' }} // Adjust height as needed
          />
        </div>

        {/* Right Content Area (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left pl-0 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            Navigating Akan Society
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Social harmony is at the heart of Akan life. Proper greetings, respect toward elders, and communal living shape daily interactions. Understanding etiquette opens the door to authentic relationships.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"> {/* Added mb-6 for spacing */}
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-md hover:bg-orange-600 transition duration-300">
              Greetings
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Respect for Elders
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Family Structures
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Communal Living
            </button>
          </div>

          {/* New "Etiquette Quiz" Button */}
          <div className="flex flex-wrap justify-center md:justify-start">
            <button className="bg-orange-600 text-white px-5 py-2 rounded-md text-md hover:bg-orange-700 transition duration-300 flex items-center">
              {/* Icon for Etiquette Quiz */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              Etiquette Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkanSociety;