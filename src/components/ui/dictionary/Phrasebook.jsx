import React from 'react';

function Phrasebook({ phrases }) {
  if (!phrases || phrases.length === 0) {
    return <p className="text-gray-500">No common phrases available.</p>;
  }

  return (
    <div className="mb-6 border border-gray-300 rounded-lg shadow-md bg-white p-4">
      <h2 className="text-xl font-semibold mb-3">Common Akan Phrases</h2>
      <ul>
        {phrases.map((phrase, index) => (
          <li key={index} className="mb-2">
            <span className="font-medium">{phrase.akan}</span> ({phrase.dialect}) - {phrase.english}
            {phrase.audioUrl && (
              <button
                className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => {
                  // Implement audio playback logic here
                  console.log(`Play audio for phrase: ${phrase.akan} (${phrase.dialect}) - ${phrase.audioUrl}`);
                }}
                aria-label={`Play audio of phrase in ${phrase.dialect}`}
              >
                {/* Use FaVolumeUp or a similar icon */}
                <svg className="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 3a1 1 0 011-1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1h4zm3 5a1 1 0 011-1v4a1 1 0 01-1 1h-1a1 1 0 01-1-1V8a1 1 0 011-1h1zm3-3a1 1 0 011-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V6a1 1 0 011-1h1z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Phrasebook;