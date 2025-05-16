// src/components/DictionaryCard.js
import React from "react";
import { FaStar, FaVolumeUp } from "react-icons/fa";
import DictionaryEntry from "./DictionaryEntry";

function DictionaryCard({ entry, dialect }) {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {dialect}
        </span>
        <button className="text-gray-500 hover:text-yellow-500 focus:outline-none">
          <FaStar size={16} />
        </button>
      </div>

      {/* Pronunciation and Audio Button */}
      <div className="flex justify-between items-center mb-2">
        {entry.pronunciation[dialect] && (
          <p className="text-sm text-gray-600">{entry.pronunciation[dialect]}</p>
        )}
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <FaVolumeUp size={16} />
        </button>
      </div>

      {/* DictionaryEntry Component */}
      <DictionaryEntry entry={entry} currentDialect={dialect} />
    </div>
  );
}

export default DictionaryCard;
