// src/article/ArticleBreadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ArticleBreadcrumbs = ({ articleTitle }) => {
  return (
    <nav className="text-sm text-gray-500 mb-6 mt-35" aria-label="breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          {/* Use Link component for internal navigation */}
          <Link to="/research" className="text-orange-600 hover:underline">
            Research Features
          </Link>
          <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
          </svg>
        </li>
        <li className="flex items-center">
          {/* Use Link component for internal navigation */}
          <Link to="/research/resource-library" className="text-orange-600 hover:underline">
            Resource Library
          </Link>
          <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
          </svg>
        </li>
        <li>
          {/* Display the dynamic articleTitle prop */}
          <span className="text-gray-700">{articleTitle}</span>
        </li>
      </ol>
    </nav>
  );
};

export default ArticleBreadcrumbs;