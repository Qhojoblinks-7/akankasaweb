import React from 'react';
import LevelHeroSection from '../level/LevelHeroSection';
import Testimonials from '../learnPage/Testimonials';
import Footer from '../home/Footer';
import sankofa from '../../../assets/sankofa-medium.png'; // Import your image
import LearnHeader from '../learnPage/LearnHeader';
import CourseLinksSection from '../level/CourseLinksSection'; // Import the template

const IntermediateLevelPage = () => {
  const intermediateLearningObjectives = [
    { title: 'Building Basic Sentence Structures', description: 'Learn to construct simple and grammatically correct sentences in Akan, focusing on subject-verb-object order.' },
    { title: 'Expanding Vocabulary for Everyday Topics', description: 'Acquire a wider range of vocabulary related to daily activities, family, food, and common interactions.' },
    { title: 'Understanding and Using Common Verb Conjugations', description: 'Grasp the basics of Akan verb conjugations in the present, past, and future tenses.' },
    { title: 'Asking and Answering Simple Questions', description: 'Develop the ability to ask and respond to straightforward questions on familiar topics.' },
    { title: 'Exploring Cultural Practices: Greetings and Politeness', description: 'Gain insights into Akan cultural norms related to greetings, politeness, and social interactions.' },
  ];

  const intermediateSkillsGained = [
    'Formulate basic Akan sentences with correct word order.',
    'Understand and use a broader vocabulary for everyday communication.',
    'Apply common Akan verb conjugations in different tenses.',
    'Engage in simple question-and-answer exchanges.',
    'Demonstrate an understanding of basic Akan greetings and polite expressions.',
  ];

  return (
    <div>
      <LearnHeader />
      <LevelHeroSection
        level="Intermediate"
        adinkraSymbol={sankofa} // Pass the image path for Intermediate
        mainTopic="Developing Conversational Skills and Basic Fluency in Akan"
        description="This intermediate level builds upon your foundational knowledge, focusing on developing practical conversational skills and a basic level of fluency in Akan for everyday situations."
        studentCount={350}
        courseSeriesCount={7}
        views={9500}
        lessonLevel="Conversational"
      />
      <CourseLinksSection
        levelName="Intermediate"
        learningObjectives={intermediateLearningObjectives}
        skillsGained={intermediateSkillsGained}
      />
      <Testimonials level="intermediate" />
      <Footer />
    </div>
  );
};

export default IntermediateLevelPage;