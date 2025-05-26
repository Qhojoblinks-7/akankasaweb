// src/research/ResourceLibrary.jsx
import React from 'react';
import ResourceCard from './ResourceCard';
import { resourcesData, interactiveModulesData } from '../../data/resourcesData';

const ResourceLibrary = () => {
  const beginnerResources = resourcesData.filter(res => res.category === "Beginner");
  const intermediateResources = resourcesData.filter(res => res.category === "Intermediate");
  const advancedResources = resourcesData.filter(res => res.category === "Advanced / Academic");
  const interactiveModules = interactiveModulesData;

  return (
    // Add the id="resource-library-section" here
    <section id="resource-library-section" className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
        Resource Library
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Beginner Resources Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
              <path d="M10 9a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100 2h2a1 1 0 100-2H9z" />
            </svg>
            Beginner Resources
          </h3>
          <div className="space-y-4">
            {beginnerResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                {...resource}
              />
            ))}
          </div>
        </div>

        {/* Intermediate Resources Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
            </svg>
            Intermediate Resources
          </h3>
          <div className="space-y-4">
            {intermediateResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                {...resource}
              />
            ))}
          </div>
        </div>

        {/* Advanced / Academic Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
              <path d="M10 9a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100 2h2a1 1 0 100-2H9z" />
            </svg>
            Advanced / Academic
          </h3>
          <div className="space-y-4">
            {advancedResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                {...resource}
              />
            ))}
          </div>
        </div>
      </div>

      {interactiveModules.length > 0 && (
          <section className="mb-12 mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 1a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd"></path>
              </svg>
              Interactive Cultural Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interactiveModules.map(module => (
                <ResourceCard
                  key={module.id}
                  {...module}
                />
              ))}
            </div>
          </section>
        )}
    </section>
  );
};

export default ResourceLibrary;