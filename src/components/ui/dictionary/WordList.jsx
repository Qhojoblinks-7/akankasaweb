import React, { useState, useEffect, useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
// You'll likely need a way to manage user data (e.g., local storage, database)

function WordList() {
  const [favoriteWords, setFavoriteWords] = useState(() => {
    // Load from local storage or user data source
    const storedFavorites = localStorage.getItem('akanFavoriteWords');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    // Save to local storage or user data source
    localStorage.setItem('akanFavoriteWords', JSON.stringify(favoriteWords));
  }, [favoriteWords]);

  const handleRemoveFavorite = useCallback((word) => {
    setFavoriteWords((prevFavorites) => prevFavorites.filter((favWord) => favWord !== word));
  }, []);

  if (favoriteWords.length === 0) {
    return <p className="text-gray-500">Your favorite words list is empty.</p>;
  }

  return (
    <div className="mb-6 border border-gray-300 rounded-lg shadow-md bg-white p-4">
      <h2 className="text-xl font-semibold mb-3">My Favorite Akan Words</h2>
      <ul>
        {favoriteWords.map((word, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
            <span>{word}</span>
            <button
              className="text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => handleRemoveFavorite(word)}
              aria-label={`Remove ${word} from favorites`}
            >
              <FaTrash size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;