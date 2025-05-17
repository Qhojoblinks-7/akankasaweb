import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo1.svg';
import { courseData } from '../../data/courseData';
import ReadingPageMobile from './ReadingPageMobile'; // Import the mobile version
import ForumHeader from '../ui/forum/ForumHeader';
import DictionaryPopUp from '../ui/dictionary/DictionaryPopUp'; // Import the dictionary pop-up

const ReadingPage = () => {
  const { level, moduleId, readingId } = useParams();
  const [readingDetails, setReadingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [levelData, setLevelData] = useState(null);
  const [moduleTitle, setModuleTitle] = useState('');
  const [subtopicTitle, setSubtopicTitle] = useState('');
  const location = useLocation();
  const [fontSize, setFontSize] = useState('md'); // 'sm', 'md', 'lg'
  const [theme, setTheme] = useState('light'); // 'light', 'dark'
  const [isMobile, setIsMobile] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false); // State for dictionary pop-up
  const toggleDictionary = useCallback(() => setIsDictionaryOpen(prevState => !prevState), []); // Toggle dictionary

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
    const fetchReadingDetails = async () => {
      setLoading(true);
      setError(null);
      setReadingDetails(null);
      setLevelData(null);
      setModuleTitle('');
      setSubtopicTitle('');

      try {
        const currentLevelData = courseData[level];
        if (currentLevelData) {
          setLevelData(currentLevelData);
          const currentModule = currentLevelData.modules?.find(mod => mod.id === moduleId);
          if (currentModule) {
            setModuleTitle(currentModule.title);
            let foundReading = null;
            let currentSubtopicTitle = '';
            currentModule.subtopics?.forEach(subtopic => {
              const reading = subtopic.readings?.find(read => read.id === readingId);
              if (reading) {
                foundReading = reading;
                currentSubtopicTitle = subtopic.title;
              }
            });

            if (foundReading) {
              setReadingDetails(foundReading);
              setSubtopicTitle(currentSubtopicTitle);
            } else {
              setError('Reading material not found.');
            }
          } else {
            setError('Module not found.');
          }
        } else {
          setError('Level not found.');
        }
      } catch  {
        setError('Failed to load reading material.');
      } finally {
        setLoading(false);
      }
    };

    fetchReadingDetails();
  }, [level, moduleId, readingId]);

  if (loading) {
    return <div>Loading reading material...</div>;
  }

  if (error) {
    return <div>Error loading reading material: {error}</div>;
  }

  if (!readingDetails) {
    return <div>Reading material not found.</div>;
  }

  // Props to pass to the mobile version
  const mobileProps = {
    level,
    moduleId,
    readingId,
    readingDetails,
    levelData,
    moduleTitle,
    subtopicTitle,
    location,
    fontSize,
    setFontSize,
    theme,
    setTheme,
  };

  if (isMobile) {
    return <ReadingPageMobile {...mobileProps} />;
  }

  const backToModuleLink = `/dashboard/${level}/module/${moduleId}`;

  const handleFontSizeIncrease = () => {
    if (fontSize === 'sm') setFontSize('md');
    else if (fontSize === 'md') setFontSize('lg');
  };

  const handleFontSizeDecrease = () => {
    if (fontSize === 'lg') setFontSize('md');
    else if (fontSize === 'md') setFontSize('sm');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`flex h-screen bg-gray-100 overflow-hidden ${theme === 'dark' ? 'dark' : ''}`}>
      <ForumHeader onDictionaryClick={toggleDictionary} /> {/* Pass toggle function */}
      {/* Sidebar */}
      <aside className="bg-black text-white w-64 p-4 flex flex-col">
        <div className="mb-6 flex justify-center">
          <Link to="/dashboard" className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        {levelData?.title && (
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold">{levelData.title}</h2>
          </div>
        )}
        {levelData?.modules && levelData.modules.length > 0 && (
          <div className="mb-4 overflow-y-auto">
            <h3 className="text-md font-semibold mb-2">Modules</h3>
            <ul>
              {levelData.modules.map(module => (
                <li key={module.id}>
                  <Link
                    to={`/dashboard/${level}/module/${module.id}`}
                    className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 ${moduleId === module.id ? 'bg-gray-700' : ''}`}
                  >
                    {module.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-4">
          <Link
            to="/forum"
            className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 ${location.pathname === '/forum' ? 'bg-gray-700' : ''}`}
          >
            Discussion Forum
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/resources"
            className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 ${location.pathname === '/resources' ? 'bg-gray-700' : ''}`}
          >
            Resources
          </Link>
        </div>
      </aside>

      {/* Main Content (Reading Material) */}
      <main className="flex-1 flex flex-col p-4 overflow-y-auto">
        <div className="bg-white rounded-md shadow-sm p-6 mb-4">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <Link to={backToModuleLink} className="text-gray-800 hover:underline">
                Back to {levelData?.title} - {moduleTitle} - {subtopicTitle}
              </Link>
            </div>
            <div>
              <button onClick={handleFontSizeDecrease} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full mr-2 focus:outline-none">
                A-
              </button>
              <button onClick={handleFontSizeIncrease} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full mr-2 focus:outline-none">
                A+
              </button>
              <button onClick={toggleTheme} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none">
                {theme === 'light' ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>

          {/* Reading Content */}
          <article className={`prose max-w-none ${fontSize === 'sm' ? 'text-sm' : ''} ${fontSize === 'lg' ? 'text-lg' : ''} ${theme === 'dark' ? 'prose-dark' : ''}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{readingDetails.title}</h2>
            {readingDetails.content && (
              <div dangerouslySetInnerHTML={{ __html: readingDetails.content }} />
            )}
            {readingDetails.textContent && (
              <p className="text-gray-700 whitespace-pre-line">{readingDetails.textContent}</p>
            )}
          </article>
        </div>
      </main>

      {/* Dictionary Pop-up */}
      {isDictionaryOpen && <DictionaryPopUp onClose={toggleDictionary} />}
    </div>
  );
};

export default ReadingPage;