import React from 'react';

const CourseLinksSection = ({ levelName, learningObjectives, skillsGained }) => {
  return (
    <div className="bg-gray-50 py-12">
      <section id={`about-${levelName.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">What you'll learn</h3>
              <ul role="list" className="mt-4 space-y-2 text-gray-500">
                {learningObjectives.map((objective, index) => (
                  <li key={index} className="flex gap-x-3">
                    <span className="text-akan-blue-500">→</span>
                    <span>
                      <strong>{objective.title}:</strong> {objective.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">Skills you'll gain</h3>
              <div className="mt-4 text-gray-500">
                <p>Upon completion of this level, you will be able to:</p>
                <ul role="list" className="mt-4 space-y-2 text-gray-500">
                  {skillsGained.map((skill, index) => (
                    <li key={index} className="flex gap-x-3">
                      <span className="text-akan-blue-500">→</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseLinksSection;