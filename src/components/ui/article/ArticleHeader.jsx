// src/article/ArticleHeader.jsx
import React from 'react';
import heroImage from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Assuming you'll add a specific image for the article header

const ArticleHeader = ({ data }) => {
  // Placeholder for the decorative image. You'd want to add an actual image.
  // For demonstration, I'm using a placeholder name.
  // Make sure to add this image to your src/assets folder.
  // For example: src/assets/hero_article.png (a small image of books/plant like in the design)
  const decorativeImage = heroImage; // Replace with a more descriptive path/import if needed

  return (
    <section className="bg-white rounded-lg shadow-md p-6 lg:p-8 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
      {/* Left Content Area */}
      <div className="flex-grow">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          RESEARCH ARTICLE
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {data.description}
        </p>

        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-x-4 gap-y-2">
          <div className="flex items-center">
            {/* Author Icon */}
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
            <span className="font-semibold">{data.author}</span>
          </div>
          <div className="flex items-center">
            {/* Publish Date Icon */}
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            Published: {data.publishedDate}
          </div>
          {data.pdfAvailable && (
            <div className="flex items-center">
              {/* PDF Available Icon */}
              <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm6 0H6v12h9V7.414L10.586 4zM10 12a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-3-1a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
              </svg>
              PDF available
            </div>
          )}
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2">
          {data.keywords && data.keywords.map((keyword, index) => (
            <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Right Decorative Image Card */}
      <div className="bg-orange-50 rounded-lg p-4 flex-shrink-0 flex items-center justify-center" style={{ width: '250px', height: '200px' }}> {/* Fixed dimensions for the decorative card */}
        <img
          src={decorativeImage}
          alt="Abstract illustration"
          className="max-w-full h-auto object-contain"
          // Consider adding a slightly smaller max-width/height if the image is too large for the card
          style={{ maxWidth: '180px', maxHeight: '180px' }}
        />
      </div>
    </section>
  );
};

export default ArticleHeader;