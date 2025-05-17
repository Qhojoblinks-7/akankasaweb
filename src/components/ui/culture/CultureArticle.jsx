import React from 'react';

function CultureArticle({ article }) {
  if (!article) {
    return <p className="text-gray-500">No article available.</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-6 mb-4">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">{article.title}</h2>
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full rounded-md mb-4" />
      )}
      {article.content.map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-3">{paragraph}</p>
      ))}
      {article.sources && (
        <div className="mt-4 text-sm text-gray-500">
          <h4 className="font-semibold">Sources:</h4>
          <ul>
            {article.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CultureArticle;