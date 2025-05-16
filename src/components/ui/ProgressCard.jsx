import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';

const ProgressCard = ({ level, progress }) => (
  <div className="bg-white rounded-md shadow-md p-6">
    <h3 className="text-xl font-semibold text-gray-900">Your {level} Level Progress</h3>
    <div className="mt-4 flex items-center">
      <div className="relative w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{progress}%</span>
    </div>
    <Link
      to={`/learn/${level.toLowerCase()}/resume`} // Adjust resume link as needed
      className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Resume Course <PlayIcon className="ml-2 h-4 w-4" />
    </Link>
  </div>
);

export default ProgressCard;