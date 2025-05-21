// src/components/DictionaryCard.js
import React from "react";
import { FaStar, FaRegStar, FaVolumeUp } from "react-icons/fa"; // Import FaRegStar for the outline star

function DictionaryCard({ entry, dialect, handlePlayAudio, playingAudio, handleSaveWord, isSaved }) { // Added isSaved prop
  // CORRECTED: Assuming entry.headword is directly a string
  const headwordText = entry?.headword || ''; // If entry.headword is a string, use it directly

  // These properties still rely on objects with dialect keys, as per your data structure
  const pronunciationText = entry?.pronunciation?.[dialect] || entry?.pronunciation?.Twi || '';
  const translationText = entry?.translations?.[dialect] || entry?.translations?.Twi || '';
  const headwordAudioUrl = entry?.audioUrls?.[dialect] || entry?.audioUrls?.Twi;
  const partOfSpeechText = entry?.partOfSpeech || '';

  const firstDefinition = entry?.definitions?.[0]?.definition || 'No definition available.';

  const examplesForDialect = entry?.examples?.[dialect] || [];
  const relatedWordsForDialect = entry?.relatedWords?.[dialect] || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col h-full">
      {/* Header: Contains word/pronunciation on left, and icons on right */}
      <div className="flex items-center justify-between mb-3">
        {/* Left side of header: headword and pronunciation */}
        <div className="flex items-center">
          <h3 className="text-xl font-bold text-blue-700 mr-2">{headwordText}</h3>
          {pronunciationText && (
            <span className="text-gray-600 text-sm mr-2">[{pronunciationText}]</span>
          )}
        </div>
        {/* RIGHT SIDE of header: Combined div for audio and save icons */}
        <div className="flex items-center space-x-2">
          {headwordAudioUrl && ( // Conditionally render audio button if URL exists
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                handlePlayAudio(headwordAudioUrl);
              }}
              className="text-gray-500 hover:text-yellow-500 focus:outline-none"
              aria-label={`Play pronunciation of ${headwordText} in ${dialect}`}
            >
              <FaVolumeUp size={18} className={playingAudio === headwordAudioUrl ? 'text-blue-500' : ''} />
            </button>
          )}
          {/* Star (Save) button - NOW USES isSaved PROP */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              handleSaveWord(entry);
            }}
            className="focus:outline-none" // Focus outline, text color determined by isSaved
            aria-label={isSaved ? `Unsave ${headwordText} from favorites` : `Save ${headwordText} to favorites`}
          >
            {isSaved ? (
              <FaStar size={18} className="text-yellow-500" /> // Filled star if saved
            ) : (
              <FaRegStar size={18} className="text-gray-400 hover:text-yellow-500" /> // Outline star if not saved, with hover effect
            )}
          </button>
        </div>
      </div>

      {/* Rest of the card content */}
      <p className="text-sm text-gray-500 mb-2">{partOfSpeechText}</p>
      <p className="text-base text-gray-800 font-semibold mb-3">{translationText}</p>

      <p className="text-gray-700 text-sm mb-3">
        {firstDefinition}
      </p>

      {examplesForDialect.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-gray-800 text-sm mb-1">Examples:</h4>
          {examplesForDialect.slice(0, 1).map((ex, idx) => (
            <div key={idx} className="text-gray-700 text-sm flex items-start">
              <div className="flex-grow">
                <p className="italic">{ex.sentence}</p>
                {ex.translation && (
                  <p className="text-gray-500">- {ex.translation}</p>
                )}
              </div>
              {ex.audioUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayAudio(ex.audioUrl);
                  }}
                  className="text-gray-500 hover:text-yellow-500 focus:outline-none ml-2"
                  aria-label={`Play pronunciation of example sentence`}
                >
                  <FaVolumeUp size={16} className={playingAudio === ex.audioUrl ? 'text-yellow-500' : ''} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {relatedWordsForDialect.length > 0 && (
        <div className="mt-auto">
          <h4 className="font-semibold text-gray-800 text-sm mb-1">Related Words:</h4>
          <div className="flex flex-wrap gap-2">
            {relatedWordsForDialect.slice(0, 3).map((word, idx) => (
              <span
                key={idx}
                className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-medium"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DictionaryCard;