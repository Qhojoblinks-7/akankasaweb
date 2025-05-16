import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ModuleList = ({ modules }) => {
  const location = useLocation();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Modules</h3>
      <ul>
        {modules.map(module => (
          <li key={module.id} className={`py-2 hover:bg-gray-100 rounded-md px-2 ${location.pathname.includes(`/module/${module.id}`) ? 'bg-indigo-100 text-indigo-700' : ''}`}>
            <Link to={`/dashboard/beginner/module/${module.id}`}>{module.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;