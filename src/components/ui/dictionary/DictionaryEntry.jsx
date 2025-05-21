import React from "react";
 

 function DictionaryEntry({ entry, currentDialect }) {
  if (!entry?.translations?.[currentDialect]) {
  return <p className="text-red-500">No entry found for the selected dialect.</p>;
  }
 

  const {
  headword,
  translations,
  pronunciation,
  partOfSpeech,
  definitions = [],
  examples = {},
  relatedWords = {},
  akanDialects = [],
  } = entry;
 

  return (
  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4">
  {/* Outer container - padding, rounded edges, shadow */}
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 md:mb-4">
  {/* Headword and Pronunciation */}
  <div className="w-full md:w-auto mb-2 md:mb-0">
  <h2 className="text-xl md:text-2xl font-bold text-blue-700 mr-0 md:mr-4">
  {headword?.[currentDialect] || headword}
  </h2>
  {pronunciation?.[currentDialect] && (
  <span className="text-gray-600 text-sm md:text-base">
  ({pronunciation[currentDialect]})
  </span>
  )}
  </div>
 

  {/* Part of Speech */}
  <div className="text-gray-500 text-sm md:text-base">
  {partOfSpeech}
  </div>
  </div>
 

  {/* Translation */}
  {translations?.[currentDialect] && (
  <div className="mb-2 md:mb-4">
  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
  {translations[currentDialect]}
  </h3>
  </div>
  )}
 

  {/* Definitions */}
  {definitions.length > 0 && (
  <div className="mb-2 md:mb-4">
  <h4 className="text-md md:text-lg font-semibold text-gray-800">
  Definition (English):
  </h4>
  <ul className="list-disc list-inside text-gray-700">
  {definitions.map((def, index) => (
  <li key={index} className="mb-1">{def.definition}</li>
  ))}
  </ul>
  </div>
  )}
 

  {/* Examples */}
  {examples?.[currentDialect]?.length > 0 && (
  <div className="mb-2 md:mb-4">
  <h4 className="text-md md:text-lg font-semibold text-gray-800">
  Examples ({currentDialect}):
  </h4>
  <ul className="list-decimal list-inside text-gray-700">
  {examples[currentDialect].map((ex, index) => (
  <li key={index} className="mb-2">
  <p><span className="font-bold">{ex.sentence}</span></p>
  {ex.translation && (
  <p className="text-gray-600 ml-4">- {ex.translation}</p>
  )}
  </li>
  ))}
  </ul>
  </div>
  )}
 

  {/* Related Words */}
  {relatedWords?.[currentDialect]?.length > 0 && (
  <div className="mb-2 md:mb-4">
  <h4 className="text-md md:text-lg font-semibold text-gray-800">
  Related Words ({currentDialect}):
  </h4>
  <div className="flex flex-wrap gap-2">
  {relatedWords[currentDialect].map((word, index) => (
  <span
  key={index}
  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
  >
  {word}
  </span>
  ))}
  </div>
  </div>
  )}
 

  {/* Dialect Info */}
  <div className="text-sm text-gray-500">
  <p>Dialect: <span className="font-semibold">{currentDialect}</span></p>
  {akanDialects.length > 1 && (
  <p>
  Also available in:{" "}
  <span className="block sm:inline"> {/* Make inline on small screens and up */}
  {akanDialects
  .filter((d) => d !== currentDialect)
  .map((dialect, index) => (
  <span key={index} className="mr-1">{dialect}</span>
  ))}
  </span>
  </p>
  )}
  </div>
  </div>
  );
 }
 

 export default DictionaryEntry;