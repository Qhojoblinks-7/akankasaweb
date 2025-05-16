import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ForumHeader from '../ui/forum/ForumHeader';

const ViewResourcePage = () => {
  const { resourceId } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching a single resource based on resourceId
    setTimeout(() => {
      // Replace this with your actual API call to fetch the resource
      const fetchedResource = {
        id: resourceId,
        title: `Resource Title for ID ${resourceId}`,
        level: 'Intermediate',
        description: `Detailed description of the resource with ID ${resourceId}. This will provide more context and information.`,
        content: `
          <h1>Detailed Content for Resource ID ${resourceId}</h1>
          <p>This is the main body of the resource. It can contain rich text, explanations, examples, and more.</p>
          <ul>
            <li>Point 1 related to the resource.</li>
            <li>Another important detail.</li>
            <li>Example or illustration.</li>
          </ul>
          <p>Further elaboration and details specific to this resource.</p>
        `,
        additionalLinks: [
          { title: 'Related Document', url: '#' },
          { title: 'External Link', url: 'https://example.com' },
        ],
        relatedResources: [
          { id: '4', title: 'Another Related Resource' },
          { id: '5', title: 'Similar Resource Topic' },
        ],
      };

      if (fetchedResource && fetchedResource.id === resourceId) {
        setResource(fetchedResource);
        setLoading(false);
      } else {
        setError('Resource not found.');
        setLoading(false);
      }
    }, 1000);
  }, [resourceId]);

  if (loading) {
    return <div>Loading resource details...</div>;
  }

  if (error) {
    return <div>Error loading resource: {error}</div>;
  }

  if (!resource) {
    return <div>Resource not found.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <ForumHeader />
      <div className="container mx-auto  p-4 sm:p-6 md:p-8">
        <div className="bg-white rounded-md mt-30 shadow-md p-4 sm:p-6 md:p-8">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{resource.title}</h1>
          <p className="text-gray-600 mb-2">Level: {resource.level}</p>
          <p className="text-gray-700 mb-4">{resource.description}</p>

          <div className="prose mb-4 sm:mb-6" dangerouslySetInnerHTML={{ __html: resource.content }} />
          {/* Consider using a markdown renderer if your content is in Markdown */}

          {resource.additionalLinks && resource.additionalLinks.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg font-semibold mb-2">Additional Links</h3>
              <ul className="list-disc pl-5">
                {resource.additionalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {resource.relatedResources && resource.relatedResources.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Related Resources</h3>
              <ul className="list-disc pl-5">
                {resource.relatedResources.map(related => (
                  <li key={related.id}>
                    <Link to={`/resources/${related.id}`} className="text-blue-500 hover:underline">
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewResourcePage;