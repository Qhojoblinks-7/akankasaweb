import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { useBreadcrumb } from '@/BreadcrumbContext';


function Breadcrumb() {
  const breadcrumbs = useBreadcrumb();
  console.log("Breadcrumb - breadcrumbs:", breadcrumbs);

  return (
    <div className="bg-gray-200 fixed z-50  w-full py-2 px-2 sm:px-4 transition-all duration-300 dark:bg-gray-700 dark:text-gray-300 text-xs sm:text-sm overflow-hidden">
      <div className="container mx-auto font-medium flex flex-wrap items-center gap-x-1 sm:gap-x-2 gap-y-1">
        <Link
          to="/"
          className="hover:text-gray-800 transition-colors duration-300 dark:hover:text-white flex items-center truncate"
          style={{ maxWidth: 'calc(20% - 5px)' }} // Adjust % and px based on your layout
        >
          <FaHome className="mr-1" size={14} />
          Home
        </Link>
        {breadcrumbs &&
          breadcrumbs
            .slice(1)
            .map((crumb, index) => (
              <React.Fragment key={index}>
                <FaChevronRight className="text-gray-400 dark:text-gray-500 mx-0.5 sm:mx-1" size={12} />
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-gray-800 transition-colors duration-300 dark:hover:text-white truncate"
                    style={{ maxWidth: 'calc(20% - 5px)' }} // Adjust % and px
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="truncate" style={{ maxWidth: 'calc(20% - 5px)' }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
      </div>
    </div>
  );
}

export default Breadcrumb;