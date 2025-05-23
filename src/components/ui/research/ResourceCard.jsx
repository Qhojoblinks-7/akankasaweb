// src/research/ResourceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router

// This component takes props for title, author, year, description, type, and link.
// It also takes an `icon` prop (e.g., a PDF icon, video icon) and a `category` prop
// to determine the border color and header styling.
const ResourceCard = ({ title, author, year, description, link, type, category }) => {
  let iconPath = ''; // Placeholder for icon paths
  let borderColorClass = '';
  let headerBgClass = '';
  let headerTextColorClass = '';

  // Determine icon based on type (you'll need to add actual SVG imports or paths later)
  if (type === 'PDF') {
    iconPath = (
      <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm6 0H6v12h9V7.414L10.586 4zM10 12a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-3-1a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
      </svg>
    );
  } else if (type === 'Multimedia') {
    iconPath = (
      <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" />
      </svg>
    );
  } else if (type === 'Journal') { // Icon for Peer-Reviewed Journals
    iconPath = (
      <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0117 8.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 4a1 1 0 00-2 0v1a1 1 0 102 0V9zm-1 3a1 1 0 100 2h2a1 1 0 100-2H6zm4-1a1 1 0 00-2 0v1a1 1 0 102 0V9z" clipRule="evenodd" />
      </svg>
    );
  } else if (type === 'Thesis') { // Icon for Dissertations
    iconPath = (
      <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4.879V10H4.879a2 2 0 01-1.414-3.414L6.172 3.586A2 2 0 017.586 3H9zM11 4.879V10h5.121a2 2 0 001.414-3.414L13.828 3.586A2 2 0 0012.414 3H11zM10 12a1 1 0 100 2h2a1 1 0 100-2H10zm-3 0a1 1 0 100 2h2a1 1 0 100-2H7zm6 0a1 1 0 100 2h2a1 1 0 100-2h-2z" />
      </svg>
    );
  } else if (type === 'Animated Diagrams') { // Icon for Animated Diagrams
    iconPath = (
      <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.61 6.002 3 10 3s8.268 2.61 9.542 7c-1.274 4.39-5.544 7-9.542 7S1.732 14.39.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    );
  }

  // Determine border and header background colors based on category
  if (category === 'Beginner') {
    borderColorClass = 'border-l-orange-500';
    headerBgClass = 'bg-orange-100';
    headerTextColorClass = 'text-orange-700';
  } else if (category === 'Intermediate') {
    borderColorClass = 'border-l-yellow-500';
    headerBgClass = 'bg-yellow-100';
    headerTextColorClass = 'text-yellow-700';
  } else if (category === 'Advanced') {
    borderColorClass = 'border-l-blue-500'; // Using blue for advanced as seen in image
    headerBgClass = 'bg-blue-100';
    headerTextColorClass = 'text-blue-700';
  }

  return (
    <div className={`bg-white rounded-lg shadow-md border-l-4 ${borderColorClass} overflow-hidden h-full flex flex-col`}>
      <div className={`px-4 py-3 flex items-center ${headerBgClass}`}>
        {iconPath}
        <h4 className={`font-semibold text-sm ${headerTextColorClass}`}>{type}</h4>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
        {author && <p className="text-gray-500 text-sm mb-1">By {author} &bull; {year}</p>}
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-200">
        {/* Changed <a> to <Link> */}
        <Link to={link} className="text-orange-600 font-semibold text-sm hover:underline">
          View/Download
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;