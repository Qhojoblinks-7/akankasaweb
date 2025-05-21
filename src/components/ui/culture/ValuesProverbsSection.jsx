// src/culture/components/ValuesProverbsSection.js
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Example icon, replace with specific icon if needed

// Placeholder data for Values & Proverbs (move to a data file later if large)
const valuesProverbsData = [
  { category: 'Respect for Elders', text: 'A child who is able to wash his hands properly eats with the elders.' },
  { category: 'Communal Responsibility', text: 'One finger cannot lift a thing.' },
  { category: 'Humility', text: 'If a man says that he has seen all things, then he has not seen rain.' },
  { category: 'Patience', text: 'The river flows slowly because it is in no hurry to reach the sea.' },
  { category: 'Integrity', text: 'If you want to live long, you must be honest.' },
  { category: 'Knowledge & Learning', text: 'Learning is like a baobab tree; no one person can embrace it.' },
];

function ValuesProverbsSection({ sectionRef }) {
  return (
    <section id="ValuesProverbs" ref={sectionRef} className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Values & Proverbs</h2>
      <p className="text-gray-600 text-center mb-8">
        These demonstrate profound wisdom, morals, and provide guidance for ethical living and social harmony.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {valuesProverbsData.map((item, index) => (
          <div key={index} className="flex items-start bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <span className="inline-block bg-yellow-500 text-white rounded-full h-8 w-8 text-center text-lg font-bold mr-4 flex-shrink-0 flex items-center justify-center">
              <FaStar size={16} /> {/* Example icon, replace with specific icon if needed */}
            </span>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-1">{item.category}</h4>
              <p className="text-gray-700 text-sm italic">"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuesProverbsSection;