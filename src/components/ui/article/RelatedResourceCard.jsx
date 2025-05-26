// src/article/RelatedResourceCard.jsx
import React from 'react';

const RelatedResourceCard = ({ title, description, author, iconType, link }) => {
  let iconElement; // Renamed to iconElement to avoid confusion with string path
  let headerBgClass = '';
  let headerTextColorClass = '';
  let iconColorClass = '';

  // Default icon and colors in case iconType doesn't match
  // You can choose a generic icon or no icon as a default
  iconElement = (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 1a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd"></path>
    </svg>
  ); // Generic icon (e.g., info circle)
  headerBgClass = 'bg-gray-100'; // Default gray for unknown types
  headerTextColorClass = 'text-gray-700';
  iconColorClass = 'text-gray-500';

  // Determine icon and colors based on iconType
  if (iconType === 'document') {
    iconElement = (
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm6 0H6v12h9V7.414L10.586 4zM10 12a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-3-1a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
      </svg>
    );
    headerBgClass = 'bg-blue-100'; // Blue for document-like resources
    headerTextColorClass = 'text-blue-700';
    iconColorClass = 'text-blue-500';
  } else if (iconType === 'culture') {
    iconElement = (
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ); // Placeholder for a culture/tradition icon
    headerBgClass = 'bg-yellow-100'; // Yellow for culture-related
    headerTextColorClass = 'text-yellow-700';
    iconColorClass = 'text-yellow-500';
  } else if (iconType === 'dictionary') {
    iconElement = (
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0117 8.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 4a1 1 0 00-2 0v1a1 1 0 102 0V9zm-1 3a1 1 0 100 2h2a1 1 0 100-2H6zm4-1a1 1 0 00-2 0v1a1 1 0 102 0V9z" clipRule="evenodd" />
      </svg>
    ); // Placeholder for dictionary icon
    headerBgClass = 'bg-orange-100'; // Orange for dictionary/linguistic
    headerTextColorClass = 'text-orange-700';
    iconColorClass = 'text-orange-500';
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className={`px-4 py-3 flex items-center ${headerBgClass}`}>
        {/* Pass the new iconElement variable */}
        {React.cloneElement(iconElement, { className: `${iconElement.props.className} ${iconColorClass}` })}
        <h4 className={`font-semibold text-base ${headerTextColorClass}`}>{title}</h4>
      </div>
      <div className="p-4 flex-grow">
        {author && <p className="text-gray-500 text-sm mb-1">By {author}</p>}
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-200">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold text-sm hover:underline flex items-center">
          View Resource
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RelatedResourceCard;