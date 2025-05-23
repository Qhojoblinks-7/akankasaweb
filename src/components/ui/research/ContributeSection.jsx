// src/research/ContributeSection.jsx
import React from 'react';

const ContributeSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8 mb-12"> {/* Adjusted margins and padding */}
      <div className="bg-orange-50 rounded-lg shadow-xl p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Contribute to Akan Research
        </h2>
        <p className="text-gray-600 mb-8">
          Have valuable articles, papers, or datasets on Akan language or
          culture? Share your work with the community. All submissions are
          reviewed for quality and accuracy before publication.
        </p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 flex items-center justify-center mx-auto">
          {/* Icon for Submit Your Research */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293z" clipRule="evenodd"></path>
          </svg>
          Submit Your Research
        </button>
      </div>
    </section>
  );
};

export default ContributeSection;