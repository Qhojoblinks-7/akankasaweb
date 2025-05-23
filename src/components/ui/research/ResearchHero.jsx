// src/research/ResearchHero.jsx
import React from 'react';

const ResearchHero = () => {
  return (
    <section className="bg-white py-16 md:py-24 text-center px-4 md:px-8"> {/* Full width background */}
      <div className="container mx-auto max-w-4xl"> {/* Content constrained and centered */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Akan Research Hub: <span className="text-orange-600">Explore, Collaborate, Discover.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 mx-auto max-w-3xl">
          Dive into a curated library of resources and join a vibrant community
          of researchers and enthusiasts. Explore linguistic, cultural, and
          historical studies of the Akan people, find collaborative opportunities,
          and contribute to advancing Akan scholarship.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 flex items-center justify-center">
            {/* Icon for Browse Resource Library */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm3 8v-1a1 1 0 00-1-1H3v-2h2a1 1 0 001-1V9a1 1 0 00-1-1H3V6h-.5l-.5-.5V4h14v12H4V15a1 1 0 00-1-1h-.5v-2H3a1 1 0 00-1-1h-.5V9a1 1 0 00-1-1H3V6zM10 18a1 1 0 100-2h4a1 1 0 100-2H10zM10 14a1 1 0 100-2h4a1 1 0 100-2H10z"/></svg>
            Browse Resource Library
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center">
            {/* Icon for Join Research Forum */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.233-1.189l-2.417.403a1 1 0 01-1.116-1.116l.403-2.417A8 8 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/></svg>
            Join Research Forum
          </button>
          <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300 flex items-center justify-center">
            {/* Icon for Submit Your Work */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293z" clipRule="evenodd"/></svg>
            Submit Your Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchHero;