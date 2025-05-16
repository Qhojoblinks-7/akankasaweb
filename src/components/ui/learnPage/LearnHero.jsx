import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

function LearnHero() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50"> {/* Added a light background */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"> {/* Using container for better centering and gap */}
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl mt-10 lg:text-5xl  text-black mb-6">
            Embark on Your Akan <br />
            <span className="text-gray-600 underline lg:text-6xl font-bold">Language Journey</span> {/* More vibrant emphasis */}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Unlock the beauty of the Akan language with our comprehensive learning resources.
            Start speaking and understanding today!
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center md:justify-start">
            <Link
              to="/learn"
              className="bg-gray-700 hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-md transition flex items-center gap-2 shadow-md"
            >
              Start Learning <PlayIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 mt-4 sm:mt-0 px-6 py-3 text-gray-700 underline"
            >
              Explore Our Resources <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start text-gray-600 text-sm">
            <div className="flex items-center gap-2 py-2 pr-4 border-r border-gray-300">
              <CheckCircleIcon className="h-5 w-5 text-gray-500" /> {/* More positive color */}
              <span>Structured Lessons</span>
            </div>
            <div className="flex items-center gap-2 py-2 pl-4">
              <ShieldCheckIcon className="h-5 w-5 text-yellow-500" />
              <span>Progress Tracking</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2">
          <img
            className="max-w-full rounded-lg shadow-lg" 
            src="/src/assets/hero2.jpeg" // Replace with an appropriate image
            alt="Akan Language Learning Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default LearnHero;