// src/components/Hero.jsx
import React from 'react';
import heroImage from '../../../assets/hero.jpg'; // Assuming you'll add an image here

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Area */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Explore the Rich Tapestry of Akan Culture
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Journey through the vibrant traditions, storied history, and profound artistry of the Akan people. Discover, learn, and celebrate a heritage that inspires and endures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition duration-300">
              Start Your Akan Culture Journey
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-700 px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition duration-300">
              Start Exploring
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Replace with your actual image path */}
          <img
            src={heroImage} // Placeholder image
            alt="Akan People"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: '400px' }} // Adjust height as needed
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;