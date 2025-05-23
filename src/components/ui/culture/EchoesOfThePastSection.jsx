// src/culture/components/EchoesOfThePastSection.js
import React from 'react';
import echoesOfThePastImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed

function EchoesOfThePastSection({ sectionRef }) {
  return (
    <section id="EchoesOfThePast" ref={sectionRef} className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 flex flex-col md:flex-row-reverse items-center"> {/* flex-row-reverse for right text, left image */}
      <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 order-2 md:order-1"> {/* Order changed for left image, right text */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Echoes of the Past: Akan History</h2>
        <p className="text-gray-700 mb-4">
          From the mighty Ashanti Empire to the legacy of gold and intellectualism, Akan history is a testament to innovation, resilience, and complex societal structures. Explore ancient sites, ancient artifacts, and the living narratives that shape identity.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Ashanti Empire</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Migration Routes</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Gold Coast</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Colonial Resistance</span>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-full text-md transition duration-300 shadow-md">
          Read Histories
        </button>
      </div>
      <div className="md:w-1/2 order-1 md:order-2"> {/* Image on the left */}
        <img src={echoesOfThePastImg} alt="Akan historical artifact or person" className="w-full h-auto rounded-lg shadow-md" />
        <p className="text-gray-600 text-sm mt-2 text-center">
          Ancient wisdom: The Gold weights symbolize the rich history of trade and mathematics.
        </p>
      </div>
    </section>
  );
}

export default EchoesOfThePastSection;