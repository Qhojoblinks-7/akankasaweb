import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Simulate fetching search results from your backend
      // Replace this with your actual API call
      fetch(`/api/forum/search?query=${query}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setSearchResults(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [query]);

  const handleResultClick = (resultId) => {
    // Assuming your chat/thread URLs are like /forum/thread/{threadId}
    navigate(`/forum/thread/${resultId}`);
  };

  if (loading) {
    return <div>Searching for "{query}"...</div>;
  }

  if (error) {
    return <div>Error searching: {error}</div>;
  }

  if (searchResults.length === 0) {
    return <div>No results found for "{query}".</div>;
  }

  return (
    <div>
      <h2>Search Results for: "{query}"</h2>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>
            <button onClick={() => handleResultClick(result.id)} className="cursor-pointer hover:underline">
              {result.title || result.name} {/* Adjust based on your result structure */}
            </button>
            {result.excerpt && <p className="text-gray-600">{result.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsPage;