import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
// Import a dictionary icon (replace with your actual icon import)
import { FaBook } from 'react-icons/fa';
import Logo from '../../../assets/logo2.svg'; // Import your logo file

function ForumHeader({ searchTerm, onSearchChange, onDictionaryClick }) { // Renamed prop to onDictionaryClick
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsScrolled(headerRef.current.getBoundingClientRect().top < 0);
      } else {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  return (
    <header ref={headerRef} className={`fixed w-screen top-0 left-0 bg-gray-100  z-50 transition-all  duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between w-full">
          <Link to="/forum" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 mr-2" /> {/* Use the imported Logo */}
          </Link>

          {!isMobile && (
            <div className="flex fixed items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full">
              <FaSearch className="text-gray-500" size={22} />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
                value={searchTerm}
                onChange={onSearchChange}
              />
            </div>
          )}

          {/* Notification, Profile, and Dictionary Icon */}
          <div className="flex items-center ml-4">
            <Link to="/notifications" className="mr-4 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300">
              <FaBell size={20} />
            </Link>
            <button onClick={onDictionaryClick} className="mr-4 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300">
              <FaBook size={20} /> {/* Dictionary Icon */}
            </button>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300">
              <FaUserCircle size={isMobile ? 30 : 50} />
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full mt-2 md:mt-0 flex flex-col md:flex-row items-center justify-between">


          {isMobile && (
            <div className="flex items-center mt-7 border pl-4 gap-2 bg-white border-gray-500/30 h-[40px] rounded-full overflow-hidden w-full">
              <FaSearch className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
                value={searchTerm}
                onChange={onSearchChange}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default ForumHeader;