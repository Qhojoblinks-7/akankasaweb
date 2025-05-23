// src/research/InteractiveModuleCard.jsx
import React from 'react';

// This component takes props for title, description, and the module type
// to determine the border color and header styling.
const InteractiveModuleCard = ({ title, description, type, link }) => {
  let iconPath = ''; // Placeholder for icon paths
  let borderColorClass = '';
  let headerBgClass = '';
  let headerTextColorClass = '';
  let iconColorClass = '';

  // Determine icon and colors based on type
  if (type === 'Phonology') {
    iconPath = (
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    );
    borderColorClass = 'border-l-orange-500';
    headerBgClass = 'bg-orange-100';
    headerTextColorClass = 'text-orange-700';
    iconColorClass = 'text-orange-500';
  } else if (type === 'Practice Simulator') {
    iconPath = (
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11.55C9.64 9.35 6.48 8 3 8c-1.39 0-2.73.25-4 .7L-1 10.7V22h24V10.7l-2-.7c-1.27-.45-2.61-.7-4-.7-3.48 0-6.64 1.35-9 3.55zm-7 7.45H3v-2h2zm4 0H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z" />
      </svg>
    );
    borderColorClass = 'border-l-yellow-500';
    headerBgClass = 'bg-yellow-100';
    headerTextColorClass = 'text-yellow-700';
    iconColorClass = 'text-yellow-500';
  } else if (type === 'Kinship Diagrams') {
    iconPath = (
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    );
    borderColorClass = 'border-l-blue-500'; // Using blue for consistency with Advanced Resources
    headerBgClass = 'bg-blue-100';
    headerTextColorClass = 'text-blue-700';
    iconColorClass = 'text-blue-500';
  }

  return (
    <div className={`bg-white rounded-lg shadow-md border-l-4 ${borderColorClass} overflow-hidden h-full flex flex-col`}>
      <div className={`px-4 py-3 flex items-center ${headerBgClass}`}>
        {React.cloneElement(iconPath, { className: `${iconPath.props.className} ${iconColorClass}` })}
        <h4 className={`font-semibold text-base ${headerTextColorClass}`}>{title}</h4>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-200">
        <a href={link} className="text-orange-600 font-semibold text-sm hover:underline flex items-center">
          View Module
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InteractiveModuleCard;