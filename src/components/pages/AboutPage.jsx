import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-lg font-semibold text-akan-blue-600">About Akan Kasa ne Amammere</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission: Preserving and Promoting Akan Language and Culture
          </h1>
          <div className="mt-8 text-gray-500">
            <p>
              Welcome to Akan Kasa ne Amammere, a dedicated online platform committed to the preservation, promotion, and learning of the rich Akan language and its vibrant cultural heritage. Our project was born out of a deep respect for the Akan people, their history, traditions, and the vital role their language plays in shaping their identity and worldview.
            </p>
            <p className="mt-6">
              In an increasingly interconnected world, we recognize the importance of linguistic diversity and the need to safeguard endangered languages and cultural knowledge. The Akan language, spoken by millions primarily in Ghana and parts of Côte d'Ivoire, is a treasure trove of history, philosophy, and artistic expression. We aim to make this treasure accessible to learners of all backgrounds, from those with no prior exposure to academics engaged in in-depth research.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">Our Goals</h3>
            <ul role="list" className="mt-4 space-y-2 text-gray-500">
              <li className="flex gap-x-3">
                <span className="text-akan-blue-500">→</span>
                <span>
                  <strong>Teach Basic Akan:</strong> To provide accessible and engaging resources for individuals with no prior knowledge of the Akan language to begin their learning journey.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-akan-blue-500">→</span>
                <span>
                  <strong>Preserve and Promote Akan Cultural Knowledge:</strong> To serve as a repository of information about Akan traditions, history, arts, music, social customs, and more, ensuring this rich heritage is preserved and shared with a global audience.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-akan-blue-500">→</span>
                <span>
                  <strong>Provide In-Depth Linguistic Resources:</strong> To offer a comprehensive and user-friendly Akan dictionary with advanced features, as well as resources for linguistic research.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-akan-blue-500">→</span>
                <span>
                  <strong>Facilitate Akan-Related Research:</strong> To support researchers of all levels by providing access to relevant materials, fostering discussion, and potentially offering analytical tools.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-akan-blue-500">→</span>
                <span>
                  <strong>Create a Dynamic and Engaging Platform:</strong> To ensure the website is visually appealing, easy to navigate, and regularly updated with fresh content using multimedia.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-akan-blue-500">→</span>
                <span>
                  <strong>Be Accessible to Everyone:</strong> To design the website to be user-friendly for individuals with varying levels of technical expertise and to be inclusive of users with disabilities, adhering to accessibility guidelines.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">Our Commitment</h3>
            <div className="mt-4 text-gray-500">
              <p>
                We are committed to providing accurate, respectful, and culturally sensitive information. Our team comprises language enthusiasts, cultural experts, and technology professionals dedicated to building a high-quality and reliable resource. We strive to collaborate with Akan speakers and cultural custodians to ensure the authenticity and integrity of the content presented on this platform.
              </p>
              <p className="mt-6">
                We believe in the power of community and aim to foster a welcoming and inclusive environment for all users. Whether you are a beginner eager to learn your first Akan phrases, a member of the diaspora seeking to reconnect with your heritage, or a researcher delving into the intricacies of the language, we hope you find Akan Kasa ne Amammere a valuable and enriching resource.
              </p>
              <p className="mt-6">
                Thank you for joining us on this journey of discovery. Together, we can unlock the richness of the Akan language, culture, and heritage for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;