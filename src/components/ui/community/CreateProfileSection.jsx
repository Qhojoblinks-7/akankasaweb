// src/community/components/CreateProfileSection.js
import React from 'react';
import { FaUserPlus, FaUserCog } from 'react-icons/fa'; // Icons for the buttons
import userAvatar from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Placeholder for the avatar image

function CreateProfileSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center md:w-2/3">
          <img
            src={userAvatar}
            alt="User Avatar Placeholder"
            className="w-20 h-20 rounded-full mr-6 border-4 border-yellow-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Profile</h2>
            <p className="text-gray-700 text-sm">
              Build your community experience, track your activity, and connect with others.
              Already have an account?
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:w-1/3 justify-end">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-5 rounded-full text-md transition duration-300 flex items-center justify-center">
            <FaUserPlus className="mr-2" /> Create Profile
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-5 rounded-full text-md transition duration-300 flex items-center justify-center">
            <FaUserCog className="mr-2" /> Manage Profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateProfileSection;