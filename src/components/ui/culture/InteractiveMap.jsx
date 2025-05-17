import React from 'react';
// You'll likely need a library for interactive maps (e.g., Leaflet, react-map-gl)

function InteractiveMap() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-2">Interactive Map of Akan Regions</h3>
      {/* Integrate your interactive map component here */}
      <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
        {/* Placeholder for the interactive map */}
        Interactive Map Component Here
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Click on regions to learn more about local Akan culture and languages.
      </p>
    </div>
  );
}

export default InteractiveMap;