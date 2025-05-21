// src/culture/components/CulturalRhythmsAndTimelineSection.js
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import videoThumbnail from '../../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg'; // Adjust path as needed for Adowa Dance video

const culturalTimelineData = [
  { year: 'Pre-13th Century', description: 'Early Akan settlements form in the forest region of present-day Ghana.' },
  { year: '15th-16th Century', description: 'Rise of the Akan states including Bono, Denkyira, and early Asante confederacy.' },
  { year: '1701', description: 'Osei Tutu becomes the first Asantehene (king) of the united Asante Kingdom.' },
  // Add more timeline events as needed
];

function CulturalRhythmsAndTimelineSection({ sectionRef }) {
  return (
    <section id="CulturalRhythmsAndTimeline" ref={sectionRef} className="bg-blue-800 rounded-lg shadow-lg p-6 md:p-8 mb-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Experience Akan Culture</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Video Player Section (Left) */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-xl">
            <img src={videoThumbnail} alt="Traditional Adowa Dance Video Thumbnail" className="w-full h-full object-cover" />
            <button className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors rounded-lg p-4">
              <FaPlay size={60} className="text-white" />
              <p className="font-semibold text-lg mt-2">Traditional Adowa Dance</p>
              <p className="text-sm">Watch a performance of this ceremonial dance</p>
            </button>
            {/* You would integrate a real video player here (e.g., <video> tag or react-player) */}
          </div>
        </div>

        {/* Cultural Timeline Section (Right) */}
        <div className="lg:w-1/2 bg-blue-900 rounded-lg p-6 lg:p-8 shadow-inner text-left h-full">
          <h3 className="text-2xl font-bold mb-4">Cultural Timeline</h3>
          <div className="relative pl-6 border-l-2 border-yellow-500">
            {culturalTimelineData.map((event, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="absolute -left-3 mt-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center"></div>
                <h4 className="font-bold text-lg mb-1">{event.year}</h4>
                <p className="text-sm text-gray-200">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CulturalRhythmsAndTimelineSection;