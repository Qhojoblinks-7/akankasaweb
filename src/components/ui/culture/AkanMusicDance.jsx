
// src/components/AkanMusicDance.jsx
import React from 'react';
import musicDanceMainImage from '../../../assets/hero.jpg'; // New main image
import musicDanceDetailImage from '../../../assets/hero.jpg'; // New detail image

const AkanMusicDance = () => { // Removed sectionRef and id as it's not a direct scroll target in your current CulturePage setup
  return (
    <section className="bg-orange-50 py-12 md:py-20 mt-8 rounded-lg shadow-xl mx-auto max-w-6xl"> {/* Changed background and shadow */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Image Area (Two images stacked) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0 pr-0 md:pr-8 space-y-4"> {/* Added space-y-4 */}
          <img
            src={musicDanceMainImage} // First image (main scene)
            alt="Akan Music and Dance"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: '250px', maxWidth: '300px' }} // Adjust size as needed
          />
          <img
            src={musicDanceDetailImage} // Second image (detail shot)
            alt="Akan Drums Detail"
            className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover" // Adjusted width
            style={{ maxHeight: '100px' }} // Adjust height as needed
          />
        </div>

        {/* Right Content Area (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left pl-0 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            Rhythms of the Soul: Akan Music and Dance
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Drumming, song, and dance are the heartbeat of Akan culture. Experience the powerful Adowa, Kete, and Fontomfrom rhythms. Each step and beat carries stories, emotions, and history.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"> {/* Added mb-6 for spacing */}
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-md hover:bg-orange-600 transition duration-300">
              Adowa Dance
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Kete
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
              Fontomfrom Drums
            </button>
          </div>

          {/* New "Watch Dance" and "Listen to Drums" Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Watch Dance Button */}
            <button className="bg-orange-600 text-white px-5 py-2 rounded-md text-md hover:bg-orange-700 transition duration-300 flex items-center">
              {/* Icon for Watch Dance */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 00-1 1v4a1 1 0 001.521.854l3.52-2A1 1 0 0013 10V8a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              Watch Dance
            </button>
            {/* Listen to Drums Button */}
            <button className="bg-yellow-500 text-white px-5 py-2 rounded-md text-md hover:bg-yellow-600 transition duration-300 flex items-center">
              {/* Icon for Listen to Drums */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3a1 1 0 00-1.447-.894L1 8.35v.003L1 17a1 1 0 00.894 1 1 1 0 00.553-.106l16-8a1 1 0 000-1.788L18 3zM4 11.5L9 14l-5 2.5V11.5z" />
              </svg>
              Listen to Drums
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkanMusicDance;