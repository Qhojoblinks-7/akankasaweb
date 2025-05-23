// src/pages/ResearchPage.jsx (or wherever you prefer to put pages)
import React from 'react';
import Navbar from '../home/Header'; // Assuming you have a general Navbar/Header
import Footer from '../home/Footer'; // Assuming you will create a Footer

// Import components for each section of the Research page
import ResearchHero from '../research/ResearchHero';
import ResearchSearchBar from '../research/ResearchSearchBar';
import ResourceLibrary from '../research/ResourceLibrary';
import InteractiveModules from '../research/InteractiveModules';
import ResearchForum from '../research/ResearchForum';
import ContributeSection from '../research/ContributeSection';

function ResearchPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar /> {/* Your main header/navigation */}

      <main>
        <ResearchHero />
        <ResearchSearchBar />
        <ResourceLibrary />
        <InteractiveModules />
        <ResearchForum />
        <ContributeSection />
      </main>

      <Footer /> {/* Your site footer */}
    </div>
  );
}

export default ResearchPage;