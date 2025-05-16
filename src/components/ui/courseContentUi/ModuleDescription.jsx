import React from 'react';
import { PlayIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const ModuleDescription = ({ title, overview, totalVideoHours, totalReadingHours, isCourseOverview = false }) => {
  const overviewHeading = isCourseOverview ? `${title} Overview` : `${title} Module Overview`;

  return (
    <div className="bg-white p-6 mb-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-2">{overviewHeading}</h3>
      <p className="mb-2">{overview || (isCourseOverview ? 'No course overview available.' : 'No module overview available.')}</p>
      <div className="flex gap-4">
        {totalVideoHours > 0 && (
          <div className="text-sm text-gray-600 flex items-center">
            <PlayIcon className="h-4 w-4 mr-1" />
            <strong>Video Hours:</strong> {totalVideoHours} hrs
          </div>
        )}
        {totalReadingHours > 0 && (
          <div className="text-sm text-gray-600 flex items-center">
            <BookOpenIcon className="h-4 w-4 mr-1" />
            <strong>Reading Hours:</strong> {totalReadingHours} hrs
          </div>
        )}
        {(totalVideoHours === 0 && totalReadingHours === 0 && !overview) && (
          <p className="text-sm text-gray-500">No overview details available.</p>
        )}
      </div>
    </div>
  );
};

export default ModuleDescription;