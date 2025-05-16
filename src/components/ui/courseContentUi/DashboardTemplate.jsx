import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Logo from '../../../assets/logo1.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { PlayIcon, BookOpenIcon } from '@heroicons/react/24/outline'; // Outline icons
import { courseData } from '../../../data/courseData';

const DashboardTemplate = ({
  col2Label = 'Content Options',
  col2Options,
}) => {
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isCol2Open, setIsCol2Open] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [isSubtopicVisible, setIsSubtopicVisible] = useState({});
  const { level: currentLevelSlug, moduleId: currentModuleId } = useParams();
  const [levelData, setLevelData] = useState(null);
  const location = useLocation();

  // Proverb and Festivals
  const akanProverb = "Yɛn ara yɛn asase yi.";
  const akanFestivals = [
    { name: "Odwira Festival", date: "September (varies)" },
    { name: "Aboakyir Festival", date: "May (varies)" },
  ];

  useEffect(() => {
    if (currentLevelSlug) {
      setLevelData(courseData[currentLevelSlug] || null);
    } else {
      setLevelData(null);
    }
  }, [currentLevelSlug]);

  useEffect(() => {
    if (currentModuleId) {
      setSelectedModuleId(currentModuleId);
    } else if (levelData?.modules?.length > 0) {
      setSelectedModuleId(levelData.modules[0].id);
    } else {
      setSelectedModuleId(null);
    }
  }, [currentModuleId, levelData]);

  const toggleModules = useCallback(() => setIsModulesOpen(prevState => !prevState), []);
  const toggleCol2 = useCallback(() => setIsCol2Open(prevState => !prevState), []);
  const toggleOverview = useCallback(() => setIsOverviewOpen(prevState => !prevState), []);

  const handleModuleSelect = useCallback((moduleId) => {
    setSelectedModuleId(moduleId);
    if (!currentModuleId && currentLevelSlug) {
      window.history.pushState({}, '', `/dashboard/${currentLevelSlug}/module/${moduleId}`);
    }
    setIsSubtopicVisible({});
  }, [currentLevelSlug, currentModuleId]);

  const toggleSubtopicVisibility = useCallback((subtopicId) => {
    setIsSubtopicVisible(prevState => ({
      ...prevState,
      [subtopicId]: !prevState[subtopicId],
    }));
  }, []);

  const currentModuleDetails = levelData?.modules?.find(module => module.id === selectedModuleId);
  const totalVideoHours = levelData?.totalVideoHours || 0;
  const totalReadingHours = levelData?.totalReadingHours || 0;
  const modules = levelData?.modules || [];
  const courseTitle = levelData?.title || 'Dashboard';

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-black fixed h-full text-white w-64 p-4 flex flex-col">
        <div className="mb-6 mt-7 flex justify-center">
          <Link to="/dashboard" className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        {courseTitle && (
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold">{courseTitle}</h2>
          </div>
        )}
        <div className="mb-4">
          <button
            onClick={toggleModules}
            className="w-full flex items-center justify-between py-2 px-3 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            <span>Modules</span>
            {modules && <ChevronDownIcon className={`h-4 w-4 transition-transform ${isModulesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />}
          </button>
          {isModulesOpen && modules && (
            <div className="mt-2">
              <ul>
                {modules.map((module) => (
                  <li key={module.id}>
                    <button
                      onClick={() => handleModuleSelect(module.id)}
                      className={`w-full text-left block py-2 px-4 rounded-md hover:bg-gray-700 cursor-pointer ${selectedModuleId === module.id ? 'bg-gray-700' : ''}`}
                    >
                      {module.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mb-4">
          <Link
            to="/forum"
            className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${location.pathname === '/forum' ? 'bg-gray-700' : ''}`}
          >
            Discussion Forum
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/resources"
            className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${location.pathname === '/resources' ? 'bg-gray-700' : ''}`}
          >
            Resources
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex mt-20 p-4">
        {/* Left Section */}
        <section className="w-1/4 ml-66 mr-4 flex flex-col">
          <div className="bg-white rounded-md shadow-sm p-4 mb-4">
            <h4 className="text-md font-semibold mb-2">Akan Proverb</h4>
            <p className="text-gray-700">{akanProverb}</p>
          </div>
          <div className="bg-white rounded-md shadow-sm p-4 mb-4">
            <h4 className="text-md font-semibold mb-2">Akan Festivals</h4>
            <ul>
              {akanFestivals.map(festival => (
                <li key={festival.name} className="mb-2">
                  <strong className="text-gray-700">{festival.name}:</strong> <span className="text-gray-600">{festival.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <button
              onClick={toggleCol2}
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-[#b19b6b] focus:border-[#b19b6b] flex items-center justify-between w-full"
            >
              <span>{col2Label}</span>
              <ChevronDownIcon className={`h-5 w-5 text-gray-400 ${isCol2Open ? 'transform rotate-180' : ''}`} />
            </button>
            {isCol2Open && col2Options && (
              <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button">
                  {col2Options.map((option) => (
                    <Link
                      key={option.value}
                      to="#" // Replace with actual navigation if needed
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 bg-white rounded-md shadow-sm p-4">
          <div className="relative">
            <button
              onClick={toggleOverview}
              className="w-full flex items-center justify-between py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <span className="font-semibold">{courseTitle || 'Course Overview'}</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOverviewOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div className={`mt-2 overflow-hidden transition-all duration-300 ${isOverviewOpen ? 'max-h-[1000px] p-4' : 'max-h-0'}`}>
              <p className="text-gray-600">{levelData?.overview || 'No course overview available.'}</p>
              <p className="mt-2 text-gray-600 flex items-center">
                <PlayIcon className="h-4 w-4 mr-1 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" />
                <strong>Total Video Hours:</strong> {totalVideoHours} hrs
              </p>
              <p className="text-gray-600 flex items-center">
                <BookOpenIcon className="h-4 w-4 mr-1 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" />
                <strong>Total Reading Hours:</strong> {totalReadingHours} hrs
              </p>

              {currentModuleDetails && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">{currentModuleDetails.title} Details</h3>
                  {currentModuleDetails.subtopics?.map((subtopic) => (
                    <div key={subtopic.id} className="relative mb-2 p-3 rounded-md bg-gray-100">
                      <button
                        onClick={() => toggleSubtopicVisibility(subtopic.id)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h4 className="text-md font-semibold">{subtopic.title}</h4>
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isSubtopicVisible[subtopic.id] ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      <div className={`mt-2 overflow-hidden transition-all duration-300 ${isSubtopicVisible[subtopic.id] ? 'max-h-20 p-2' : 'max-h-0'}`}>
                        {subtopic.videos?.map(video => (
                          <p key={video.id} className="text-gray-600 flex items-center">
                            <PlayIcon className="h-4 w-4 mr-1 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" />
                            <Link
                              to={`/dashboard/${currentLevelSlug}/module/${selectedModuleId}/video/${video.id}`}
                              className="hover:underline text-gray-600"
                            >
                              <strong>Video:</strong> {video.title}
                            </Link>
                          </p>
                        ))}
                        {subtopic.readings?.map(reading => (
                          <p key={reading.id} className="text-gray-600 flex items-center">
                            <BookOpenIcon className="h-4 w-4 mr-1 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" />
                            <Link
                              to={`/dashboard/${currentLevelSlug}/module/${selectedModuleId}/reading/${reading.id}`}
                              className="hover:underline text-gray-600"
                            >
                              <strong>Reading:</strong> {reading.title}
                            </Link>
                          </p>
                        ))}
                        {!subtopic.videos?.length && !subtopic.readings?.length && (
                          <p className="text-gray-600">No content for this subtopic.</p>
                        )}
                      </div>
                    </div>
                  ))}
                  {!currentModuleDetails.subtopics?.length && <p className="text-gray-600">No subtopics available for this module.</p>}
                </div>
              )}

              {!modules?.length && <p className="mt-4 text-gray-600">No modules available for this course.</p>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardTemplate;