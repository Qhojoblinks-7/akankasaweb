// src/culture/components/StayConnectedSection.js
import React from 'react';

function StayConnectedSection() {
  return (
    <section className="bg-yellow-500 rounded-lg shadow-lg p-6 md:p-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Connected to Akan Culture</h2>
      <p className="text-lg mb-6">
        Join our community to receive updates, news, and exclusive content about Akan traditions.
      </p>
      <button className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
        Join Now
      </button>
    </section>
  );
}

export default StayConnectedSection;