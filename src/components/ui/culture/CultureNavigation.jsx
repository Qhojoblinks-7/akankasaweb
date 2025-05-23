// src/culture/components/CultureNavigation.js
import React from 'react';

function CultureNavigation({ activeTab, onTabClick, sectionRefs }) {
  // Define the order of tabs explicitly to match your design
  const orderedTabs = [
    { id: 'Overview', name: 'Overview' },
    { id: 'AkanHeritage', name: 'Akan Heritage' },
    { id: 'TimeHonoredTraditions', name: 'Time-Honored Traditions' },
    { id: 'EchoesOfThePast', name: 'Echoes of the Past' },
    { id: 'AkanArtistry', name: 'Akan Artistry' },
    { id: 'CulturalRhythmsAndTimeline', name: 'Rhythms of the Soul' },
    { id: 'NavigatingAkanSociety', name: 'Navigating Akan Society' },
    { id: 'TalesOfWisdom', name: 'Tales of Wisdom' },
  ];

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-20">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex flex-nowrap space-x-6 md:space-x-8 justify-center">
          {orderedTabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabClick(tab.id)}
                className={`py-2 px-3 text-lg font-semibold whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'text-yellow-600 border-b-2 border-yellow-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default CultureNavigation;