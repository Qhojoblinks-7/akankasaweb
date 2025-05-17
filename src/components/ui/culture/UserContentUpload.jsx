import React, { useState, useCallback } from 'react';

function UserContentUpload({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const handleContentChange = useCallback((event) => {
    setContent(event.target.value);
  }, []);

  const handleImageChange = useCallback((event) => {
    setImage(event.target.files[0]);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
    onSubmit(formData);
    setTitle('');
    setContent('');
    setImage(null);
  }, [title, content, image, onSubmit]);

  return (
    <div className="bg-white rounded-md shadow-sm p-6 mb-4">
      <h3 className="font-semibold mb-3">Share Your Knowledge</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="upload-title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="upload-title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="upload-content" className="block text-gray-700 text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            id="upload-content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="upload-image" className="block text-gray-700 text-sm font-bold mb-2">
            Image (Optional):
          </label>
          <input
            type="file"
            id="upload-image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Content
        </button>
      </form>
    </div>
  );
}

export default UserContentUpload;
