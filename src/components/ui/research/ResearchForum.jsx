import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ResearchForum({ posts }) {
  // In a real application, you would fetch posts and handle user interactions
  const [forumPosts, setForumPosts] = useState(posts || []);

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h3 className="font-semibold mb-3">Research Forum</h3>
      <ul>
        {forumPosts.map((post) => (
          <li key={post.id} className="py-2 border-b last:border-b-0">
            <Link to={`/forum/posts/${post.id}`} className="text-blue-500 hover:underline font-semibold">
              {post.title}
            </Link>
            <p className="text-gray-600 text-sm">By {post.author} - {post.date}</p>
            <p className="text-gray-700 text-sm">{post.excerpt}...</p>
          </li>
        ))}
        {forumPosts.length === 0 && <p className="text-gray-500">No discussions yet. Be the first to start one!</p>}
      </ul>
      <Link to="/forum/new" className="inline-block mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
        Start a New Discussion
      </Link>
    </div>
  );
}

export default ResearchForum;

// Example Usage:
// const forumPostsData = [
//   { id: 'fp1', title: 'The Influence of Oral Tradition on Akan History', author: 'Dr. Akosua Mensah', date: '2023-10-26', excerpt: 'A discussion on the role of oral tradition...' },
//   { id: 'fp2', title: 'Linguistic Analysis of Asante Twi Dialect', author: 'Kwame Asare', date: '2023-11-15', excerpt: 'Exploring the unique linguistic features...' },
//   // ... more posts
// ];
// <ResearchForum posts={forumPostsData} />