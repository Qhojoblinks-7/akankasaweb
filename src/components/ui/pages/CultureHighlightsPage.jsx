import React, { useState, useEffect } from 'react';

// Import all the newly created section components
import HeroSection from '../culture//HeroSection';
import CultureNavigation from '../culture/CultureNavigation';
import AkanHeritageSection from '../culture/AkanHeritageSection';
import ExploreCultureGrid from '../culture/ExploreCultureGrid';
import AdinkraSymbolsSection from '../culture/AdinkraSymbolsSection';
import CulturalRhythmsVideoSection from '../culture/CulturalRhythmsVideoSection';
import ValuesProverbsSection from '../culture/ValuesProverbsSection';
import StayConnectedSection from '../culture/StayConnectedSection';
import Header from '../home/Header';

function CulturePage() {
  const sectionRefs = React.useMemo(() => ({
    Overview: React.createRef(), // This will refer to the top of the main content area
    AkanHeritage: React.createRef(),
    AdinkraSymbols: React.createRef(),
    ValuesProverbs: React.createRef(),
    // Map these to actual sections in the main content if you want direct tab links
    // Otherwise, 'Overview' can just be the general landing point
  }), []);

  // For the navigation tabs, you can manually define them if they don't map directly to all sections,
  // or dynamically generate them from `sectionRefs` keys.
  const navigationTabs = React.useMemo(() => [
    { name: 'Overview', ref: sectionRefs.Overview },
    { name: 'Akan Heritage', ref: sectionRefs.AkanHeritage },
    { name: 'Adinkra Symbols', ref: sectionRefs.AdinkraSymbols },
    { name: 'Values & Proverbs', ref: sectionRefs.ValuesProverbs },
    // Add more tabs as they correspond to main sections.
    // The images also show 'Traditional Attire', 'Rites of Passage', 'Traditional Attire'
    // but these are sub-sections of 'Explore Akan Culture'. You might not need direct tabs for them.
  ], [sectionRefs]);

  // Initialize active tab based on the first tab in your navigationTabs
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
            // Find the tab name corresponding to the intersected section ID
            const foundTab = navigationTabs.find(tab => tab.ref.current && tab.ref.current.id === entry.target.id);
            if (foundTab) {
              setActiveTab(foundTab.name);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -80% 0px' } // Adjust thresholds/margins as needed
    );

    // Observe each section that has a ref
    navigationTabs.forEach(tab => {
      if (tab.ref.current) {
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
  }, [navigationTabs]); // Dependency array includes navigationTabs

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header/>
      <HeroSection />

      {/* Pass sectionRefs to CultureNavigation so it knows all possible scroll targets */}
      <CultureNavigation activeTab={activeTab} onTabClick={handleTabClick} sectionRefs={sectionRefs} />

      <div ref={sectionRefs.Overview} className="container mx-auto px-4 py-8 md:py-12"> {/* Overview section starts here */}
        <AkanHeritageSection sectionRef={sectionRefs.AkanHeritage} />
        <ExploreCultureGrid />
        <AdinkraSymbolsSection sectionRef={sectionRefs.AdinkraSymbols} />
        <CulturalRhythmsVideoSection />
        <ValuesProverbsSection sectionRef={sectionRefs.ValuesProverbs} />
        <StayConnectedSection />
      </div>
    </div>
  );
}

export default CulturePage;