import React, { useState, useCallback } from 'react';

function DictionaryForm({ onSubmit }) {
  const [akanWord, setAkanWord] = useState('');
  const [englishTranslation, setEnglishTranslation] = useState('');
  const [dialect, setDialect] = useState('Twi');
  const availableDialects = ['Twi', 'Akuapem', 'Fante']; // Ensure this matches your data

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit({ akanWord, englishTranslation, dialect });
    setAkanWord('');
    setEnglishTranslation('');
    setDialect('Twi'); // Reset to default
  }, [akanWord, englishTranslation, dialect, onSubmit]);

  return (
    <div className="mb-6 border border-gray-300 rounded-lg shadow-md bg-white p-4">
      <h2 className="text-xl font-semibold mb-3">Suggest a New Word/Correction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="akan-word" className="block text-gray-700 text-sm font-bold mb-2">
            Akan Word:
          </label>
          <input
            type="text"
            id="akan-word"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={akanWord}
            onChange={(e) => setAkanWord(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="english-translation" className="block text-gray-700 text-sm font-bold mb-2">
            English Translation:
          </label>
          <input
            type="text"
            id="english-translation"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={englishTranslation}
            onChange={(e) => setEnglishTranslation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dialect" className="block text-gray-700 text-sm font-bold mb-2">
            Dialect:
          </label>
          <select
            id="dialect"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={dialect}
            onChange={(e) => setDialect(e.target.value)}
          >
            {availableDialects.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
}

export default DictionaryForm;