// src/community/components/FeaturedDiscussions.js
import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Icon for user avatar

const featuredDiscussionsData = [
  {
    question: "How do you say 'Welcome' in different Akan dialects?",
    author: "Ama Mensah",
    date: "May 22, 2025",
  },
  {
    question: "Share your favorite Akan proverbs and their meanings!",
    author: "Kofi Owusu",
    date: "May 21, 2025",
  },
  {
    question: "Announcing the June Akan Storytelling Night!",
    author: "Ellis Nelson",
    date: "May 20, 2025",
  },
];

function FeaturedDiscussions() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Discussions</h2>
        <a href="#" className="text-blue-600 hover:underline">
          View All <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredDiscussionsData.map((discussion, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
              {discussion.question}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <FaUserCircle className="mr-2 text-xl" />
              <span>
                {discussion.author} <span className="text-gray-500">• {discussion.date}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDiscussions;