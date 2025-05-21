// src/culture/components/ExploreCultureGrid.js
import React from 'react';
import festivalsImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed
import adinkraGridImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed
import proverbsImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed
import attireImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed
import ritesImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed
import musicDanceImg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed

const cultureCardsData = [
  {
    title: 'Festivals & Celebrations',
    description: 'Experience the vibrant celebrations that mark the Akan calendar, from the royal magnificent to ritual festivities.',
    image: festivalsImg,
    link: '#', // Replace with actual links if they go to new pages
    linkText: 'Explore Festivals →'
  },
  {
    title: 'Adinkra Symbols',
    description: 'Discover the visual language of the Akan through these symbolic designs that express proverbs and philosophical concepts.',
    image: adinkraGridImg,
    link: '#',
    linkText: 'Explore Symbols →'
  },
  {
    title: 'Values & Proverbs',
    description: 'Unravel the embedded in Akan proverbs and the core values that guide community life and personal conduct.',
    image: proverbsImg,
    link: '#',
    linkText: 'Explore Wisdom →'
  },
  {
    title: 'Traditional Attire',
    description: 'Learn about the vibrant Kente cloth, rich Adinkra prints, and other traditional garments that communicate status and identity.',
    image: attireImg,
    link: '#',
    linkText: 'Explore Attire →'
  },
  {
    title: 'Rites of Passage',
    description: 'Discover the ceremonies that mark important life transitions, such as birth, puberty, marriage, and ancestorhood.',
    image: ritesImg,
    link: '#',
    linkText: 'Explore Rites →'
  },
  {
    title: 'Culture in Music & Dance',
    description: 'Experience the rhythm and movements that bring Akan stories and cultural expression to generations.',
    image: musicDanceImg,
    link: '#',
    linkText: 'Explore Music →'
  },
];

function ExploreCultureGrid() {
  return (
    <section className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Akan Culture</h2>
      <p className="text-gray-600 mb-8">
        Discover the diverse expressions of Akan culture. Navigate through our curated collections of traditions, symbolism, and practices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cultureCardsData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{card.description}</p>
              <a href={card.link} className="text-blue-600 hover:underline text-sm font-semibold">{card.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreCultureGrid;