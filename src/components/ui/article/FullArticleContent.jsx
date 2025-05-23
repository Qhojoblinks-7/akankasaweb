// src/article/FullArticleContent.jsx
import React from 'react';
import diagramImage from '../../../assets/medium-shot-women-dancing.jpg'; // Assuming you have your diagram image here

const FullArticleContent = ({ data }) => {
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

      <div className="prose max-w-none text-gray-700 leading-relaxed"> {/* 'prose' for basic typography, max-w-none to override default width */}
        {/* Introduction */}
        {data.introduction && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Introduction:</h3>
            <p className="mb-4">{data.introduction}</p>
          </>
        )}

        {/* Background */}
        {data.background && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Background:</h3>
            <p className="mb-4">{data.background}</p>
          </>
        )}

        {/* Methodology */}
        {data.methodology && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Methodology:</h3>
            <p className="mb-4">{data.methodology}</p>
          </>
        )}

        {/* Analysis */}
        {data.analysis && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Analysis:</h3>
            <p className="mb-4">{data.analysis}</p>
          </>
        )}

        {/* Diagram (if available) */}
        {data.diagramSrc && (
          <div className="my-8 text-center">
            <img
              src={diagramImage} // Use the imported image
              alt="Akan Serial Verb Construction Diagram"
              className="mx-auto rounded-lg shadow-md max-w-full h-auto"
              style={{ maxWidth: '500px' }} // Limit diagram width
            />
          </div>
        )}

        {/* Examples */}
        {data.examples && data.examples.length > 0 && (
          <>
            <p className="mt-6 mb-4">The examples below illustrate the different SVC patterns:</p>
            {data.examples.map((example) => (
              <div key={example.id} className="bg-yellow-50 rounded-lg p-4 mb-4 border-l-4 border-yellow-300">
                <p className="font-medium text-gray-800">Example {example.id}: <span className="text-gray-700">{example.text}</span></p>
              </div>
            ))}
          </>
        )}

        {/* Discussion */}
        {data.discussion && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Discussion:</h3>
            <p className="mb-4">{data.discussion}</p>
          </>
        )}

        {/* Conclusion */}
        {data.conclusion && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Conclusion:</h3>
            <p className="mb-4">{data.conclusion}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default FullArticleContent;