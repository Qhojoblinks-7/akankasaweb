import React, { useState, useEffect } from 'react';

// Import the components we created together
import Hero from '../culture/HeroSection';
import TimeHonoredTraditions from '../culture/TimeHonoredTraditionsSection';
import AkanHistory from '../culture/AkanHistory';
import AkanArtistry from '../culture/AkanArtistry';
import AkanMusicDance from '../culture/AkanMusicDance';
import AkanSociety from '../culture/AkanSociety';
import AkanFolklore from '../culture/AkanFolklore';


import CultureNavigation from '../culture/CultureNavigation'; // Keep this for the internal tabs if needed
import Footer from '../home/Footer';

function CulturePage() {
  // Define refs for the sections you want to scroll to or observe
  const sectionRefs = React.useMemo(() => ({
    Overview: React.createRef(), // Main content start
    TimeHonoredTraditions: React.createRef(), // Maps to "Akan Heritage" or similar
    AkanHistory: React.createRef(),
    AkanArtistry: React.createRef(), // Maps to "Adinkra Symbols" if Adinkra is prominent here
    AkanFolklore: React.createRef(), // Maps to "Values & Proverbs" or similar
    // Add more refs if you want to link directly to other sections like Music, Society
  }), []);

  // Define the navigation tabs, linking them to the refs
  // Adjust these names to match what you want in your CultureNavigation component
  const navigationTabs = React.useMemo(() => [
    { name: 'Overview', ref: sectionRefs.Overview },
    { name: 'Traditions', ref: sectionRefs.TimeHonoredTraditions }, // Maps to "Akan Heritage"
    { name: 'History', ref: sectionRefs.AkanHistory },
    { name: 'Artistry', ref: sectionRefs.AkanArtistry }, // Maps to "Adinkra Symbols"
    { name: 'Folklore', ref: sectionRefs.AkanFolklore }, // Maps to "Values & Proverbs"
    // Add more tabs as needed for other sections
  ], [sectionRefs]);

  const [activeTab, setActiveTab] = useState(navigationTabs[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const targetRef = navigationTabs.find(tab => tab.name === tabName)?.ref;
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Optional: Intersection Observer to update active tab on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const foundTab = navigationTabs.find(tab => tab.ref.current && tab.ref.current.id === entry.target.id);
            if (foundTab) {
              setActiveTab(foundTab.name);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -80% 0px' }
    );

    navigationTabs.forEach(tab => {
      if (tab.ref.current) {
        // Assign an ID to the observed DOM element. This ID should match the ref key.
        tab.ref.current.id = tab.name.replace(/\s+/g, ''); // Simple ID from tab name, e.g., "TimeHonoredTraditions" -> "TimeHonoredTraditions"
        observer.observe(tab.ref.current);
      }
    });

    return () => {
      navigationTabs.forEach(tab => {
        if (tab.ref.current) {
          observer.unobserve(tab.ref.current);
        }
      });
    };
  }, [navigationTabs]);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Assuming Navbar is your main site header */}

      {/* Hero section from our previous steps */}
      <Hero />

      {/* Culture Navigation for internal page tabs */}
      {/* Pass the updated navigationTabs with the correct refs */}
      <CultureNavigation activeTab={activeTab} onTabClick={handleTabClick} navigationTabs={navigationTabs} />


      <div ref={sectionRefs.Overview} id="Overview" className="container mx-auto px-4 py-8 md:py-12">

        

        <TimeHonoredTraditions sectionRef={sectionRefs.TimeHonoredTraditions} id="Traditions" />

        {/* Akan History Section */}
        <AkanHistory sectionRef={sectionRefs.AkanHistory} id="History" />

        {/* Akan Artistry Section */}
        <AkanArtistry sectionRef={sectionRefs.AkanArtistry} id="Artistry" />


        <AkanMusicDance /> 


        <AkanSociety />

        {/* Tales of Wisdom: Akan Folklore Section */}
        <AkanFolklore sectionRef={sectionRefs.AkanFolklore} id="Folklore" />
        <Footer/>
      </div>
    </div>
  );
}

export default CulturePage;