import React from 'react';
import LevelHeroSection from '../level/LevelHeroSection';
import Testimonials from '../learnPage/Testimonials';
import Footer from '../home/Footer';
import sankofa from '../../../assets/sankofa-medium.png'; // Import your image
import LearnHeader from '../learnPage/LearnHeader';
import CourseLinksSection from '../level/CourseLinksSection'; // Import the template

const AdvancedLevelPage = () => {
  const advancedLearningObjectives = [
    { title: 'Mastering Complex Grammar', description: 'Achieve a deep understanding of advanced Akan grammar, including conditional clauses, passive voice, and indirect speech.' },
    { title: 'Understanding Idiomatic Expressions and Proverbs', description: 'Learn and interpret common Akan idiomatic expressions and proverbs, enriching your understanding of the language and culture.' },
    { title: 'Engaging in Debates and Discussions', description: 'Develop the ability to participate in discussions and debates on various topics, expressing your opinions and arguments fluently.' },
    { title: 'Comprehending Authentic Akan Texts', description: 'Improve your reading comprehension of authentic Akan texts, such as news articles, short stories, and traditional narratives.' },
    { title: 'Cultural Nuances: Traditions and History', description: 'Explore the deeper nuances of Akan culture, including traditional ceremonies, historical events, and the significance of oral tradition.' },
  ];

  const advancedSkillsGained = [
    'Engage in fluent and nuanced conversations on a wide range of topics.',
    'Understand and effectively use complex Akan grammatical structures.',
    'Interpret and apply Akan idiomatic expressions and proverbs in communication.',
    'Comprehend and analyze authentic Akan written and spoken materials.',
    'Demonstrate a comprehensive understanding of Akan cultural traditions and history.',
  ];

  return (
    <div>
      <LearnHeader />
      <LevelHeroSection
        level="Advanced"
        adinkraSymbol={sankofa} // Pass the image path for Advanced
        mainTopic="Achieving Fluency and Cultural Proficiency in Akan"
        description="This advanced level aims to equip you with near-native fluency in Akan, enabling you to understand complex grammar, interpret cultural nuances, and engage in sophisticated conversations."
        studentCount={420}
        courseSeriesCount={9}
        views={12000}
        lessonLevel="Fluent"
      />
      <CourseLinksSection
        levelName="Advanced"
        learningObjectives={advancedLearningObjectives}
        skillsGained={advancedSkillsGained}
      />
      <Testimonials level="advanced" />
      <Footer />
    </div>
  );
};

export default AdvancedLevelPage;