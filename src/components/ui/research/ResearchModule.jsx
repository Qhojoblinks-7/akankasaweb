import React from 'react';

function ResearchModule({ module }) {
  if (!module) {
    return <p className="text-gray-500">No research module available.</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-6 mb-4">
      <h3 className="font-semibold mb-3">{module.title}</h3>
      <p className="text-gray-700 mb-3">{module.description}</p>
      {module.content && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Content:</h4>
          {/* Render module-specific content here (e.g., interactive elements, text) */}
          <div dangerouslySetInnerHTML={{ __html: module.content }} />
        </div>
      )}
      {module.links && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Related Links:</h4>
          <ul>
            {module.links.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="text-blue-500 hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResearchModule;

// Example Usage:
// const moduleData = {
//   title: 'Understanding Akan Kinship Systems',
//   description: 'An interactive module exploring the complexities of Akan kinship.',
//   content: '<p>This section will include interactive diagrams and explanations...</p>', // HTML content
//   links: [
//     { label: 'Further Reading on Akan Kinship', url: '/research/kinship_reading' },
//     { label: 'Akan Family Structures Explained', url: '/culture/family' },
//   ],
// };
// <ResearchModule module={moduleData} />