import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ForumHeader from '../forum/ForumHeader';
import { FaUserCircle, FaEdit, FaSave, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
// Import your authentication context if you have one
// import { AuthContext } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'true' || false;
  });

  // If you have an authentication context, you can access the logged-in user's ID
  // const { currentUser } = useContext(AuthContext);
  const currentUser = 'someLoggedInUserId'; // Placeholder for logged-in user ID

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    setLoading(true);
    // --- REAL CODE TO FETCH PROFILE DATA BY userId ---
    // fetch(`/api/users/${userId}`) // Use the userId from the URL
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     setProfileData(data);
    //     setTempProfileData(data ? { ...data } : null);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError('Failed to load profile.');
    //     console.error('Error loading profile:', err);
    //     setLoading(false);
    //   });
    // --- END OF REAL CODE ---

    // For demonstration without a backend:
    setTimeout(() => {
      const fakeProfile = {
        id: userId,
        username: `User${userId}`,
        memberSince: 'March 2025',
        location: `City ${userId}`,
        bio: `This is the bio of user ${userId}.`,
      };
      setProfileData(fakeProfile);
      setTempProfileData({ ...fakeProfile });
      setLoading(false);
    }, 500);
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTempProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (userId === currentUser) {
      // --- REAL CODE FOR SAVING OWN PROFILE ---
      fetch(`/api/users/${userId}`, { // Or /api/profile for logged-in user
        method: 'PUT', // Or POST
        headers: {
          'Content-Type': 'application/json',
          // Include authorization headers
        },
        body: JSON.stringify(tempProfileData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(updatedData => {
          setProfileData(updatedData);
          setTempProfileData(updatedData);
          setIsEditing(false);
        })
        .catch(error => {
          console.error('Error saving profile:', error);
          setError('Failed to save profile.');
        });
      // --- END OF REAL CODE ---
    } else {
      alert("You can only edit your own profile.");
      setIsEditing(false); // Prevent editing other profiles
    }
  };

  const handleCancelClick = () => {
    setTempProfileData(profileData);
    setIsEditing(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <ForumHeader />
      <div className="container mx-auto mt-16 p-4 sm:p-6 md:p-8">
        <div className="mb-4">
        </div>
        <div className={`bg-white rounded-md shadow-md p-4 sm:p-6 md:p-8 ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaUserCircle size={60} className="text-gray-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{profileData.username}</h2>
                {profileData.memberSince && <p className="text-gray-500 text-sm">Member Since: {profileData.memberSince}</p>}
                {profileData.id !== currentUser && <p className="text-gray-500 text-sm">User ID: {profileData.id}</p>}
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={toggleDarkMode} className="mr-4 focus:outline-none">
                {darkMode ? <FaSun size={24} className="text-yellow-500" /> : <FaMoon size={24} className="text-gray-700" />}
              </button>
              {userId === currentUser && !isEditing ? (
                <button
                  onClick={handleEditClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm focus:outline-none focus:shadow-outline"
                >
                  <FaEdit className="mr-2" /> Edit Profile
                </button>
              ) : (
                userId === currentUser && (
                  <div>
                    <button
                      onClick={handleSaveClick}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm mr-2 focus:outline-none focus:shadow-outline"
                    >
                      <FaSave className="mr-2" /> Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full text-sm focus:outline-none focus:shadow-outline"
                    >
                      <FaTimes className="mr-2" /> Cancel
                    </button>
                  </div>
                )
              )}
            </div>
          </div>

          {profileData.bio && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              {isEditing && userId === currentUser ? (
                <textarea
                  name="bio"
                  value={tempProfileData.bio || ''}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
                />
              ) : (
                <p className={`text-gray-700 ${darkMode ? 'text-gray-300' : ''}`}>{profileData.bio}</p>
              )}
            </div>
          )}

          {profileData.location && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              {isEditing && userId === currentUser ? (
                <input
                  type="text"
                  name="location"
                  value={tempProfileData.location || ''}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
                />
              ) : (
                <p className={`text-gray-700 ${darkMode ? 'text-gray-300' : ''}`}>{profileData.location}</p>
              )}
            </div>
          )}

          {/* Add more profile fields to display and edit */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;