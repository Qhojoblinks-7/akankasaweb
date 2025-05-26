// src/article/FullArticleContent.jsx
import React from 'react';
// No need to import a generic diagram image here.
// We will use the 'data.diagramSrc' provided by the article data.

const FullArticleContent = ({ data }) => {
  // Defensive check for data and fullArticle content.
  // We now also need to check for data.videoUrl to render the video.
  if (!data || (!data.fullArticle && !data.videoUrl)) return null;

  const fullArticle = data.fullArticle || {}; // Ensure fullArticle is an object even if empty

  return (
    <section className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
        {/* Icon for Full Article */}
        <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
          <path d="M10 9a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100 2h2a1 1 0 100-2H9z" />
        </svg>
        Full Article
      </h2>

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        {/* Video Player - Placed at the top of the full content if available */}
        {data.videoUrl && (
          <div className="mb-8 aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={data.videoUrl}
              title={data.title || "Article Video"} 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}

        {/* Introduction */}
        {fullArticle.introduction && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Introduction:</h3>
            <p className="mb-4">{fullArticle.introduction}</p>
          </>
        )}

        {/* Background */}
        {fullArticle.background && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Background:</h3>
            <p className="mb-4">{fullArticle.background}</p>
          </>
        )}

        {/* Methodology */}
        {fullArticle.methodology && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Methodology:</h3>
            <p className="mb-4">{fullArticle.methodology}</p>
          </>
        )}

        {/* Analysis */}
        {fullArticle.analysis && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Analysis:</h3>
            <p className="mb-4">{fullArticle.analysis}</p>
          </>
        )}

        {/* Diagram (if available) */}
        {fullArticle.diagramSrc && (
          <div className="my-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Diagram:</h3>
            <img
              src={fullArticle.diagramSrc} // Use the diagram path from the data prop
              alt="Article Diagram"
              className="mx-auto rounded-lg shadow-md max-w-full h-auto"
              style={{ maxWidth: '500px' }}
            />
          </div>
        )}

        {/* Examples */}
        {fullArticle.examples && fullArticle.examples.length > 0 && (
          <>
            <p className="mt-6 mb-4">The examples below illustrate the different patterns:</p>
            {fullArticle.examples.map((example) => (
              <div key={example.id} className="bg-yellow-50 rounded-lg p-4 mb-4 border-l-4 border-yellow-300">
                <p className="font-medium text-gray-800">Example {example.id}: <span className="text-gray-700">{example.text}</span></p>
              </div>
            ))}
          </>
        )}

        {/* Discussion */}
        {fullArticle.discussion && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Discussion:</h3>
            <p className="mb-4">{fullArticle.discussion}</p>
          </>
        )}

        {/* Conclusion */}
        {fullArticle.conclusion && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Conclusion:</h3>
            <p className="mb-4">{fullArticle.conclusion}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default FullArticleContent;