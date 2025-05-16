import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const AboutSection = () => {
  const links = [
    { name: 'Learn Akan', href: '/learn' },
    { name: 'Akan Culture', href: '/culture' },
    { name: 'Akan Dictionary', href: '/dictionary' },
    { name: 'Research', href: '/research' },
    { name: 'Community', href: '/community' },
  ];

  const stats = [
    { name: 'Accessible Learning Modules', value: 'Beginner-Friendly' },
    { name: 'Cultural Heritage Items', value: 'Extensive Collection' },
    { name: 'Dictionary Entries', value: 'Comprehensive' },
    { name: 'Research Resources', value: 'Growing Database' },
    { name: 'Community Members', value: 'Connecting Globally' },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-black py-24 sm:py-32 " id="about-section">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Explore the Akan Language and Culture
          </h2>
          <p className="mt-6 text-lg font-medium text-gray-300 sm:text-xl">
            Discover the richness of the Akan language, delve into its vibrant cultural heritage, and connect with a global community dedicated to preserving and promoting this unique legacy.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-yellow-400 transition">
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>

          {/* Statistics Section */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;