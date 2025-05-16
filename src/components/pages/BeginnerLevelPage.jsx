import React from 'react';
import LevelHeroSection from '../ui/level/LevelHeroSection';
import CourseLinksSection from '../ui/level/CourseLinksSection';
import Testimonials from '../ui/learnPage/Testimonials';
import Footer from '../ui/home/Footer';
import gyeNyame from '../../assets/gye-nyame-medium.png'; // Import your image
import LearnHeader from '../ui/learnPage/LearnHeader';

const BeginnerLevelPage = () => {
  const beginnerLearningObjectives = [
    { title: 'Akan Alphabet and Pronunciation', description: 'Master the Akan alphabet and learn the correct pronunciation of vowels and consonants.' },
    { title: 'Basic Greetings and Introductions', description: 'Learn essential Akan greetings for different times of the day and how to introduce yourself and others.' },
    { title: 'Numbers, Days, and Months', description: 'Acquire the vocabulary for numbers, days of the week, and months of the year in Akan.' },
    { title: 'Simple Sentence Formation', description: 'Understand the basic structure of Akan sentences and learn to create simple statements and questions.' },
  ];

  const beginnerSkillsGained = [
    'Pronounce Akan words and phrases accurately.',
    'Engage in basic greetings and introductions in Akan.',
    'Understand and use Akan numbers, days, and months.',
    'Formulate and understand simple Akan sentences.',
  ];

  return (
    <div>
      <LearnHeader />
      <LevelHeroSection
        level="Beginner"
        adinkraSymbol={gyeNyame} // Pass the image path
        mainTopic="Introduction to Akan Language Fundamentals"
        description="This level introduces you to the basic building blocks of the Akan language, including greetings, pronunciation, and essential vocabulary."
        studentCount={1250}
        courseSeriesCount={5}
        views={25000}
        lessonLevel="Elementary"
      />
      <CourseLinksSection
        levelName="Beginner"
        learningObjectives={beginnerLearningObjectives}
        skillsGained={beginnerSkillsGained}
      />
      <Testimonials level="beginner" />
      <Footer />
    </div>
  );
};

export default BeginnerLevelPage;