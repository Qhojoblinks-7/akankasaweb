// src/components/ui/forum/DictionaryPopUp.js
import React, { useState, useCallback } from 'react';
import DictionaryCard from './DictionaryCard';
import DictionarySearchSkeleton from './DictionarySearchSkeleton';
import akanDictionaryData from '../../../data/akanDictionary'; // Adjust the import path if needed

const DictionaryPopUp = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDialect, setSelectedDialect] = useState('Twi');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const availableDialects = ['Twi', 'Akuapem', 'Fante']; // Ensure this matches your data

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleDialectChange = useCallback((event) => {
    setSelectedDialect(event.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setIsLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const results = akanDictionaryData.filter((entry) => {
          return (
            entry.headword?.[selectedDialect]?.toLowerCase().includes(lowerSearchTerm) ||
            entry.definitions?.some((def) =>
              def.definition.toLowerCase().includes(lowerSearchTerm)
            )
          );
        });
        setSearchResults(results);
        setIsLoading(false);
      }, 300); // Adjust delay as needed
    },
    [searchTerm, selectedDialect]
  );

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-6 z-50 w-[90%] max-w-lg"> {/* Responsive width */}
      <h2 className="text-xl font-semibold mb-4">Akan Dictionary</h2>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close dictionary popup" // Accessibility
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search Akan or English"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search dictionary" // Accessibility
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      <div className="mb-2">
        <label htmlFor="dictionary-dialect" className="mr-2 text-sm">
          Dialect:
        </label>
        <select
          id="dictionary-dialect"
          className="shadow border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
          value={selectedDialect}
          onChange={handleDialectChange}
          aria-label="Select dialect" // Accessibility
        >
          {availableDialects.map((dialect) => (
            <option key={dialect} value={dialect}>
              {dialect}
            </option>
          ))}
        </select>
      </div>

      <div className="max-h-96 overflow-y-auto"> {/* Increased max height */}
        {isLoading ? (
          <DictionarySearchSkeleton />
        ) : searchResults.length === 0 && searchTerm ? (
          <p className="text-gray-500">No results found for "{searchTerm}" in {selectedDialect}.</p>
        ) : (
          searchResults.map((entry, index) => (
            <DictionaryCard key={index} entry={entry} dialect={selectedDialect} />
          ))
        )}
      </div>
    </div>
  );
};

export default DictionaryPopUp;