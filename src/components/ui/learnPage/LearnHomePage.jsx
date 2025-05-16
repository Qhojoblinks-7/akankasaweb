import React from 'react';
import LearnHeader from '../learnPage/LearnHeader'
import LearnHero from '../learnPage/LearnHero';
import LearningLevels from '../learnPage/LearningLevels';
import FeaturedResources from '../learnPage/FeaturedResources'; // Akan-specific resources
import LearnTestimonials from '../learnPage/Testimonials'; // Testimonials from Akan learners
import LearnCallToAction from '../learnPage/LearnCallToAction'; // CTA to start learning Akan
import FAQ from '../learnPage/FQA'; // Akan-specific FAQs
import Footer from '../home/Footer';

const LearnHomePage = () => {
  return (
    <>
      <LearnHeader />
      <LearnHero />
      <LearningLevels />
      <FeaturedResources />
      <LearnTestimonials />
      <LearnCallToAction />
      <FAQ />
      <Footer/>
    </>
  );
};

export default LearnHomePage;