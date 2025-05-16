import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ForumHeader from './ForumHeader'; // Assuming you want the same header
import CommentCard from './CommentCard';
import { ListBulletIcon } from '@heroicons/react/24/outline'; // For the mobile menu

const DiscussionView = () => {
  const { threadId } = useParams();
  const [thread, setThread] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuVisible(!isMobileMenuVisible);

  useEffect(() => {
    const checkScreenWidth = () => {
      const isCurrentlyMobile = window.innerWidth < 768;
      setIsMobile(isCurrentlyMobile);
      console.log('DiscussionView - isMobile:', isCurrentlyMobile, 'window.innerWidth:', window.innerWidth);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

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
    return <div>Loading discussion...</div>;
  }

  if (error) {
    return <div>Error loading discussion: {error}</div>;
  }

  if (!thread) {
    return <div>Discussion not found.</div>;
  }

  return (
    <div className="min-h-screen min-w-screen mt-20 bg-gray-100 flex">
      {/* Mobile Top Header */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 bg-black text-white p-4 flex justify-center items-center z-30">
          <Link to="/forum" className="flex items-center">
            <img src="/src/assets/logo.svg" alt="Logo" className="h-8 mr-2" />
          </Link>
          {/* Spacer to push the bottom-right button */}
          <div className="invisible">
            <ListBulletIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        </header>
      )}

      {/* Mobile Sidebar (Drawer) */}
      {isMobile && (
        <aside
          className={`bg-black text-white w-64 p-4 flex flex-col fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ marginTop: '7rem' }} // Adjust based on header height
        >
          <div className="mb-6 flex justify-center">
            <Link to="/forum" onClick={() => setIsMobileMenuVisible(false)} className="flex justify-center">
              <img src="/src/assets/logo.svg" alt="Logo" className="h-12" />
            </Link>
          </div>
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold">Related Topics</h2>
          </div>
          <ul>
            <li><Link to={`/forum/thread/${threadId - 1}`} onClick={() => setIsMobileMenuVisible(false)} className="block py-2 hover:bg-gray-700 rounded">Previous Discussion</Link></li>
            <li><Link to={`/forum/thread/${threadId + 1}`} onClick={() => setIsMobileMenuVisible(false)} className="block py-2 hover:bg-gray-700 rounded">Next Discussion</Link></li>
            {/* Add more related topics */}
          </ul>
        </aside>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col p-4 ${isMobile ? '' : 'lg:ml-64'}`}
        style={{ paddingTop: isMobile ? '56px' : '0' }}
      >
        {/* Header (Always visible) */}
        <ForumHeader />

        {/* Thread Content */}
        <div className="bg-white rounded-md shadow-sm p-6 mb-4">
          <h1 className="text-xl font-semibold mb-2">{thread.title}</h1>
          <p className="text-gray-600 mb-4">
            Started by <Link to={`/profile/${thread.author?.id}`} className="text-gray-500 hover:underline">{thread.author?.username}</Link> on {thread.createdAt?.toLocaleDateString()}
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b89e5b]"
              placeholder="Write a comment..."
            ></textarea>
            <button
              className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md mt-2 focus:outline-none focus:shadow-outline"
            >
              Post Comment
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Menu Button (Bottom Right) */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed bottom-4 right-4 h-fit bg-black text-white rounded-md p-2 z-50 focus:outline-none"
        >
          <ListBulletIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default DiscussionView;