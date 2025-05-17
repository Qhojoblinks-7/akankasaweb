import React, { useState, useCallback } from 'react';
import DictionarySearch from '../dictionary/DictionarySearch';
import DictionaryEntry from '../dictionary/DictionaryEntry';
import ExampleSentence from '../dictionary/ExampleSentence';
import Etymology from '../dictionary/Etymology';
import DialectMap from '../dictionary/DialectMap';
import Phrasebook from '../dictionary/Phrasebook';
import WordList from '../dictionary/WordList';
import DictionaryForm from '../dictionary/DictionaryForm';
import DictionaryCard from '../dictionary/DictionaryCard'; // Assuming DictionaryCard is suitable for the main page too
import akanDictionaryData from '../../../data/akanDictionary'; // Your dictionary data

function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDialect, setSelectedDialect] = useState('Twi');
  const availableDialects = ['Twi', 'Akuapem', 'Fante']; // Ensure this matches your data
  const [suggestions, setSuggestions] = useState([]); // For auto-suggestions

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    const lowerTerm = term.toLowerCase();
    const results = akanDictionaryData.filter((entry) =>
      (entry.headword?.[selectedDialect]?.toLowerCase().includes(lowerTerm)) ||
      (entry.definitions?.some(def => def.definition.toLowerCase().includes(lowerTerm)))
    );
    setSearchResults(results);
  }, [selectedDialect]);

  const handleInputChange = useCallback((term) => {
    setSearchTerm(term);
    // Basic auto-suggestion logic (you'll likely want to improve this)
    const lowerTerm = term.toLowerCase();
    const suggested = akanDictionaryData
      .filter(entry => entry.headword?.[selectedDialect]?.toLowerCase().startsWith(lowerTerm))
      .map(entry => entry.headword[selectedDialect])
      .slice(0, 5); // Limit to a few suggestions
    setSuggestions(suggested);
  }, [selectedDialect]);

  const handleDialectChange = useCallback((event) => {
    setSelectedDialect(event.target.value);
  }, []);

  const handleSuggestionSubmit = useCallback((suggestion) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  }, [handleSearch]);

  const handleNewWordSubmit = useCallback((newEntry) => {
    // Logic to handle user-submitted words (e.g., send to moderation)
    console.log('New word submitted:', newEntry);
    alert('Your suggestion has been submitted for review.');
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Akan Dictionary</h1>

      <div className="mb-4">
        <DictionarySearch
          onSearch={handleSearch}
          onInputChange={handleInputChange}
          searchTerm={searchTerm}
          suggestions={suggestions}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dialect-select" className="mr-2 font-semibold">Select Dialect:</label>
        <select
          id="dialect-select"
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedDialect}
          onChange={handleDialectChange}
        >
          {availableDialects.map((dialect) => (
            <option key={dialect} value={dialect}>
              {dialect}
            </option>
          ))}
        </select>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {searchResults.map((entry, index) => (
            <DictionaryCard key={index} entry={entry} dialect={selectedDialect} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mb-6">{searchTerm ? `No results found for "${searchTerm}" in ${selectedDialect}` : 'Search for Akan or English words.'}</p>
      )}

      <h2 className="text-2xl font-semibold mb-4">Explore More</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="font-semibold mb-2">Common Phrases</h3>
          <Phrasebook
            phrases={akanDictionaryData
              .filter(entry => entry.isCommonPhrase) // Assuming a property in your data
              .map(entry => ({
                akan: entry.headword[selectedDialect],
                english: entry.definitions?.[0]?.definition, // Basic example
                dialect: selectedDialect,
                audioUrl: entry.audioUrls?.[selectedDialect]
              }))
            }
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Akan Dialects Map</h3>
          <DialectMap />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Vocabulary</h2>
      <WordList />

      <h2 className="text-2xl font-semibold mb-4">Contribute</h2>
      <p className="text-gray-700 mb-2">Help us expand the dictionary by suggesting new words or corrections.</p>
      <DictionaryForm onSubmit={handleNewWordSubmit} />
    </div>
  );
}

export default DictionaryPage;