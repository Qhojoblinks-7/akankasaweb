// src/community/components/DiscussionBoards.js
import React from 'react';
import { FaSearch, FaBook, FaHandsHelping, FaLightbulb, FaComments } from 'react-icons/fa'; // Updated icons

const discussionBoardsData = [
  { icon: <FaBook />, board: 'Language Help', topics: 98, posts: 453, lastActive: '2 hours ago' }, // Updated posts
  { icon: <FaHandsHelping />, board: 'Cultural Exchange', topics: 57, posts: 311, lastActive: 'Yesterday' }, // Updated posts
  { icon: <FaLightbulb />, board: 'Research Corner', topics: 34, posts: 189, lastActive: '3 days ago' },
  { icon: <FaComments />, board: 'Off Topic & Community', topics: 14, posts: 73, lastActive: '4 days ago' },
];

function DiscussionBoards() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange-800">Discussion Boards</h2> {/* Heading color matched to hero section */}
        <a href="#" className="text-blue-600 hover:underline text-sm font-semibold"> {/* Matched font-semibold from image */}
          Start a New Thread +
        </a>
      </div>

      {/* Discussion Board Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200"> {/* Added subtle border */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white"> {/* Background changed to white for header */}
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Board
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Topics
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Posts
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {discussionBoardsData.map((board, index) => (
              <tr key={index} className="hover:bg-yellow-50 transition-colors"> {/* Added hover effect */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                  <span className="mr-3 text-yellow-600 text-xl">{board.icon}</span> {/* Icon styling */}
                  {board.board}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {board.topics}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {board.posts}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {board.lastActive}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    View <span aria-hidden="true">&gt;</span> {/* Changed arrow to > for exact match */}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 mb-6 flex items-center">
        {/* The little icon next to the "All forums are actively moderated" text */}
        <span className="mr-2 text-yellow-600 text-lg">⚠️</span>
        <span className="font-semibold text-orange-800">All forums</span> are actively moderated for a safe and respectful environment.
      </p>

      {/* Search Forums (Remains the same as previous) */}
      <div className="flex items-center bg-white rounded-lg shadow-md p-4">
        <input
          type="text"
          placeholder="Search forums..."
          className="flex-grow p-2 outline-none text-gray-700"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-md flex items-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </section>
  );
}

export default DiscussionBoards;