// src/components/ResearchModule.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import ImageGallery from './ImageGallery';

function ResearchModule({ module }) {
  if (!module) {
    return <p className="text-gray-500">No research module available.</p>;
  }

  const renderModuleContent = () => {
    switch (module.type) {
      case 'Interactive Module':
      case 'Animated Diagrams':
        // ... (existing code for interactive modules) ...
        return (
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-lg text-gray-800">Engage with the Module:</h4>
            {module.actualContentLink && (
              <>
                <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg mb-4">
                  <iframe
                    src={module.actualContentLink}
                    title={module.title}
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ minHeight: '400px' }}
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600">
                  Having trouble viewing? {' '}
                  <a
                    href={module.actualContentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    Launch in new tab
                  </a>
                </p>
              </>
            )}
            {module.imageUrl && (
              <img src={module.imageUrl} alt={`${module.title} preview`} className="w-full h-auto object-cover rounded-md mt-4 shadow" />
            )}
          </div>
        );

      case 'Multimedia':
        if (module.iconType === 'video' && module.videoUrl) {
          return (
            <VideoPlayer
              videoUrl={module.videoUrl}
              title={module.title}
              relatedVideos={module.relatedVideos}
            />
          );
        } else if (module.iconType === 'image' && module.galleryImages && module.galleryImages.length > 0) {
          return (
            <ImageGallery images={module.galleryImages} />
          );
        }
        return (
            <p className="text-gray-500 mt-4">Multimedia content not available or not properly formatted.</p>
        );

      case 'PDF':
      case 'Journal':
      case 'Thesis':
        return (
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-lg text-gray-800">Access Document:</h4>
            {module.actualContentLink ? (
              <a
                href={module.actualContentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Download/View {module.type}
                <svg className="ml-2 -mr-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            ) : (
              <p className="text-red-500 text-sm">Content link not available.</p>
            )}
          </div>
        );

      case 'Report': // NEW: Handle text-heavy reports/articles
      case 'Article': // If you use 'Article' type as well
        if (module.fullTextContent) {
          return (
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-lg text-gray-800">Full Report:</h4>
              {/* Apply Tailwind Typography classes for rich text content */}
              <div
                className="prose prose-lg sm:prose-xl max-w-none text-gray-700" // Increased prose size for main article
                dangerouslySetInnerHTML={{ __html: module.fullTextContent }}
              />
              {module.actualContentLink && module.actualContentLink.endsWith('.pdf') && (
                <div className="mt-6">
                  <a
                    href={module.actualContentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Download Full PDF Version
                    <svg className="ml-2 -mr-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              )}
            </div>
          );
        }
        return <p className="text-gray-500 mt-4">Full text content not available for this resource.</p>;

      default:
        // Fallback for generic content or if module.content is explicitly provided
        if (module.content) {
          return (
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-lg text-gray-800">Content:</h4>
              <div
                className="prose prose-sm sm:prose-base max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: module.content }}
              />
            </div>
          );
        }
        return <p className="text-gray-500 mt-4">No direct content embed available for this module type. Please check related links.</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{module.title}</h2>
      <p className="text-gray-700 text-base mb-4">{module.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
        {module.author && (
          <p><span className="font-semibold">Author:</span> {module.author}</p>
        )}
        {module.year && (
          <p><span className="font-semibold">Year:</span> {module.year}</p>
        )}
        {module.type && (
          <p><span className="font-semibold">Type:</span> {module.type}</p>
        )}
        {module.category && (
          <p><span className="font-semibold">Category:</span> {module.category}</p>
        )}
      </div>

      {/* Render the specific content based on type */}
      {renderModuleContent()}

      {/* Related Links Section (General, not specific to content type) */}
      {module.links && module.links.length > 0 && (
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h4 className="font-semibold mb-3 text-lg text-gray-800">Related Resources & Links:</h4>
          <ul className="space-y-2">
            {module.links.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="text-orange-600 hover:text-orange-800 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResearchModule;