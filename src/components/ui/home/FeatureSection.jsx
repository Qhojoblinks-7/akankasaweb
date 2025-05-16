import React from 'react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Learn Basic Akan',
    description:
      'Start your journey with accessible beginner resources: alphabet, greetings, and essential phrases.',
    icon: BookOpenIcon,
  },
  {
    name: 'Explore Akan Culture',
    description:
      'Discover Akan traditions, history, arts, music, and social customs in a rich cultural tapestry.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Akan Dictionary',
    description:
      'Access a comprehensive Akan↔English dictionary with example sentences and audio pronunciations.',
    icon: LightBulbIcon,
  },
  {
    name: 'Support Research',
    description:
      'Delve into in-depth linguistic resources and materials designed for Akan language research.',
    icon: AcademicCapIcon,
  },
];

const FeatureSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-[url('/src/assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg')] py-24 sm:py-32">
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-lg bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-yellow-600">
            Explore Akan Heritage
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Discover the Heart of Akan
          </p>
          <p className="mt-6 text-lg text-gray-200">
            Unlock the beauty and depth of Akan language and culture. From basic learning to advanced research, our platform provides the resources you need.
          </p>
        </div>

        {/* Feature Grid */}
        <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.name} className="relative pl-16 flex items-center"> {/* Added flex and items-center */}
                <dt className="text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-200">
                  {feature.description}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default FeatureSection;