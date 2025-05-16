import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo1.svg';
import { ChevronDownIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import ForumHeader from '../ui/forum/ForumHeader';
import ThreadCard from '../ui/forum/ThreadCard';
import { placeholderDiscussions } from '@/placeholderData';

const ResponsiveForumPage = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [discussions, setDiscussions] = useState(placeholderDiscussions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const forumCategories = [
    { id: 'general', title: 'General Discussions' },
    { id: 'help', title: 'Help & Support' },
    { id: 'suggestions', title: 'Suggestions' },
    { id: 'announcements', title: 'Announcements' },
  ];
  const location = useLocation();

  const toggleCategoryDropdown = useCallback(() => setIsCategoryDropdownOpen(prevState => !prevState), []);
  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    setDiscussions(
      categoryId
        ? placeholderDiscussions.filter((discussion) => discussion.category === categoryId)
        : placeholderDiscussions
    );
  }, []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuVisible(prevState => !prevState), []);

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
    <div className="min-h-screen mt-20 bg-gray-100 flex">
      {/* Mobile Sidebar (Drawer) */}
      {isMobile && (
        <aside
          className={`bg-black  text-white w-64 p-4 flex flex-col fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ marginTop: '7rem' }} // Adjust based on header height
        >
          <div className="mb-6 flex justify-center">
            <Link to="/forum" onClick={() => setIsMobileMenuVisible(false)} className="flex justify-center hidden">
              <img src={Logo} alt="Logo" className="h-12" />
            </Link>
          </div>
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold hidden">Forum Categories</h2>
          </div>
          <div className="mb-4">
            <button
              onClick={toggleCategoryDropdown}
              className="w-full flex items-center justify-between py-2 px-3 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <span>Categories</span>
              {forumCategories && <ChevronDownIcon className={`h-4 w-4 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />}
            </button>
            {isCategoryDropdownOpen && forumCategories && (
              <div className="mt-2">
                <ul>
                  {forumCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => { handleCategorySelect(category.id); setIsMobileMenuVisible(false); }}
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
              onClick={() => setIsMobileMenuVisible(false)}
              className={`block py-2 px-3 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${location.pathname === '/resources' ? 'bg-gray-700' : ''}`}
            >
              Resources
            </Link>
          </div>
        </aside>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Top Header */}
        {isMobile && (
          <header className="fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50">
            <Link to="/forum" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 mr-2" />
            </Link>
            {/* Spacer to push the bottom-right button */}
            <div className="invisible">
              <ListBulletIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </header>
        )}

        {/* Main Content */}
        <main
          className={`flex-1 p-4 ${isMobile ? '' : 'lg:pl-64'} overflow-y-auto mt-8`}
          style={{ paddingTop: isMobile ? '56px' : '0' }} // Adjust top padding for mobile
        >
          <ForumHeader />

          <div className="flex flex-col lg:flex-row">
            {/* Left Section (Proverb & Festivals) - Hidden on small screens */}
            {!isMobile && (
              <aside className="w-full lg:w-1/4 mr-0 lg:mr-4 flex-shrink-0 mb-4 lg:mb-0">
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
            )}

            {/* Center Section (Thread Cards) */}
            <section className="flex-grow bg-white rounded-md shadow-sm p-4 mr-0 lg:mr-4 flex flex-col overflow-hidden">
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
              <div className="overflow-y-auto">
                {discussions.map(thread => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))}
              </div>
            </section>

            {/* Right Section (Forum Tools) - Hidden on small screens */}
            {!isMobile && (
              <aside className="w-1/4 mt-4 lg:mt-0 flex-shrink-0 hidden lg:block">
                {/* ForumRightSidebar should be rendered here by the template */}
                <div className="bg-white rounded-md shadow-sm p-4">
                  <h4 className="text-md font-semibold mb-2">Forum Tools</h4>
                  {/* Add your forum tools content here */}
                  <p className="text-gray-700">Placeholder for forum tools.</p>
                </div>
              </aside>
            )}
          </div>
        </main>

        {/* Mobile Menu Button (Bottom Right) */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="fixed bottom-4 right-4 bg-black text-white rounded-md p-2 z-50 focus:outline-none"
          >
            <ListBulletIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ResponsiveForumPage;