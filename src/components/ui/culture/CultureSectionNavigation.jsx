import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function CultureSectionNavigation({ sections }) {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 p-4 rounded-md shadow-sm mb-4">
      <ul className="flex space-x-4">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.path}
              className={`text-blue-500 hover:text-blue-700 font-semibold ${
                location.pathname.startsWith(section.path) ? 'underline' : ''
              }`}
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CultureSectionNavigation;
