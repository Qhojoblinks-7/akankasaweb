// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../home/HeroSection';
import AboutSection from '../home/AboutSection';
import FeatureSection from '../home/FeatureSection';
import TestimonialSlider from '../home/TestimonialCard';
import CallToAction from '../home/CallToAction';
import Header from '../home/Header';
import Footer from '../home/Footer';

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <TestimonialSlider />
      <CallToAction />
      <Footer/>
    </main>
  );
};

export default HomePage;
