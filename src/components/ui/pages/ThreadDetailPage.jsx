import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ForumHeader from '../forum/ForumHeader'; // Assuming you want the same header
import CommentCard from '../forum/CommentCard';

const ThreadDetailPage = () => {
  const { threadId } = useParams();
  const [thread, setThread] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching thread details and comments based on threadId
    setTimeout(() => {
      // Replace this with your actual API call
      const fetchedThread = {
        id: threadId,
        title: `Detailed Discussion for Thread ${threadId}`,
        author: { username: 'UserXYZ', profileImageUrl: '/images/default-avatar.png', id: 'user-xyz-id' },
        content: 'This is the main content of the forum thread. It can be longer and more detailed than the excerpt on the main page.',
        createdAt: new Date(),
      };

      const fetchedComments = [
        { id: 1, author: { username: 'CommenterA', profileImageUrl: '/images/avatar-a.png', id: 'commenter-a-id' }, text: 'This is the first comment.', createdAt: new Date() },
        { id: 2, author: { username: 'CommenterB', profileImageUrl: '/images/avatar-b.png', id: 'commenter-b-id' }, text: 'Here\'s another insightful comment.', createdAt: new Date() },
        // Add more comments with the correct structure
      ];

      setThread(fetchedThread);
      setComments(fetchedComments);
      setLoading(false);
    }, 1000);
  }, [threadId]);

  if (loading) {
    return <div>Loading thread details...</div>;
  }

  if (error) {
    return <div>Error loading thread: {error}</div>;
  }

  if (!thread) {
    return <div>Thread not found.</div>;
  }

  return (
    <div className="flex h-auto w-screen bg-gray-100">
      {/* Sidebar (You might want a different or no sidebar here) */}
      <aside className="bg-gray-800 text-white w-64 p-4 flex flex-col">
        <div className="mb-6 flex justify-center">
          <Link to="/forum" className="flex justify-center">
            <img src="/src/assets/logo.svg" alt="Logo" className="h-12" />
          </Link>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-lg font-semibold">Related Topics</h2>
        </div>
        <ul>
          <li><Link to="/forum/thread/1" className="block py-2 hover:bg-gray-700 rounded">Related Thread 1</Link></li>
          <li><Link to="/forum/thread/2" className="block py-2 hover:bg-gray-700 rounded">Another Related Thread</Link></li>
          {/* Add more related topics */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-16 p-4">
        {/* Header */}
        <ForumHeader />


        {/* Thread Content */}
        <div className="bg-white rounded-md shadow-sm p-6 mb-4">
          <h1 className="text-xl font-semibold mb-2">{thread.title}</h1>
          <p className="text-gray-600 mb-4">
            Started by <Link to={`/profile/${thread.author?.id}`} className="text-blue-500 hover:underline">{thread.author?.username}</Link> on {thread.createdAt?.toLocaleDateString()}
          </p>
          <div className="prose">{thread.content}</div> {/* Consider using a markdown renderer */}
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-3">Comments</h2>
          {comments.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))}

          {/* Comment Input Form (Optional) */}
          <div className="mt-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a comment..."
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 focus:outline-none focus:shadow-outline"
            >
              Post Comment
            </button>
          </div>
        </div>
      </main>

      {/* Right Sidebar (Optional) */}
      <aside className="w-1/4 p-4 mt-16">
        <div className="bg-white rounded-md shadow-sm p-4 mb-4">
          <h4 className="text-md font-semibold mb-2">Thread Tools</h4>
          <ul>
            <li><button className="text-blue-500 hover:underline">Report Thread</button></li>
            {/* Add more tools */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ThreadDetailPage;