// src/components/NewTopicModal.jsx
import React, { useState } from 'react';

const NewTopicModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      setTitle('');
      setContent('');
      onClose();
    } else {
      alert('Please fill in both title and content.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Start a New Discussion
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1 transition-colors duration-200"
            aria-label="Close new topic form"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Modal Body: Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="topicTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Discussion Title
            </label>
            <input
              type="text"
              id="topicTitle"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-800"
              placeholder="e.g., Question about Akan proverbs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="topicContent" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="topicContent"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-800 h-40 resize-y"
              placeholder="Write your discussion post here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">Markdown & basic HTML supported.</p>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-200"
            >
              Post Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTopicModal;