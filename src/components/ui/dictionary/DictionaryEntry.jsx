import React from "react";

function DictionaryEntry({ entry, currentDialect }) {
  if (!entry?.translations?.[currentDialect]) { // Optional chaining
    return <p className="text-red-500">No entry found for the selected dialect.</p>;
  }

  const {
    headword,
    translations,
    pronunciation,
    partOfSpeech,
    definitions = [], // Default to empty array
    examples = {}, // Default to empty object
    relatedWords = {}, // Default to empty object
    akanDialects = [], // Default to empty array
  } = entry;

  return (
    <div className="mb-6 p-5 border border-gray-300 rounded-lg shadow-md bg-white">
      {/* Headword & Pronunciation */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-1">{headword}</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-1">
          {translations[currentDialect]}{" "}
          {pronunciation?.[currentDialect] && ( // Conditional rendering
            <span className="ml-2 text-sm text-gray-500">
              ({pronunciation[currentDialect]})
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-500">Part of Speech: {partOfSpeech}</p>
      </div>

      {/* Definitions */}
      {definitions.length > 0 && ( // Conditional rendering
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            Definition (English):
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {definitions.map((def, index) => (
              <li key={index} className="mb-1">
                {def.definition}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Examples */}
      {examples[currentDialect]?.length > 0 && ( // Conditional rendering and optional chaining
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            Examples ({currentDialect}):
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {examples[currentDialect].map((ex, index) => (
              <li key={index} className="mb-1">
                <span className="font-medium">{ex.sentence}</span>
                {ex.translation && ( // Conditional rendering
                  <span className="ml-2 text-gray-500">- {ex.translation}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Words */}
      {relatedWords[currentDialect]?.length > 0 && ( // Conditional rendering and optional chaining
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            Related Words ({currentDialect}):
          </h4>
          <div className="flex flex-wrap gap-2">
            {relatedWords[currentDialect].map((word, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Dialect Information */}
      <div className="mt-4 text-sm text-gray-500">
        <p>
          Dialect: <span className="font-medium">{currentDialect}</span>
        </p>
        {akanDialects.length > 1 && (
          <p>
            Also available in:{" "}
            {akanDialects
              .filter((d) => d !== currentDialect)
              .map((dialect, index) => (
                <span key={index} className="mr-1">
                  {dialect}
                </span>
              ))}
          </p>
        )}
      </div>
    </div>
  );
}

export default DictionaryEntry;