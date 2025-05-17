import React, { useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

function DictionarySearch({ onSearch, onInputChange, searchTerm, suggestions = [] }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = useCallback((event) => {
    onInputChange(event.target.value);
    setShowSuggestions(event.target.value.length > 0);
  }, [onInputChange]);

  const handleSuggestionClick = useCallback((suggestion) => {
    onInputChange(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  }, [onInputChange, onSearch]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setShowSuggestions(false);
  }, [onSearch, searchTerm]);

  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Akan or English"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            aria-label="Search dictionary"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-md py-2 px-4 ml-2 focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DictionarySearch;