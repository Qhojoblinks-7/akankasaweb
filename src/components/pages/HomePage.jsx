// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../ui/home/HeroSection';
import AboutSection from '../ui/home/AboutSection';
import FeatureSection from '../ui/home/FeatureSection';
import TestimonialSlider from '../ui/home/TestimonialCard';
import CallToAction from '../ui/home/CallToAction';
import Header from '../ui/home/Header';
import Footer from '../ui/home/Footer';

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
