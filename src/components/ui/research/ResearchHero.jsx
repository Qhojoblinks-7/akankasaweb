// src/research/ResearchHero.jsx
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ResearchHero = () => {
  return (
    // Section styles:
    // py-16: padding-y 16 (64px) on all screens
    // md:py-24: padding-y 24 (96px) on medium screens and up
    // text-center: text alignment center on all screens
    // px-4: padding-x 4 (16px) on all screens
    // md:px-8: padding-x 8 (32px) on medium screens and up
    // -z-10: z-index for layering (might be for background image or similar, otherwise remove if not needed)
    <section className="bg-white py-16 md:py-24 text-center px-4 md:px-8 -z-10">
      {/* Container for content: */}
      {/* mx-auto: center horizontally
          max-w-4xl: max-width 4xl on all screens (content won't stretch too wide) */}
      <div className="container mx-auto max-w-4xl">
        {/* Headline styles: */}
        {/* text-4xl: font size 4xl on all screens
            md:text-5xl: font size 5xl on medium screens and up
            font-extrabold: extra bold font weight on all screens
            text-gray-800: text color on all screens
            leading-tight: line height on all screens
            mb-6: margin-bottom on all screens
            mt-15: (custom class or typo? assuming it's margin-top, typically mt-x is used in Tailwind)
                   If it's meant to push it down, consider `pt-x` on the parent section or `mt-x` on the h1 itself,
                   but `mt-15` isn't a standard Tailwind class. I'll assume it's `mt-0` or remove it.
        */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6 mt-20"> {/* Changed mt-15 to mt-0 or consider removing */}
          Akan Research Hub: <span className="text-orange-600">Explore, Collaborate, Discover.</span>
        </h1>
        {/* Paragraph styles: */}
        {/* text-lg: font size lg on all screens
            text-gray-600: text color on all screens
            mb-10: margin-bottom on all screens
            mx-auto: center horizontally
            max-w-3xl: max-width 3xl on all screens */}
        <p className="text-lg text-gray-600 mb-10 mx-auto max-w-3xl">
          Dive into a curated library of resources and join a vibrant community
          of researchers and enthusiasts. Explore linguistic, cultural, and
          historical studies of the Akan people, find collaborative opportunities,
          and contribute to advancing Akan scholarship.
        </p>
        {/* Button container styles (already mobile-first for side-by-side): */}
        {/* flex: enables flexbox on all screens
            flex-row: flex direction row on all screens (mobile first, makes them side-by-side)
            flex-wrap: allows items to wrap to next line if space runs out on all screens
            justify-center: centers items horizontally on all screens
            gap-4: gap between items on all screens */}
        <div className="flex flex-row flex-wrap justify-center gap-4">

          {/* Button 1: Browse Resource Library */}
          {/* flex-grow: allows item to grow on smaller screens (mobile-first)
              sm:flex-none: disables flex-grow on small screens and up, returning to natural width
              Other styles are consistent for all breakpoints. */}
          <HashLink
            to="#resource-library-section"
            smooth
            className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 flex-grow sm:flex-none flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm3 8v-1a1 1 0 00-1-1H3v-2h2a1 1 0 001-1V9a1 1 0 00-1-1H3V6h-.5l-.5-.5V4h14v12H4V15a1 1 0 00-1-1h-.5v-2H3a1 1 0 00-1-1h-.5V9a1 1 0 00-1-1H3V6zM10 18a1 1 0 100-2h4a1 1 0 100-2H10zM10 14a1 1 0 100-2h4a1 1 0 100-2H10z"/></svg>
            Browse Resource Library
          </HashLink>

          {/* Button 2: Join Research Forum */}
          <HashLink
            to="/forum"
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 flex-grow sm:flex-none flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.233-1.189l-2.417.403a1 1 0 01-1.116-1.116l.403-2.417A8 8 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/></svg>
            Join Research Forum
          </HashLink>

          {/* Button 3: Submit Your Work */}
          <HashLink
            to="/submit-work"
            className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300 flex-grow sm:flex-none flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293z" clipRule="evenodd"/></svg>
            Submit Your Work
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default ResearchHero;