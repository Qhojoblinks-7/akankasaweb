// src/article/ArticleDiscussion.jsx
import React from 'react';

const ArticleDiscussion = () => {
  // You can add state or props here if this component needs dynamic behavior
  // For example, if the discussion link changes per article, you'd pass a 'discussionLink' prop.
  // const handleDiscussClick = () => {
  //   // Logic to navigate to a discussion forum or comment section
  //   console.log('Navigating to discussion forum...');
  //   // window.location.href = 'your-discussion-forum-url';
  // };

  return (
    <section className="bg-white rounded-lg shadow-md p-6 lg:p-8 text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Engage with this Research</h3>
      <button
        // onClick={handleDiscussClick} // Uncomment and implement if you have a specific action
        className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition duration-300 w-full flex items-center justify-center"
      >
        {/* Discussion Icon */}
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.233-1.189l-2.417.403a1 1 0 01-1.116-1.116l.403-2.417A8 8 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path>
        </svg>
        Discuss this Research
      </button>
      {/* You could add more elements here, like a link to a comment section, a form, etc. */}
    </section>
  );
};

export default ArticleDiscussion;