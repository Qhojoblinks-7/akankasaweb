import React from 'react';

function ExampleSentence({ sentence, translation, dialect, audioUrl }) {
  return (
    <li className="mb-2">
      <span className="font-medium">{sentence}</span>
      {translation && <span className="ml-2 text-gray-500">- {translation}</span>}
      {audioUrl && (
        <button
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => {
            // Implement audio playback logic here
            console.log(`Play audio for: ${sentence} (${dialect}) - ${audioUrl}`);
          }}
          aria-label={`Play audio of example sentence in ${dialect}`}
        >
          {/* You might want to use the FaVolumeUp icon here */}
          <svg className="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 3a1 1 0 011-1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1h4zm3 5a1 1 0 011-1v4a1 1 0 01-1 1h-1a1 1 0 01-1-1V8a1 1 0 011-1h1zm3-3a1 1 0 011-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V6a1 1 0 011-1h1z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </li>
  );
}

export default ExampleSentence;