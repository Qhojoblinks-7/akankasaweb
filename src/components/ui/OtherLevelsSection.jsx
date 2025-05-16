import React from 'react';
import { Link } from 'react-router-dom';

const OtherLevelsSection = () => {
  const otherLevels = [
    { name: 'Beginner', to: '/learn/beginner' },
    { name: 'Intermediate', to: '/learn/intermediate' },
    { name: 'Advanced', to: '/learn/advanced' },
  ];

  return (
    <div className="mt-8 bg-gray-50 py-8 rounded-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore Other Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherLevels.map((level) => (
            <Link key={level.name} to={level.to} className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-600">{level.name} Level</h3>
              <p className="text-sm text-gray-600">Continue your learning journey in the {level.name} level.</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherLevelsSection;