import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo1.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import ForumHeader from '../forum/ForumHeader';
import ThreadCard from '../forum/ThreadCard';
import { placeholderDiscussions } from '@/placeholderData';
import ForumMobilePage from './ResponsiveForumPage';
import DictionaryPopUp from '../dictionary/DictionaryPopUp'; // Import the dictionary pop-up component

const ForumMainPage = () => {
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [discussions, setDiscussions] = useState(placeholderDiscussions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false); // State for dictionary pop-up

  const forumCategories = [
    { id: 'general', title: 'General Discussions' },
    { id: 'help', title: 'Help & Support' },
    { id: 'suggestions', title: 'Suggestions' },
    { id: 'announcements', title: 'Announcements' },
  ];
  const location = useLocation();

  const toggleModules = useCallback(() => setIsModulesOpen(prevState => !prevState), []);
  const toggleDictionary = useCallback(() => setIsDictionaryOpen(prevState => !prevState), []); // Function to toggle dictionary

  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    setDiscussions(
      categoryId
        ? placeholderDiscussions.filter((discussion) => discussion.category === categoryId)
        : placeholderDiscussions
    );
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  if (loading) {
    return <div>Loading forum discussions...</div>;
  }

  if (error) {
    return <div>Error loading forum discussions: {error}</div>;
  }

  return (
    <>
      {isMobile ? (
        <ForumMobilePage
          discussions={discussions}
          forumCategories={forumCategories}
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
      ) : (
        <div className="flex h-screen bg-gray-100 overflow-x-auto"> {/* Changed h-11/12 to h-screen for better coverage */}
          {/* Sidebar (col0) */}
          <aside className="bg-black h-screen fixed mr-27 mt-0 text-white w-64 p-4 flex flex-col flex-shrink-0"> {/* Adjusted h-11/12 to h-screen and mt-27 to mt-0 */}
            <div className="mb-6 mt-6 flex justify-center">
              <Link to="/forum" className="flex justify-center">
                <img src={Logo} alt="Logo" className="h-12" />
              </Link>
            </div>
            <div className="mb-4 text-center">
              <h2 className="text-lg font-semibold">Forum Categories</h2>
            </div>
            <div className="mb-4">
              <button
                onClick={toggleModules}
                className="w-full flex items-center justify-between py-2 px-3 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                <span>Categories</span>
                {forumCategories && <ChevronDownIcon className={`h-4 w-4 transition-transform ${isModulesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />}
              </button>
              {isModulesOpen && forumCategories && (
                <div className="mt-2">
                  <ul>
                    {forumCategories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategorySelect(category.id)}
                          className={`w-full text-left block py-2 px-4 rounded-md hover:bg-gray-700 cursor-pointer ${selectedCategory === category.id ? 'bg-gray-700' : ''}`}
                        >
                          {category.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
          <main className="flex-1 ml-64 h-screen mt-25 flex flex-col overflow-hidden"> {/* Adjusted ml-70 to ml-64 and mt-22 to mt-0 */}
            {/* Header with Breadcrumb and Dictionary Icon */}
            <ForumHeader onDictionaryClick={toggleDictionary} /> {/* Passed the toggleDictionary function */}

            <div className="flex p-4 mt-8"> {/* Container for the main content sections */}
              {/* Left Section (col1 - Proverb & Festivals) */}
              <aside className="flex-basis-1/4 mr-4 flex-shrink-0 flex flex-col"> {/* Using flex-basis */}
                <div className="bg-white rounded-md shadow-sm p-4 mb-4">
                  <h4 className="text-md font-semibold mb-2">Akan Proverb</h4>
                  <p className="text-gray-700">Yɛn ara yɛn asase yi.</p>
                </div>
                <div className="bg-white rounded-md shadow-sm p-4 mb-4">
                  <h4 className="text-md font-semibold mb-2">Akan Festivals</h4>
                  <ul>
                    <li><strong className="text-gray-700">Odwira Festival:</strong> <span className="text-gray-600">September (varies)</span></li>
                    <li><strong className="text-gray-700">Aboakyir Festival:</strong> <span className="text-gray-600">May (varies)</span></li>
                  </ul>
                </div>
              </aside>

              {/* Center Section (col3 - Thread Cards) */}
              <section className="flex-grow h-full bg-white rounded-md shadow-sm p-4 mr-4 flex flex-col overflow-hidden"> {/* Ensured h-full */}
                {/* Filter and Mark as Read */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <select className="border border-gray-300 rounded-md py-2 px-3 text-sm">
                      <option>All</option>
                      <option>Newest First</option>
                      <option>Most Comments</option>
                      {/* Add more filter options */}
                    </select>
                  </div>
                  <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md text-sm focus:outline-none focus:shadow-outline">
                    Mark All as Read
                  </button>
                </div>

                {/* Thread Cards */}
                <div className='h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500'> {/* Ensured h-full */}
                  {discussions.map(thread => (
                    <ThreadCard key={thread.id} thread={thread} />
                  ))}
                </div>
              </section>

              {/* Right Section (Forum Tools - col2 from the template) */}
              <aside className="flex-basis-1/4 flex-shrink-0"> {/* Using flex-basis */}
                {/* ForumRightSidebar should be rendered here by the template */}
              </aside>
            </div>
          </main>

          {/* Dictionary Pop-up */}
          {isDictionaryOpen && <DictionaryPopUp onClose={toggleDictionary} />}
        </div>
      )}
    </>
  );
};

export default ForumMainPage;