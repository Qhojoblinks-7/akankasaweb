// src/article/ArticleMetadataAbstract.jsx
import React from 'react';

const ArticleMetadataAbstract = ({ data }) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
        {/* Icon for Metadata & Abstract */}
        <svg className="w-6 h-6 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
          <path d="M10 9a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100 2h2a1 1 0 100-2H9z" />
        </svg>
        Metadata & Abstract
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-6">
        {/* Authors */}
        <div>
          <p className="font-semibold text-gray-800 mb-1">Authors:</p>
          <p>{data.authors}</p>
        </div>
        {/* Publication */}
        <div>
          <p className="font-semibold text-gray-800 mb-1">Publication:</p>
          <p>{data.publication}</p>
        </div>
        {/* Methodology */}
        <div>
          <p className="font-semibold text-gray-800 mb-1">Methodology:</p>
          <p>{data.methodology}</p>
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-6">
        <p className="font-semibold text-gray-800 mb-2">Keywords:</p>
        <div className="flex flex-wrap gap-2">
          {data.keywordsDetailed && data.keywordsDetailed.map((keyword, index) => (
            <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Abstract */}
      <div>
        <p className="font-semibold text-gray-800 mb-2">Abstract:</p>
        <p className="text-gray-700 leading-relaxed">
          {data.abstract}
        </p>
      </div>
    </section>
  );
};

export default ArticleMetadataAbstract;