import React from 'react';

function DictionaryEntry({ entry, currentDialect }) {
  if (!entry || !entry.headword || !entry.headword[currentDialect]) {
    return <p>No entry found for the selected dialect.</p>;
  }

  return (
    <div className="mb-4 p-4 border rounded shadow-md">
      <h3 className="text-xl font-semibold mb-2">{entry.headword[currentDialect]} ({entry.pronunciation[currentDialect]})</h3>
      <p className="text-gray-600 mb-2">Part of Speech: {entry.partOfSpeech}</p>
      <div>
        <h4 className="text-lg font-semibold mb-1">Definition (English):</h4>
        <ul>
          {entry.definitions.map((def, index) => (
            <li key={index}>{def.definition}</li>
          ))}
        </ul>
      </div>
      {entry.examples[currentDialect] && (
        <div>
          <h4 className="text-lg font-semibold mt-2 mb-1">Example ({currentDialect}):</h4>
          <ul>
            {entry.examples[currentDialect].map((ex, index) => (
              <li key={index}>
                {ex.sentence} - <span className="text-gray-500">{ex.translation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {entry.relatedWords[currentDialect] && (
        <div>
          <h4 className="text-lg font-semibold mt-2 mb-1">Related Words ({currentDialect}):</h4>
          <p>{entry.relatedWords[currentDialect].join(', ')}</p>
        </div>
      )}
      <p className="text-sm text-gray-400 mt-2">Dialect: {currentDialect}</p>
      {entry.akanDialects.length > 1 && (
        <p className="text-xs text-gray-500">Also available in: {entry.akanDialects.filter(d => d !== currentDialect).join(', ')}</p>
      )}
    </div>
  );
}

export default DictionaryEntry;