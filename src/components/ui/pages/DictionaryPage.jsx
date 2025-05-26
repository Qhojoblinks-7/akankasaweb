// src/components/DictionaryPage.js
import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from '../dictionary/Sidebar';
import MainContent from '../dictionary/MainContent';
import akanDictionaryDataRaw from '../../data/akanDictionary.js';
import { FaBars } from 'react-icons/fa';

// Pre-process and filter the raw dictionary data once to ensure consistency
const akanDictionaryData = akanDictionaryDataRaw.filter(entry => {
  const isValid = entry && typeof entry.headword === 'string' && entry.headword.trim().length > 0;
  if (!isValid) {
    console.warn("Filtered out malformed entry during initial load (invalid/empty string headword):", entry);
  }
  return isValid;
}).map((entry, index) => {
  return {
    ...entry,
    id: entry.id || `${entry.headword}-${entry.partOfSpeech}-${index}`, // Ensure robust unique ID
  };
});


function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDialect, setSelectedDialect] = useState('Twi');
  const [playingAudio, setPlayingAudio] = useState(null);
  const [savedWords, setSavedWords] = useState(() => {
    const storedWords = localStorage.getItem('akanSavedWords');
    try {
      return storedWords ? JSON.parse(storedWords).filter(word => word && typeof word.headword === 'string' && word.headword.trim().length > 0) : [];
    } catch (e) {
      console.error("Failed to parse or validate saved words from localStorage", e);
      return [];
    }
  });
  const [recentSearches, setRecentSearches] = useState(() => {
    const storedSearches = localStorage.getItem('akanRecentSearches');
    return storedSearches ? JSON.parse(storedSearches) : [];
  });
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const wordsPerPage = 12;
  const [displayedWordCount, setDisplayedWordCount] = useState(wordsPerPage);

  const allPopularWords = akanDictionaryData.filter(entry =>
    entry.akanDialects && entry.akanDialects.includes(selectedDialect)
  );
  const popularWords = allPopularWords.slice(0, displayedWordCount);
  const hasMorePopularWords = displayedWordCount < allPopularWords.length;


  const handlePlayAudio = useCallback((audioUrl) => {
    if (playingAudio === audioUrl) {
      setPlayingAudio(null);
      const audioElements = document.getElementsByTagName('audio');
      for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].pause();
        audioElements[i].currentTime = 0;
      }
    } else {
      const audioElements = document.getElementsByTagName('audio');
      for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].pause();
        audioElements[i].currentTime = 0;
      }
      setPlayingAudio(audioUrl);
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => setPlayingAudio(null);
    }
  }, [playingAudio]);

  const handleSaveWord = useCallback((entry) => {
    if (!entry || !entry.id || typeof entry.headword !== 'string' || entry.headword.trim().length === 0) {
      console.warn("Attempted to save an invalid or malformed word entry (lacking ID or empty string headword):", entry);
      return;
    }

    setSavedWords((prevSavedWords) => {
      const cleanedPrevSavedWords = prevSavedWords.filter(word => word && word.id && typeof word.headword === 'string' && word.headword.trim().length > 0);

      const isAlreadySaved = cleanedPrevSavedWords.some(saved => saved.id === entry.id);

      let newSavedWords;
      if (isAlreadySaved) {
        newSavedWords = cleanedPrevSavedWords.filter(saved => saved.id !== entry.id);
      } else {
        newSavedWords = [...cleanedPrevSavedWords, entry];
      }
      localStorage.setItem('akanSavedWords', JSON.stringify(newSavedWords));
      return newSavedWords;
    });
  }, []);

  const performSearch = useCallback((term, dialect) => {
    const lowerSearchTerm = term.toLowerCase();
    return akanDictionaryData.filter((entry) => {
      const headwordMatch = entry.headword.toLowerCase().includes(lowerSearchTerm);
      const definitionMatch = entry.definitions?.some((def) =>
        def.definition.toLowerCase().includes(lowerSearchTerm)
      );
      const translationMatch = Object.values(entry.translations || {}).some(
        (text) => text.toLowerCase().includes(lowerSearchTerm)
      );
      return headwordMatch || definitionMatch || translationMatch;
    });
  }, []);

  const handleSearchSubmit = useCallback((term) => {
    const trimmedTerm = term.trim();
    setSearchTerm(trimmedTerm);
    if (trimmedTerm === '') {
      setIsSearching(false);
      setFilteredResults([]);
      setDisplayedWordCount(wordsPerPage);
    } else {
      setIsSearching(true);
      const results = performSearch(trimmedTerm, selectedDialect);
      setFilteredResults(results);

      setRecentSearches((prevSearches) => {
        const newSearches = [trimmedTerm, ...prevSearches.filter(s => s !== trimmedTerm)].slice(0, 5);
        localStorage.setItem('akanRecentSearches', JSON.stringify(newSearches));
        return newSearches;
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [selectedDialect, performSearch, wordsPerPage, isMobileMenuOpen]);

  useEffect(() => {
    if (isSearching && searchTerm.trim() !== '') {
      const results = performSearch(searchTerm, selectedDialect);
      setFilteredResults(results);
    } else if (!isSearching) {
      setDisplayedWordCount(wordsPerPage);
    }
  }, [selectedDialect, isSearching, searchTerm, performSearch, wordsPerPage]);

  useEffect(() => {
    if (!isSearching) {
      setDisplayedWordCount(wordsPerPage);
    }
  }, [selectedDialect, isSearching, wordsPerPage]);


  const handleLoadMorePopularWords = useCallback(() => {
    setDisplayedWordCount((prevCount) => prevCount + wordsPerPage);
  }, [wordsPerPage]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile-only Header with Menu Button */}
      <div className="md:hidden bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-7 w-7 fill-current"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V296.8c-10.6 6.8-19.1 15.2-26 24.7c-26.6-9.5-54-15.2-82.4-16.7c-2.5-.2-5-.3-7.5-.3c-44.5 0-86.3 11.2-122.7 32l-3.1 1.8c-13.6 8.3-25.5 18.5-35.8 30.3l-2.4 2.8c-3.1 3.6-6 7.4-8.8 11.4C71.3 400.9 48 440.1 48 480c0 17.7 14.3 32 32 32H560c17.7 0 32-14.3 32-32s-14.3-32-32-32H384c0-26.5 21.5-48 48-48h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H432c-17.7 0-32 14.3-32 32V256H288L149.3 41.3C136.2 14.2 108.7 0 78.4 0H64C28.7 0 0 28.7 0 64zm96 224h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32zM416 96c-17.7 0-32 14.3-32 32V128H288V64c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32V96h-32z"/>
            </svg>
          </span>
          <h1 className="text-xl font-bold text-gray-800">Akan Dictionary</h1>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar - Conditional rendering for mobile, static for desktop */}
      <aside
        className={`
          w-full md:w-1/4 bg-white shadow-md md:p-6 md:shadow-lg
          md:relative md:top-0 md:left-0 md:transform-none md:translate-y-0
          md:block /* Always block-level on medium screens and up */
          overflow-y-auto /* Enable scrolling */
          hide-scrollbar /* Custom class to hide the scrollbar */
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-screen p-4' : 'max-h-0 p-0'}
          md:max-h-full md:p-6 md:h-screen md:sticky md:top-0 /* Sticky for static desktop sidebar */
        `}
      >
        <Sidebar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchSubmit={handleSearchSubmit}
          selectedDialect={selectedDialect}
          setSelectedDialect={setSelectedDialect}
          savedWords={savedWords}
          recentSearches={recentSearches}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full md:w-3/4 p-4 md:p-8 overflow-y-auto">
        <MainContent
          wordsToDisplay={isSearching ? filteredResults : popularWords}
          selectedDialect={selectedDialect}
          handlePlayAudio={handlePlayAudio}
          playingAudio={playingAudio}
          handleSaveWord={handleSaveWord}
          isSearching={isSearching}
          searchTerm={searchTerm}
          onLoadMorePopularWords={handleLoadMorePopularWords}
          hasMorePopularWords={hasMorePopularWords}
          savedWords={savedWords}
        />
      </main>
    </div>
  );
}

export default DictionaryPage;