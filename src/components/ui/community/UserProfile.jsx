import React from 'react';
import { Link } from 'react-router-dom'; // If you use React Router for profile links

function UserProfile({ user }) {
  if (!user) {
    return <p className="text-gray-500">No user profile available.</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <img src={user.avatar} alt={`${user.username}'s avatar`} className="w-16 h-16 rounded-full" />
        <div>
          <h4 className="font-semibold text-lg">{user.username}</h4>
          <p className="text-gray-600 text-sm">Member since: {user.joinDate}</p>
        </div>
      </div>
      <div className="mb-4">
        <h5 className="font-semibold text-md">About Me</h5>
        <p className="text-gray-700">{user.bio}</p>
      </div>
      {user.posts && (
        <div>
          <h5 className="font-semibold text-md">Recent Posts</h5>
          <ul>
            {user.posts.map(post => (
              <li key={post.id} className="py-1">
                <Link to={`/forum/posts/${post.id}`} className="text-blue-500 hover:underline text-sm">{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Add more user-related information or actions here */}
    </div>
  );
}

export default UserProfile;

// Example Usage (in CommunityPage or a UserProfilePage):
// const userData = {
//   id: 'u1',
//   username: 'AkosuaB',
//   avatar: '/images/default_avatar.png',
//   joinDate: '2023-11-20',
//   bio: 'I am passionate about Akan culture and language. I enjoy learning new proverbs and sharing stories.',
//   posts: [
//     { id: 'up1', title: 'My Favorite Akan Proverbs', url: '/forum/posts/up1' },
//     { id: 'up2', title: 'The Significance of Adinkra Symbols', url: '/forum/posts/up2' },
//   ],
//   // ... more user data
// };
// <UserProfile user={userData} />