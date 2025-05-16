// CourseDetails.jsx

import React from 'react';

const CourseDetails = ({ details, isModule = false }) => {
  if (!details) {
    return <p>No details available.</p>;
  }

  return (
    <div className="bg-white p-6 mb-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">
        {isModule ? `${details.title} Details` : 'Course Information'}
      </h3>

      {details.description && (
        <div className="mb-3">
          <h4 className="text-md font-semibold mb-1">Description</h4>
          <p>{details.description}</p>
        </div>
      )}

      {details.totalModules && (
        <p className="text-sm text-gray-600 mb-2">
          <strong>Total Modules:</strong> {details.totalModules}
        </p>
      )}

      {details.totalVideoHours !== undefined && (
        <p className="text-sm text-gray-600 mb-2">
          <strong>Total Video Hours:</strong> {details.totalVideoHours} hrs
        </p>
      )}

      {details.totalReadingHours !== undefined && (
        <p className="text-sm text-gray-600 mb-2">
          <strong>Total Reading Hours:</strong> {details.totalReadingHours} hrs
        </p>
      )}

      {isModule && details.content && details.content.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Content</h4>
          <ul className="list-disc pl-5">
            {details.content.map((item, index) => (
              <li key={index} className="text-sm text-gray-700 mb-1">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Add more details based on your data structure */}
      {details.instructor && (
        <p className="text-sm text-gray-600 mt-3">
          <strong>Instructor:</strong> {details.instructor}
        </p>
      )}

      {details.duration && (
        <p className="text-sm text-gray-600 mt-1">
          <strong>Duration:</strong> {details.duration}
        </p>
      )}
    </div>
  );
};

export default CourseDetails;