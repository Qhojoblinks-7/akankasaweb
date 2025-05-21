// src/culture/components/AkanHeritageSection.js
import React from 'react';
import akanChiefImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed

function AkanHeritageSection({ sectionRef }) {
  return (
    <section id="AkanHeritage" ref={sectionRef} className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">The Akan Heritage</h2>
        <p className="text-gray-700 mb-4">
          The Akan people represent one of West Africa's most influential cultural groups, primarily residing in Ghana and Côte d'Ivoire. Their rich history, dating back centuries, lies in their matrilineal social structures, elaborate rituals, and profound philosophical traditions.
        </p>
        <p className="text-gray-700 mb-6">
          Akan culture boasts distinct sub-groups including Ashanti, Fante, Akuapem, Akyem, and others - each with distinct dialects of the Akan language and unique cultural practices, yet sharing core values and traditions.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-800 mb-2">Did You Know?</h4>
          <p className="text-yellow-700 text-sm">
            The Akan were one of the few African societies to develop their own writing system, called Adinkra Symbols, which represent concepts, proverbs, and philosophical ideas.
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={akanChiefImg} alt="An Akan chief adorned in traditional regalia" className="w-full h-auto rounded-lg shadow-md" />
        <p className="text-gray-600 text-sm mt-2 text-center">
          An Akan chief adorned in traditional regalia and gold ornaments, symbolizing leadership and cultural authority.
        </p>
      </div>
    </section>
  );
}

export default AkanHeritageSection;