// src/dictionary/Sidebar.js
import React, { useState } from 'react';
import { FaSearch, FaStar, FaTimes } from 'react-icons/fa';

function Sidebar({
  searchTerm,
  setSearchTerm,
  onSearchSubmit,
  selectedDialect,
  setSelectedDialect,
  savedWords,
  recentSearches,
  closeMobileMenu // Prop to close mobile menu on item click
}) {
  const availableDialects = ['Twi', 'Akuapem', 'Fante'];
  const [isRecentSearchesExpanded, setIsRecentSearchesExpanded] = useState(false);
  const [isSavedWordsExpanded, setIsSavedWordsExpanded] = useState(false); // New state for saved words expansion

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearchSubmit(searchTerm);
      if (closeMobileMenu) closeMobileMenu();
    }
  };

  const handleRecentSearchClick = (term) => {
    setSearchTerm(term);
    onSearchSubmit(term);
    if (closeMobileMenu) closeMobileMenu();
  };

  const handleSavedWordClick = (word) => {
    if (!word || typeof word.headword !== 'string' || word.headword.trim().length === 0) {
      console.warn("Attempted to click a malformed saved word (invalid ID or string headword):", word);
      return;
    }
    setSearchTerm(word.headword);
    onSearchSubmit(word.headword);
    if (closeMobileMenu) closeMobileMenu();
  };

  const handleViewAllSavedWordsToggle = () => { // Function to toggle saved words expansion
    setIsSavedWordsExpanded(prev => !prev);
  };

  // Determine how many saved words to display based on expansion state
  const displayedSavedWords = isSavedWordsExpanded ? savedWords : savedWords.slice(0, 4); // Display 4 when not expanded
  const displayedRecentSearches = isRecentSearchesExpanded ? recentSearches : recentSearches.slice(0, 5);

  return (
    <div className="flex flex-col md:space-y-6 h-full  pb-4">
      {/* Akan Dictionary Header (from images) */}
      <div className="md:flex items-center mb-4 md:mb-6 hidden"> {/* Hidden on small screens, shown on medium and up */}
        <span className="text-yellow-500 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="h-7 w-7 fill-current"
          >
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V296.8c-10.6 6.8-19.1 15.2-26 24.7c-26.6-9.5-54-15.2-82.4-16.7c-2.5-.2-5-.3-7.5-.3c-44.5 0-86.3 11.2-122.7 32l-3.1 1.8c-13.6 8.3-25.5 18.5-35.8 30.3l-2.4 2.8c-3.1 3.6-6 7.4-8.8 11.4C71.3 400.9 48 440.1 48 480c0 17.7 14.3 32 32 32H560c17.7 0 32-14.3 32-32s-14.3-32-32-32H384c0-26.5 21.5-48 48-48h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H432c-17.7 0-32 14.3-32 32V256H288L149.3 41.3C136.2 14.2 108.7 0 78.4 0H64C28.7 0 0 28.7 0 64zm96 224h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32zM416 96c-17.7 0-32 14.3-32 32V128H288V64c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32V96h-32z"/>
          </svg>
        </span>
        <h1 className="text-xl font-bold text-gray-800">Akan <span className="font-normal">Dictionary</span></h1>
      </div>

      {/* Search Input */}
      <div className="mb-4 md:mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Akan words..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FaSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
        {/* Search button only on mobile screens */}
        <button
          onClick={() => { onSearchSubmit(searchTerm); if (closeMobileMenu) closeMobileMenu(); }}
          className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold md:hidden"
        >
          Search
        </button>
      </div>

      {/* Dialect Selection Buttons */}
      <div className="mb-4 md:mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Select Dialect</h3>
        <div className="flex space-x-2">
          {availableDialects.map((dialect) => (
            <button
              key={dialect}
              onClick={() => setSelectedDialect(dialect)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDialect === dialect
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {dialect}
            </button>
          ))}
        </div>
      </div>

      {/* Saved Words Section */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-gray-800">Saved Words</h3>
          <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {savedWords.length}
          </span>
        </div>
        <div>
          {savedWords.length > 0 ? (
            <div className="space-y-3">
              {displayedSavedWords.map((word, index) => ( // Use displayedSavedWords
                <div
                  key={word.id || index}
                  className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleSavedWordClick(word)}
                >
                  {word && typeof word.headword === 'string' && word.headword.trim().length > 0 ? (
                    <>
                      <div>
                        <p className="font-semibold text-base text-gray-800">
                          {word.headword}
                        </p>
                        <p className="text-gray-500 text-sm">{word.translations?.[selectedDialect] || word.translations?.Twi || word.definitions?.[0]?.definition}</p>
                      </div>
                      <FaStar size={16} className="text-yellow-500" />
                    </>
                  ) : (
                    <div className="text-red-500 text-sm">Error loading saved word.</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-4 text-center text-gray-500 text-sm border border-gray-200">
              No saved words yet.
            </div>
          )}
        </div>
        {savedWords.length > 4 && ( // Only show "View all/Show Less" if more than 4 saved words
          <div className="mt-3 text-center">
            <button
              onClick={handleViewAllSavedWordsToggle} // Toggle function
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              {isSavedWordsExpanded ? 'Show Less' : 'View all saved words'}
            </button>
          </div>
        )}
      </div>

      {/* Recent Searches Section (Pill-shaped buttons) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-gray-800">Recent Searches</h3>
          {recentSearches.length > 5 && (
            <button
              onClick={() => setIsRecentSearchesExpanded(!isRecentSearchesExpanded)}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              {isRecentSearchesExpanded ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>
        {recentSearches.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {displayedRecentSearches.map((search, index) => (
              <button
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors cursor-pointer"
                onClick={() => handleRecentSearchClick(search)}
              >
                {search}
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-4 text-center text-gray-500 text-sm border border-gray-200">
            No recent searches.
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;