import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CommunityForum({ posts }) {
  const [forumPosts, setForumPosts] = useState(posts || []);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // In a real application, you would fetch posts from and send posts to a backend API
  // useEffect(() => {
  //   // Fetch posts from API and setForumPosts
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send newPost data to API to create a new post
    // On success, update the local state:
    const tempId = Math.random().toString(36).substring(2, 9); // Temporary ID
    const newPostWithTempId = { ...newPost, id: tempId, author: 'You', date: new Date().toLocaleDateString() };
    setForumPosts(prevPosts => [newPostWithTempId, ...prevPosts]);
    setNewPost({ title: '', content: '' });
    setShowNewPostForm(false);
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-3">Community Forum</h3>

      {/* Display Posts */}
      <ul>
        {forumPosts.map(post => (
          <li key={post.id} className="py-2 border-b last:border-b-0">
            <Link to={`/forum/posts/${post.id}`} className="text-blue-500 hover:underline font-semibold">
              {post.title}
            </Link>
            <p className="text-gray-600 text-sm">By {post.author} - {post.date}</p>
            <p className="text-gray-700 text-sm">{post.content.substring(0, 100)}...</p>
          </li>
        ))}
        {forumPosts.length === 0 && <p className="text-gray-500">No posts yet. Start the discussion!</p>}
      </ul>

      {/* New Post Form Toggle */}
      {!showNewPostForm && (
        <button onClick={() => setShowNewPostForm(true)} className="inline-block mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
          Start a New Discussion
        </button>
      )}

      {/* New Post Form */}
      {showNewPostForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-2">
            <label htmlFor="new-post-title" className="block text-gray-700 text-sm font-bold mb-1">Title:</label>
            <input type="text" id="new-post-title" name="title" value={newPost.title} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-2">
            <label htmlFor="new-post-content" className="block text-gray-700 text-sm font-bold mb-1">Content:</label>
            <textarea id="new-post-content" name="content" value={newPost.content} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
            Post
          </button>
          <button type="button" onClick={() => setShowNewPostForm(false)} className="ml-2 text-gray-600 hover:text-gray-800 text-sm">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

export default CommunityForum;

// Example Usage (in CommunityPage):
// const initialPosts = [
//   { id: 'cp1', title: 'Akan Proverbs and their Meanings', author: 'Nana Akua', date: '2024-05-01', content: 'Let\'s discuss some common Akan proverbs and their interpretations...', replies: 5 },
//   { id: 'cp2', title: 'The Role of Family in Akan Society', author: 'Kofi Mensah', date: '2024-05-10', content: 'How important is the extended family structure in modern Akan culture?', replies: 12 },
// ];
// <CommunityForum posts={initialPosts} />