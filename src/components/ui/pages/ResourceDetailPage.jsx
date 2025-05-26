import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import Navbar from '../home/Header';
import Footer from '../home/Footer';

// Import the combined helper function
import { getResourceById } from '../../data/resourcesData';

// Import the specialized ResearchModule component
import ResearchModule from '../../ui/research/ResearchModule'; // Adjust path if necessary

const ResourceDetailPage = () => {
  const { resourceId } = useParams(); // Get the resourceId from the URL
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate a network delay for better UX during development
        await new Promise(resolve => setTimeout(resolve, 300)); 

        const foundResource = getResourceById(resourceId);

        if (foundResource) {
          setResource(foundResource);
        } else {
          // If resource not found, navigate to a 404 page
          navigate('/404');
        }
      } catch (err) {
        console.error("Failed to fetch resource:", err);
        setError("Failed to load resource. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [resourceId, navigate]); // Depend on resourceId and navigate

  // --- Loading, Error, and Not Found States ---
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading resource details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-red-600">
        <p className="text-xl font-semibold">{error}</p>
        <Link to="/research" className="mt-4 text-orange-600 hover:underline">Back to Resource Library</Link>
      </div>
    );
  }

  // If resource is null here, it means navigate('/404') was called
  if (!resource) {
    return null; 
  }

  // --- Main Resource Detail Page Layout ---
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex-grow"> {/* flex-grow to push footer down */}
        {/* Breadcrumbs for navigation */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/research" className="hover:underline text-orange-600">Resource Library</Link>
          <span className="mx-2">/</span>
          <span>{resource.title}</span>
        </nav>

        {/* The main content area using the ResearchModule */}
        <ResearchModule module={resource} />

        {/* You can add a "Back to Library" button here if desired */}
        <div className="mt-8 text-center">
            <Link to="/research" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                Back to Resource Library
            </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResourceDetailPage;