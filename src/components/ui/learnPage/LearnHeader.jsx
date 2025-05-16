import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaUserCircle, FaBookOpen, FaSignOutAlt, FaCog, FaQuestionCircle, FaHome, FaChevronRight } from 'react-icons/fa'; // Example icons
import Breadcrumb from '../forum/Breadcrumb'; // Assuming Breadcrumb.js is in the same directory or adjust path

function LearnHeader() {
  const [isLandingLinksOpen, setIsLandingLinksOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDictionaryPopupOpen, setIsDictionaryPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef(null);
  const location = useLocation();

  const landingPageLinks = [
    { to: '/learn-akan', label: 'Learn Akan' },
    { to: '/akan-culture', label: 'Akan Culture' },
    { to: '/akan-dictionary', label: 'Akan Dictionary' },
    { to: '/research', label: 'Research' },
    { to: '/community', label: 'Community' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  const userMenuItems = [
    { to: '/profile', label: 'Profile Settings', icon: <FaCog className="mr-2" /> },
    { to: '/help', label: 'Help Center', icon: <FaQuestionCircle className="mr-2" /> },
    { to: '/logout', label: 'Logout', icon: <FaSignOutAlt className="mr-2" /> },
  ];

  const toggleLandingLinks = () => {
    setIsLandingLinksOpen(!isLandingLinksOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleDictionaryPopup = () => {
    setIsDictionaryPopupOpen(!isDictionaryPopupOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsScrolled(headerRef.current.getBoundingClientRect().top < 0);
      } else {
        setIsScrolled(window.scrollY > 10); // Fallback if ref not yet attached
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 bg-gray-100 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="mr-4">
            <img src="/src/assets/logo.svg" alt="Akan Kasa ne Amammere Logo" className="h-8 transition-all duration-300" style={{ filter: isScrolled ? 'invert(10%) sepia(20%) saturate(600%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'none' }} />
          </Link>

          {/* Landing Page Links Dropdown */}
          <div className="relative">
            <button
              onClick={toggleLandingLinks}
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300"
            >
              <FaBars className="mr-2" /> Links
            </button>
            {isLandingLinksOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 origin-top animate-slide-down">
                {landingPageLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                  >
                    {link.label.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Instant Dictionary Popup Trigger */}
          <button
            onClick={toggleDictionaryPopup}
            className="ml-4 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300"
            title="Instant Dictionary"
          >
            <FaBookOpen size={20} />
          </button>

          {/* User Icon and Dropdown */}
          <div className="relative ml-4">
            <button
              onClick={toggleUserMenu}
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300"
            >
              <FaUserCircle size={50} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 origin-top animate-slide-down">
                {userMenuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                  >
                    {item.icon} {item.label.replace(/-/g, ' ')}
                  </Link>
                ))}
                <div className="border-t border-gray-200">
                  <Link
                    to="/logout"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb landingPageLinks={landingPageLinks} />
      {/* Instant Dictionary Popup */}
      {isDictionaryPopupOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-6 z-20 origin-center animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Instant Akan Dictionary</h2>
          {/* Dictionary input and display will go here */}
          <input type="text" placeholder="Enter Akan or English word" className="w-full border rounded-md p-2 mb-4" />
          <div>{/* Dictionary result */}</div>
          <button onClick={toggleDictionaryPopup} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300">
            Close
          </button>
        </div>
      )}

      {/* Animation Styles (Add these to your CSS file or a <style> tag) */}
      <style>
        {`
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slide-down {
            animation: slide-down 0.2s ease-out forwards;
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
          }
        `}
      </style>
    </header>
  );
}

export default LearnHeader;