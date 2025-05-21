// src/components/MainContent.js
import React from 'react';
import DictionaryCard from './DictionaryCard';
import LoadMoreButton from './LoadMoreButton'; // Import the LoadMoreButton

function MainContent({
  wordsToDisplay,
  selectedDialect,
  handlePlayAudio,
  playingAudio,
  handleSaveWord,
  isSearching,
  searchTerm,
  onLoadMorePopularWords,
  hasMorePopularWords,
  savedWords, // <<< IMPORTANT: Added savedWords prop
}) {
  const isLoading = false; // For now, assume not loading, but you can pass isLoading state from DictionaryPage if needed

  return (
    <div className="w-full h-full flex flex-col"> {/* Added flex-col to ensure proper layout of title, grid, and button */}
      {/* Section Title and Subtitle */}
      <div className="mb-6 md:mb-8"> {/* Adjusted margin for consistency */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 md:text-2xl"> {/* Adjusted font sizes for responsiveness */}
          {isSearching ? `Search Results for "${searchTerm}"` : 'Popular Words'}
        </h2>
        <p className="text-gray-600 text-sm md:text-base"> {/* Adjusted font sizes for responsiveness */}
          {isSearching
            ? wordsToDisplay.length > 0
              ? `Found ${wordsToDisplay.length} results.`
              : `No results found for "${searchTerm}" in ${selectedDialect}.`
            : 'Explore commonly searched and interesting Akan words.'
          }
        </p>
      </div>

      {/* Dictionary Cards Grid */}
      {isLoading ? (
        // <DictionarySearchSkeleton /> // Show skeleton while loading
        <p className="text-center text-gray-500 text-lg py-8">Loading...</p> // Placeholder if no skeleton component
      ) : wordsToDisplay.length === 0 && isSearching ? (
        <p className="text-gray-500 text-lg text-center py-8">No results found for "{searchTerm}" in {selectedDialect}. Please try a different term or dialect.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8"> {/* Adjusted gap and added sm/lg breakpoints */}
          {wordsToDisplay.map((word) => ( // Changed 'entry' to 'word' for consistency
            <DictionaryCard
              key={word.id || word.headword || JSON.stringify(word)} // Prioritize word.id, then headword string, then stringify
              entry={word} // Pass as 'entry' to DictionaryCard as it expects 'entry' prop
              dialect={selectedDialect} // Pass as 'dialect' to DictionaryCard as it expects 'dialect' prop
              handlePlayAudio={handlePlayAudio}
              playingAudio={playingAudio}
              handleSaveWord={handleSaveWord}
              // Calculate isSaved based on the passed savedWords array
              isSaved={savedWords.some(
                (savedWord) => {
                  // <<< CRITICAL FIX: Check if savedWord is valid and its headword is a string before accessing properties
                  if (!savedWord || typeof savedWord.headword !== 'string' || savedWord.headword.trim().length === 0) {
                    // console.warn("Found malformed savedWord in savedWords array:", savedWord); // Optional: log for debugging
                    return false; // This savedWord is not valid, so it can't be a match
                  }

                  // Compare based on headword as a string, partOfSpeech, and definition
                  return savedWord.id === word.id ||
                         (savedWord.headword === word.headword && // Compare headwords as strings
                          savedWord.partOfSpeech === word.partOfSpeech &&
                          savedWord.definitions?.[0]?.definition === word.definitions?.[0]?.definition);
                }
              )}
            />
          ))}
        </div>
      )}

      {/* Load More Button - only show if not searching AND there are more popular words available */}
      {!isSearching && hasMorePopularWords && (
        <div className="text-center mt-4"> {/* Centered the button */}
          <LoadMoreButton onClick={onLoadMorePopularWords} />
        </div>
      )}
    </div>
  );
}

export default MainContent;