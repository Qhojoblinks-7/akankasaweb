// src/culture/components/AdinkraSymbolsSection.js
import React from 'react';

// Placeholder data for Adinkra Symbols (move to a data file later if large)
const adinkraSymbolsData = [
  { symbol: 'Gye Nyame', meaning: 'Except God', description: 'Supremacy of God', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=GN' },
  { symbol: 'Sankofa', meaning: 'Return and get it', description: 'Learn from the past', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=SK' },
  { symbol: 'Fawohodie', meaning: 'Independence', description: 'Freedom, independence', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=FA' },
  { symbol: 'Aya', meaning: 'Fern', description: 'Endurance, resilience', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=AY' },
  { symbol: 'Adinkrahene', meaning: 'Chief of Adinkra symbols', description: 'Greatness, leadership', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=AD' },
  { symbol: 'Akoma', meaning: 'The heart', description: 'Patience, faithfulness', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=AK' },
  { symbol: 'Dame-Dame', meaning: 'Checkers', description: 'Intelligence, strategy', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=DD' },
  { symbol: 'Funtunfunefu', meaning: 'Conjoined crocodiles', description: 'Democracy, unity', image: 'https://via.placeholder.com/100/FFD700/FFFFFF?text=FF' },
  // Add more Adinkra symbols as needed, and replace placeholder images
];

function AdinkraSymbolsSection({ sectionRef }) {
  return (
    <section id="AdinkraSymbols" ref={sectionRef} className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Adinkra Symbols</h2>
      <p className="text-gray-600 text-center mb-8">
        An ancient system of symbols rich in symbolism, and are extensively used in fabric, pottery, logos, and art.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {adinkraSymbolsData.map((symbol, index) => (
          <div key={index} className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-100 flex flex-col items-center justify-center">
            <img src={symbol.image} alt={symbol.symbol} className="w-16 h-16 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">{symbol.symbol}</h4>
            <p className="text-gray-600 text-sm">{symbol.meaning}</p>
            <p className="text-gray-500 text-xs mt-1">{symbol.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full text-md transition duration-300">
          View All Symbols
        </button>
      </div>
    </section>
  );
}

export default AdinkraSymbolsSection;