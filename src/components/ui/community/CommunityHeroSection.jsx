// src/community/components/CommunityHeroSection.js
import React from 'react';
import { FaComments, FaCalendarAlt } from 'react-icons/fa'; // Icons for the buttons

function CommunityHeroSection() {
  return (
    <section
      className="py-16 text-center"
      style={{
        background: 'linear-gradient(to right, #B8860B, #F8F8F8)', // Ashanti Gold to Off-white gradient
        color: '#2C3E50', // A dark blue/grey for better contrast on gradient
      }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-800"> {/* Heading color remains specific */}
          Connect with the Akan Kasa ne Amammere Community.
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Welcome! Join a vibrant space to ask questions, share insights, and
          celebrate Akan language and culture together. Engage in discussions,
          discover upcoming events, and be part of something meaningful.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-800 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 flex items-center justify-center shadow-md">
            <FaComments className="mr-2" /> Join the Forums
          </button>
          <button className="bg-white hover:bg-gray-50 text-orange-800 border border-orange-800 font-bold py-3 px-6 rounded-full text-lg transition duration-300 flex items-center justify-center shadow-md">
            <FaCalendarAlt className="mr-2" /> View Events Calendar
          </button>
        </div>
      </div>
    </section>
  );
}

export default CommunityHeroSection;