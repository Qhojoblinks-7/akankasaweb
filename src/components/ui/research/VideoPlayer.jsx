// src/components/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = ({ videoUrl, title, relatedVideos = [] }) => {
  if (!videoUrl) {
    return <p className="text-gray-500">Video content not available.</p>;
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Main Video: {title}</h3>
      <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {relatedVideos.length > 0 && (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Related Videos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedVideos.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow transition-shadow duration-200">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  {/* You might want a thumbnail for related videos, or just directly embed/link */}
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;