// src/culture/components/CultureNavigation.js
import React from 'react';

function CultureNavigation({ activeTab, onTabClick, sectionRefs }) {
  const tabs = Object.keys(sectionRefs); // Get tabs from the refs passed down

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-20">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex flex-nowrap space-x-6 md:space-x-8 justify-center">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => onTabClick(tab)}
                className={`py-2 px-3 text-lg font-semibold whitespace-nowrap
                  ${activeTab === tab
                    ? 'text-yellow-600 border-b-2 border-yellow-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab.replace(/([A-Z])/g, ' $1').trim()} {/* Adds space before capital letters */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default CultureNavigation;