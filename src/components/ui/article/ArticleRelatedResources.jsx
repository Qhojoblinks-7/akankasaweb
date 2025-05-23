// src/article/ArticleRelatedResources.jsx
import React from 'react';
import RelatedResourceCard from './RelatedResourceCard'; // Import the RelatedResourceCard component

const ArticleRelatedResources = ({ data }) => {
  return (
    <section className="container mx-auto px-4 md:px-0 py-8 mt-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
        Related Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((resource, index) => (
          <RelatedResourceCard
            key={index} // In a real app, use a unique ID for key
            title={resource.title}
            description={resource.description}
            author={resource.author}
            iconType={resource.iconType}
            link="#" // Placeholder link
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleRelatedResources;