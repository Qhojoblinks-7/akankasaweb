// src/components/AkanFolklore.jsx
import React from 'react';

const AkanFolklore = ({ sectionRef, id }) => { // Destructure props for ref and id
  return (
    <section
      ref={sectionRef} // Apply the ref
      id={id}         // Apply the id
      // These are the crucial classes for full-width background
      // `w-full` makes it take 100% width
      // `px-4 md:px-8` adds horizontal padding to the section itself
      // `max-w-6xl` and `mx-auto` are REMOVED from the section
      className="bg-orange-50 w-full py-12 md:py-20 mt-8 rounded-lg shadow-xl mb-12 px-4 md:px-8"
    >
      {/* The inner div uses `container mx-auto` to constrain and center its content,
          making sure the text and buttons don't stretch too wide. */}
      <div className="container mx-auto text-center">
        {/* Content Area */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          Tales of Wisdom: Akan Folklore
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Stories shape the Akan worldview. From the cunning of Ananse the spider to wise proverbs, oral traditions teach, entertain, and preserve cultural values for generations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6"> {/* Added mb-6 for spacing */}
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-md hover:bg-orange-600 transition duration-300">
            Ananse Tales
          </button>
          <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
            Proverbs
          </button>
          <button className="bg-transparent border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-md hover:bg-gray-100 transition duration-300">
            Storytelling
          </button>
        </div>

        {/* New "Proverb of the Day" and "Listen to Story" Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Proverb of the Day Button */}
          <button className="bg-orange-600 text-white px-5 py-2 rounded-md text-md hover:bg-orange-700 transition duration-300 flex items-center">
            {/* Icon for Proverb of the Day */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
            </svg>
            Proverb of the Day
          </button>
          {/* Listen to Story Button */}
          <button className="bg-yellow-500 text-white px-5 py-2 rounded-md text-md hover:bg-yellow-600 transition duration-300 flex items-center">
            {/* Icon for Listen to Story (using same as Listen to Drums) */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3a1 1 0 00-1.447-.894L1 8.35v.003L1 17a1 1 0 00.894 1 1 1 0 00.553-.106l16-8a1 1 0 000-1.788L18 3zM4 11.5L9 14l-5 2.5V11.5z" />
            </svg>
            Listen to Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default AkanFolklore;