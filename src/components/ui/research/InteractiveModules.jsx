// src/research/InteractiveModules.jsx
import React from 'react';
import InteractiveModuleCard from './InteractiveModuleCard'; // Import the InteractiveModuleCard component

const InteractiveModules = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
        Interactive Cultural Modules
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Akan Phonology Timeline Module */}
        <InteractiveModuleCard
          title="Akan Phonology Timeline"
          description="Explore interactive timelines illustrating key changes and developments in Akan phonology across centuries."
          type="Phonology"
          link="#"
        />

        {/* Cultural Practice Simulator Module */}
        <InteractiveModuleCard
          title="Cultural Practice Simulator"
          description="Engage with immersive simulations of Akan ceremonies and rituals for research and teaching."
          type="Practice Simulator"
          link="#"
        />

        {/* Animated Akan Kinship Diagrams Module */}
        <InteractiveModuleCard
          title="Animated Akan Kinship Diagrams"
          description="Interact with animated diagrams detailing Akan social hierarchies and kinship structures."
          type="Kinship Diagrams"
          link="#"
        />
      </div>
    </section>
  );
};

export default InteractiveModules;