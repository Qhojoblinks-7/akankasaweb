// src/article/ArticleDownloadsShare.jsx
import React from 'react';

const ArticleDownloadsShare = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      {/* Download Section */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        {/* Download Icon */}
        <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
        Download
      </h3>
      <div className="space-y-3 mb-8">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-md text-base hover:bg-orange-700 transition duration-300 w-full flex items-center justify-center">
          {/* PDF Icon */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm6 0H6v12h9V7.414L10.586 4zM10 12a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-3-1a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
          </svg>
          PDF
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md text-base hover:bg-gray-200 transition duration-300 w-full flex items-center justify-center">
          {/* Word Icon */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            <path fillRule="evenodd" d="M9 16a1 1 0 100-2h2a1 1 0 100 2H9zm-1-4a1 1 0 100-2h4a1 1 0 100 2H8z" clipRule="evenodd" />
          </svg>
          Word
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md text-base hover:bg-gray-200 transition duration-300 w-full flex items-center justify-center">
          {/* Print Icon */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5 4V3a1 1 0 011-1h8a1 1 0 011 1v1h.5a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 0116.5 11H16v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2h-.5A1.5 1.5 0 012 9.5V5.5A1.5 1.5 0 013.5 4H5zm9 1V4H6v1h8zm-2 2H8a1 1 0 100 2h4a1 1 0 100-2z" clipRule="evenodd"></path>
          </svg>
          Print
        </button>
      </div>

      {/* Share Section */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        {/* Share Icon */}
        <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 7a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7zm-4 3l-4-4-4 4h3v4h2v-4h3z" clipRule="evenodd"></path>
        </svg>
        Share
      </h3>
      <div className="flex justify-center md:justify-start gap-3">
        {/* Facebook Icon */}
        <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.153 8.438 9.873V15h-2.969v-3h2.969V9.403c0-2.964 1.76-4.607 4.417-4.607 1.258 0 2.059.093 2.325.134v2.798h-1.64c-1.393 0-1.658.663-1.658 1.621V12h3.298l-.506 3h-2.792v6.873C18.343 21.153 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        {/* Twitter Icon */}
        <a href="#" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29 20.251c1.803 0 3.533-.473 5.093-1.385l-1.047-1.127a6.226 6.226 0 01-4.046 1.498c-3.791 0-7.009-3.078-7.009-7.009s3.078-7.009 7.009-7.009a6.226 6.226 0 014.283 1.637l1.047-1.127c-1.56-.912-3.29-1.385-5.093-1.385C4.269 3 0 7.269 0 12s4.269 9 9 9c1.803 0 3.533-.473 5.093-1.385L12.56 20.251z" />
            <path d="M22.42 5.092a.792.792 0 01.182.164.792.792 0 01-.164.182l-2.062 1.94a.792.792 0 01-1.092-.143l-.014-.028a.792.792 0 01.143 1.092l2.062 1.94a.792.792 0 01.182.164.792.792 0 01-.164.182L17.84 10.66a.792.792 0 01-.143-1.092l.014-.028a.792.792 0 011.092.143z" />
          </svg>
        </a>
        {/* Instagram Icon */}
        <a href="#" className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 2C8.683 2 6 4.683 6 8s2.683 6 6 6 6-2.683 6-6-2.683-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" clipRule="evenodd" />
            <path d="M16.5 6a.5.5 0 100-1 .5.5 0 000 1z" />
            <path fillRule="evenodd" d="M4 22c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2H6c-1.104 0-2 .896-2 2v14zm2 0V8h12l.001 14H6z" clipRule="evenodd" />
          </svg>
        </a>
        {/* Link Icon */}
        <a href="#" className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 005.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 010-2.828z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ArticleDownloadsShare;