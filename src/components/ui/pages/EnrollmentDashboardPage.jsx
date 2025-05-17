import React from 'react';
import ProgressCard from '../ProgressCard';
import OtherLevelsSection from '../OtherLevelsSection';

const EnrollmentDashboardPage = () => {
  // Assuming you fetch the user's progress for the enrolled level
  const userProgress = 35; // Example progress

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Learning Dashboard</h1>
        <ProgressCard level="Beginner" progress={userProgress} />
        <OtherLevelsSection />
      </div>
    </div>
  );
};

export default EnrollmentDashboardPage;