// src/research/ResourceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// This component takes props for title, author, year, description, type, link, category.
// videoUrl is not rendered here, but passed along to the detail page via the link.
const ResourceCard = ({ title, author, year, description, link, type, category }) => { // Removed videoUrl from direct rendering props
  let iconElement;
  let borderColorClass = '';
  let headerBgClass = '';
  let headerTextColorClass = '';

  // --- Determine Icon based on type ---
  // Using a cleaner switch statement for icon determination
  switch (type) {
    case 'PDF':
      iconElement = (
        <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm6 0H6v12h9V7.414L10.586 4zM10 12a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-3-1a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
      );
      break;
    case 'Multimedia': // This could include video, image archives, etc.
      iconElement = (
        <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm6.5 4.5l4-2.5v5l-4-2.5z"></path>
        </svg>
      );
      break;
    case 'Journal':
      iconElement = (
        <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0117 8.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 4a1 1 0 00-2 0v1a1 1 0 102 0V9zm-1 3a1 1 0 100 2h2a1 1 0 100-2H6zm4-1a1 1 0 00-2 0v1a1 1 0 102 0V9z" clipRule="evenodd" />
        </svg>
      );
      break;
    case 'Thesis':
      iconElement = (
        <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4.879V10H4.879a2 2 0 01-1.414-3.414L6.172 3.586A2 2 0 017.586 3H9zM11 4.879V10h5.121a2 2 0 001.414-3.414L13.828 3.586A2 2 0 0012.414 3H11zM10 12a1 1 0 100 2h2a1 1 0 100-2H10zm-3 0a1 1 0 100 2h2a1 1 0 100-2H7zm6 0a1 1 0 100 2h2a1 1 0 100-2h-2z" />
        </svg>
      );
      break;
    case 'Animated Diagrams':
    case 'Interactive Module': // Treat this type similar to animated diagrams for icon
      iconElement = (
        <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 1a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd"></path>
        </svg>
      );
      break;
    default:
      // Default icon for uncategorized types
      iconElement = (
        <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
        </svg>
      );
  }


  // --- Determine border and header background colors based on category ---
  if (category === 'Beginner') {
    borderColorClass = 'border-l-orange-500';
    headerBgClass = 'bg-orange-100';
    headerTextColorClass = 'text-orange-700';
  } else if (category === 'Intermediate') {
    borderColorClass = 'border-l-yellow-500';
    headerBgClass = 'bg-yellow-100';
    headerTextColorClass = 'text-yellow-700';
  } else if (category === 'Advanced / Academic') { // Match the category name exactly from resourcesData.js
    borderColorClass = 'border-l-blue-500';
    headerBgClass = 'bg-blue-100';
    headerTextColorClass = 'text-blue-700';
  } else if (category === 'Interactive Cultural Modules') { // Specific styling for this section if desired
    borderColorClass = 'border-l-green-500';
    headerBgClass = 'bg-green-100';
    headerTextColorClass = 'text-green-700';
  } else {
    // Default for categories not explicitly handled
    borderColorClass = 'border-l-gray-300';
    headerBgClass = 'bg-gray-100';
    headerTextColorClass = 'text-gray-700';
  }

  // Content that will be wrapped by either Link or a tag
  const CardContent = (
    <>
      <div className={`px-4 py-3 flex items-center ${headerBgClass}`}>
        {iconElement}
        <h4 className={`font-semibold text-sm ${headerTextColorClass}`}>{type}</h4>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
        {author && <p className="text-gray-500 text-sm mb-1">By {author} &bull; {year}</p>}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-200">
        <span className="text-orange-600 font-semibold text-sm flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
      </div>
    </>
  );

  // Determine if the link is external or internal
  const isExternalLink = link && (link.startsWith('http://') || link.startsWith('https://'));

  if (link) { // Only render a clickable card if a link exists
    if (isExternalLink) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block bg-white rounded-lg shadow-md border-l-4 ${borderColorClass} overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-200`}
        >
          {CardContent}
        </a>
      );
    } else {
      return (
        <Link
          to={link}
          className={`block bg-white rounded-lg shadow-md border-l-4 ${borderColorClass} overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-200`}
        >
          {CardContent}
        </Link>
      );
    }
  } else {
    // If no link is provided, render as a non-clickable div
    return (
      <div className={`bg-white rounded-lg shadow-md border-l-4 ${borderColorClass} overflow-hidden h-full flex flex-col`}>
        {CardContent}
      </div>
    );
  }
};

export default ResourceCard;