// src/article/ArticleCitation.jsx
import React, { useState } from 'react';

const ArticleCitation = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(data.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Optionally, provide a fallback for older browsers or if permission is denied
      alert('Failed to copy. Please copy manually.');
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
        {/* Icon for Citation */}
        <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
          <path d="M9 16a1 1 0 100-2h2a1 1 0 100 2H9zm-1-4a1 1 0 100-2h4a1 1 0 100 2H8z" />
        </svg>
        Citation
      </h2>

      <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
        <p className="text-gray-700 leading-relaxed break-words"> {/* break-words for long DOIs/citations */}
          {data.full}
          {data.doiLink && (
            <a href={data.doiLink} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline ml-1">
              DOI
            </a>
          )}
        </p>
      </div>

      <button
        onClick={handleCopyCitation}
        className={`px-5 py-2 rounded-md text-sm font-semibold transition duration-300 flex items-center ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        {copied ? (
          <>
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6z" />
            </svg>
            Copy Citation
          </>
        )}
      </button>
    </section>
  );
};

export default ArticleCitation;