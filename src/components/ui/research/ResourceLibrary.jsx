// src/research/ResourceLibrary.jsx
import React from 'react';
import ResourceCard from './ResourceCard'; // Import the ResourceCard component

const ResourceLibrary = () => {
  // Define your resource data here, including a unique 'id' for each
  const beginnerResources = [
    {
      id: "introduction-to-akan-linguistics", // Unique identifier for the article
      title: "Introduction to Akan Linguistics",
      author: "Dr. Afia Owusu",
      year: "2022",
      description: "A primer covering the basics of Akan phonology and grammar for new learners.",
      type: "PDF",
      category: "Beginner"
    },
    {
      id: "basic-cultural-studies-texts",
      title: "Basic Cultural Studies Texts",
      author: "Prof. Kojo Mensah",
      year: "2021",
      description: "Key readings on Akan traditions, rituals, and heritage for beginners.",
      type: "PDF",
      category: "Beginner"
    },
    {
      id: "akan-alphabet-pronunciation-video",
      title: "Akan Alphabet Pronunciation Video",
      author: "Multimedia",
      year: "2023",
      description: "Visual and audio guide to standard Akan alphabet sounds.",
      type: "Multimedia",
      category: "Beginner"
    }
  ];

  const intermediateResources = [
    {
      id: "akan-oral-traditions-analysis",
      title: "Akan Oral Traditions Analysis",
      author: "Nana Yaw Boateng",
      year: "2020",
      description: "Examining the narrative forms and significance of Akan oral traditions through case studies.",
      type: "PDF",
      category: "Intermediate"
    },
    {
      id: "historical-accounts-of-akan-kingdoms",
      title: "Historical Accounts of Akan Kingdoms",
      author: "Abena Sarpong",
      year: "2021",
      description: "Documented histories and analyses of major Akan kingdoms and their social structures.",
      type: "PDF",
      category: "Intermediate"
    },
    {
      id: "akan-artifacts-visual-archive",
      title: "Akan Artifacts: A Visual Archive",
      author: "Multimedia",
      year: "2023",
      description: "An image-based collection of Akan artifacts annotated for research use.",
      type: "Multimedia",
      category: "Intermediate"
    }
  ];

  const advancedResources = [
    {
      id: "the-syntax-of-akan-serial-verb-constructions", // This ID matches the one used in ArticlePage example
      title: "The Syntax of Akan Serial Verb Constructions",
      author: "Dr. Kwame Adjei",
      year: "2019",
      description: "A collection of leading academic articles in advanced Akan language research.",
      type: "Journal",
      category: "Advanced"
    },
    {
      id: "dissertations-on-akan-language",
      title: "Dissertations on Akan Language",
      author: "Various Authors",
      year: "2022",
      description: "Selected doctoral and master's dissertations on phonology, syntax, and semantics.",
      type: "Thesis",
      category: "Advanced"
    },
    {
      id: "akan-social-structures-animated-diagrams",
      title: "Akan Social Structures: Animated Diagrams",
      author: "Multimedia",
      year: "2023",
      description: "Interactive visuals explaining kinship systems and social hierarchies among Akan.",
      type: "Animated Diagrams",
      category: "Advanced"
    }
  ];


  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
        Resource Library
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Beginner Resources Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            {/* Icon for Beginner Resources */}
            <svg className="w-6 h-6 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
              <path d="M10 9a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100 2h2a1 1 0 100-2H9z" />
            </svg>
            Beginner Resources
          </h3>
          <div className="space-y-4">
            {beginnerResources.map((resource) => (
              <ResourceCard
                key={resource.id} // Use the id as key for efficient rendering
                title={resource.title}
                author={resource.author}
                year={resource.year}
                description={resource.description}
                link={`/research/articles/${resource.id}`} // Dynamic link to the article page
                type={resource.type}
                category={resource.category}
              />
            ))}
          </div>
        </div>

        {/* Intermediate Resources Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            {/* Icon for Intermediate Resources */}
            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
            </svg>
            Intermediate Resources
          </h3>
          <div className="space-y-4">
            {intermediateResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                author={resource.author}
                year={resource.year}
                description={resource.description}
                link={`/research/articles/${resource.id}`} // Dynamic link
                type={resource.type}
                category={resource.category}
              />
            ))}
          </div>
        </div>

        {/* Advanced / Academic Column */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            {/* Icon for Advanced / Academic Resources */}
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clipRule="evenodd"></path>
              <path d="M10 9a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100 2h2a1 1 0 100-2H9z" />
            </svg>
            Advanced / Academic
          </h3>
          <div className="space-y-4">
            {advancedResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                author={resource.author}
                year={resource.year}
                description={resource.description}
                link={`/research/articles/${resource.id}`} // Dynamic link
                type={resource.type}
                category={resource.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;