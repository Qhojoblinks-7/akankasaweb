import React from 'react';

function Timeline({ events }) {
  if (!events || events.length === 0) {
    return <p className="text-gray-500">No timeline events available.</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-2">Timeline</h3>
      <div className="relative">
        <div className="absolute w-0.5 bg-gray-400 left-6 top-0 bottom-0"></div>
        <ul className="list-none m-0 p-0">
          {events.map((event, index) => (
            <li key={index} className="mb-4 relative">
              <div className="flex space-x-4">
                <div className="w-12 flex items-center justify-center">
                  <div className="rounded-full bg-blue-200 h-8 w-8 flex items-center justify-center text-blue-700 font-semibold">
                    {event.year}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
