// src/culture/components/HeroSection.js
import React from 'react';
import heroBg from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Akan Culture</h1>
        <p className="text-lg md:text-xl mb-8">
          "The culture of a people is their identity and personality; without it, they are lost."
        </p>
        <p className="mb-8">
          Explore the rich traditions, symbolism, and wisdom of the Akan people of Ghana. From vibrant festivals to meaningful Adinkra symbols, immerse yourself in a cultural journey.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Begin Our Journey
        </button>
      </div>
    </section>
  );
}

export default HeroSection;