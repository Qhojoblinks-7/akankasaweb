// BreadcrumbContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const BreadcrumbContext = createContext();

export const useBreadcrumb = () => useContext(BreadcrumbContext);

export const BreadcrumbProvider = ({ landingPageLinks, children }) => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    console.log("BreadcrumbProvider - location:", location);
    console.log("BreadcrumbProvider - landingPageLinks:", landingPageLinks);
    const generateBreadcrumbs = () => {
      const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
      const crumbs = [{ label: 'Home', to: '/' }];

      let currentPath = '';
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const link = Array.isArray(landingPageLinks) ? landingPageLinks.find(link => link.to === currentPath) : undefined;
        crumbs.push({
          label: (link ? link.label : segment.charAt(0).toUpperCase() + segment.slice(1)).replace(/-/g, ' '),
          to: index < pathSegments.length - 1 ? currentPath : null,
        });
      });
      console.log("BreadcrumbProvider - generated crumbs:", crumbs);
      setBreadcrumbs(crumbs);
    };

    generateBreadcrumbs();
  }, [location, landingPageLinks]);

  return (
    <BreadcrumbContext.Provider value={breadcrumbs}>
      {children}
    </BreadcrumbContext.Provider>
  );
};