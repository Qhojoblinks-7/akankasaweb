
// src/components/AkanHistory.jsx
import React from 'react';
import historyPortraitImage from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg' // New portrait image
import historyMapImage from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';     // New map image

const AkanHistory = ({ sectionRef, id }) => { // Destructure props for ref and id
  return (
    <section
      ref={sectionRef} // Apply the ref
      id={id}         // Apply the id
      className="bg-orange-50 py-12 md:py-20 mt-8 rounded-lg shadow-xl mx-auto max-w-6xl" // Changed background and shadow
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Image Area (Two images stacked) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0 pr-0 md:pr-8 space-y-4"> {/* Added space-y-4 */}
          <img
            src={historyPortraitImage} // First image (portrait)
            alt="Akan King"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: '250px', maxWidth: '300px' }} // Adjust size as needed for portrait
          />
          <img
            src={historyMapImage} // Second image (map)
            alt="Akan Historical Map"
            className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover" // Adjusted width for smaller image
            style={{ maxHeight: '100px' }} // Adjust height as needed for map
          />
        </div>

        {/* Right Content Area (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left pl-0 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            Echoes of the Past: Akan History
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From the mighty Ashanti Empire to the legacy of gold and formidable kingdoms, Akan history is a testament to resilience and power. Explore ancient cities, storied artifacts, and the long journey of a proud people.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"> {/* Added mb-6 for spacing */}
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-md hover:bg-orange-600 transition duration-300">
              Ashanti Empire
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Migration Stories
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Gold Coast
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Colonial Resistance
            </button>
          </div>

          {/* New "Show Timeline" Button */}
          <div className="flex flex-wrap justify-center md:justify-start">
            <button className="bg-orange-600 text-white px-5 py-2 rounded-md text-md hover:bg-orange-700 transition duration-300 flex items-center">
              {/* Icon for Show Timeline - using a simple SVG for now */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V7z" clipRule="evenodd"></path>
              </svg>
              Show Timeline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkanHistory;