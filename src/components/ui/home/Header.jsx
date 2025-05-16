import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed z-50 w-full">
      {/* Banner Section */}
      <div className="flex mb-8 items-center justify-between bg-black text-[#d7b671] text-sm px-6 py-2 md:px-16 lg:px-24 xl:px-32">
        <Link
          to="/contact"
          className="flex items-center hover:text-yellow-300"
        >
          <FaEnvelope className="mr-2" />
          <span className="underline underline-offset-2">
            your.email@example.com
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 mt-8 left-0 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md text-black py-3 md:py-4'
            : 'bg-transparent backdrop-blur-lg text-white py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-12"
              src="/src/assets/logo2.svg"
              alt="logo"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-5">
            {[
              ['/', 'Home'],
              ['/learn-home-page', 'Learn Akan'],
              ['/culture', 'Akan Culture'],
              ['/dictionary', 'Akan Dictionary'],
              ['/research', 'Research'],
              ['/community', 'Community'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-yellow-500 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sign Up Button (desktop) */}
          <Link
            to="/signin"
            className="hidden md:inline-block ml-8 px-9 py-2 rounded-full bg-[#ba9e62] hover:bg-yellow-400 border border-yellow-600 text-gray-900 font-semibold transition transform active:scale-95"
          >
            Sign Up
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill={isScrolled ? 'black' : 'white'}
            >
              <path
                d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-white shadow-md p-6">
            <ul className="flex flex-col space-y-4 text-lg">
              {[
                ['/', 'Home'],
                ['/learn', 'Learn Akan'],
                ['/culture', 'Akan Culture'],
                ['/dictionary', 'Akan Dictionary'],
                ['/research', 'Research'],
                ['/community', 'Community'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="block text-black hover:text-gray-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
             <Link
             to="/signin"
                className="mt-6 block w-full h-11 rounded-full bg-yellow-500 border border-yellow-600 text-center leading-9 text-gray-900 font-semibold hover:bg-yellow-400 transition transform active:scale-95"
            >
                Sign Up
            </Link>

          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
