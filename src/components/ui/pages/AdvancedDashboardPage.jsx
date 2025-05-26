import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DashboardTemplate from '../courseContentUi/DashboardTemplate';
import DashboardMobileTemplate from '../courseContentUi/DashboardMobileTemplate'; // Import the mobile template
import { courseData } from '../../data/courseData'; // Assuming courseData is in this path

const AdvancedDashboardPage = () => {
  const { level: currentLevelSlug } = useParams();
  const [levelData, setLevelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    const fetchLevelData = () => {
      setLoading(true);
      setError(null);
      setLevelData(null);

      setTimeout(() => {
        if (currentLevelSlug && courseData[currentLevelSlug]) {
          setLevelData(courseData[currentLevelSlug]);
          setLoading(false);
        } else if (currentLevelSlug) {
          setError(`Level '${currentLevelSlug}' not found.`);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }, 500);
    };

    fetchLevelData();
  }, [currentLevelSlug]);

  if (loading) {
    return <div>Loading course content...</div>;
  }

  if (error) {
    return <div>Error loading course content: {error}</div>;
  }

  if (!levelData) {
    return <div>Please select a course from the sidebar.</div>;
  }

  const modules = levelData?.modules || [];

  const transformedModules = modules.map(module => ({
    id: module.id,
    title: module.title,
    subtopics: module.subtopics.map(subtopic => ({
      id: subtopic.id,
      title: subtopic.title,
      videos: subtopic.videos || [],
      readings: subtopic.readings || [],
    })),
    totalVideoHours: module.subtopics?.reduce((sum, st) => sum + (st.videos?.length || 0), 0) || 0,
    totalReadingHours: module.subtopics?.reduce((sum, st) => sum + (st.readings?.length || 0), 0) || 0,
  }));

  const col2Options = [
    { value: 'all', label: 'All Content' },
    { value: 'readings', label: 'Readings' },
    { value: 'videos', label: 'Videos' },
    // Add more options related to content type or sorting
  ];

  return (
    <>
      {isMobile ? (
        <DashboardMobileTemplate
          col2Label="Filter Content"
          col2Options={col2Options}
          categoryTitle={levelData.title}
          modules={transformedModules}
          overview={levelData.overview}
          totalVideoHours={levelData.totalVideoHours}
          totalReadingHours={levelData.totalReadingHours}
        />
      ) : (
        <DashboardTemplate
          col2Label="Filter Content"
          col2Options={col2Options}
          categoryTitle={levelData.title}
          modules={transformedModules}
          overview={levelData.overview}
          totalVideoHours={levelData.totalVideoHours}
          totalReadingHours={levelData.totalReadingHours}
        />
      )}
    </>
  );
};

export default AdvancedDashboardPage;