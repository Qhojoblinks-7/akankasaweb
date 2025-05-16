import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-100 py-12">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 pb-10 border-b border-gray-300">

        <div className="max-w-96 text-center md:text-left">
          <img className="h-9 mx-auto md:mx-0" src="/src/assets/logo (2).svg" alt="Akan Kasa ne Amammere Logo"/>
          <p className="mt-6 text-sm text-gray-600">
            A comprehensive online resource dedicated to learning the Akan language, exploring its rich culture, and facilitating Akan-related research.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <FaFacebook size={20} className="text-akan-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <FaInstagram size={20} className="text-akan-blue-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <FaLinkedin size={20} className="text-akan-blue-500" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <FaYoutube size={20} className="text-akan-blue-500" />
            </a>
            <a href="mailto:info@akankasa.org" className="hover:opacity-75">
              <FaEnvelope size={20} className="text-akan-blue-500" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between text-center md:text-left">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
            <ul className="text-sm text-gray-600 space-y-2 list-none">
              <li><Link to="/learn">Learn Akan</Link></li>
              <li><Link to="/dictionary">Akan Dictionary</Link></li>
              <li><Link to="/culture">Akan Culture</Link></li>
              <li><Link to="/research">Research</Link></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="font-semibold text-gray-900 mb-5">EXPLORE</h2>
            <ul className="text-sm text-gray-600 space-y-2 list-none">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-600">
        Copyright 2025 © Akan Kasa ne Amammere. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;