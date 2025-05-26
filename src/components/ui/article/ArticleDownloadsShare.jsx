// src/article/ArticleDownloadsShare.jsx
import React from 'react';

const ArticleDownloadsShare = ({ data }) => {
  if (!data) return null; // Defensive check for data

  const handlePrint = () => {
    window.print(); // Triggers the browser's print dialog
  };

  // Function to create share URLs (these are examples and might need adjustments for real APIs)
  const getShareUrl = (platform) => {
    const articleUrl = window.location.href; // Get current article URL
    const articleTitle = data.title || "Check out this article"; // Use article title or a fallback

    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`;
      case 'linkedin': // Added LinkedIn as a common share platform
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`;
      case 'copy': // For copying the link to clipboard
        return articleUrl;
      default:
        return '#';
    }
  };

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl('copy'));
      alert('Article link copied to clipboard!'); // Simple feedback
    } catch (err) {
      console.error('Failed to copy link: ', err);
      alert('Failed to copy link. Please copy manually from your browser URL bar.');
    }
  };


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
        {data.pdfLink && ( // Conditionally render PDF download
          <a
            href={data.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-3 rounded-md text-base hover:bg-orange-700 transition duration-300 w-full flex items-center justify-center"
          >
            {/* PDF Icon */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 2.414L16.586 6A2 2 0 0117 7.414V16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm6 0H6v12h9V7.414L10.586 4zM10 12a1 1 0 10-2 0v2a1 1 0 102 0v-2zm-3-1a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
            </svg>
            PDF
          </a>
        )}
        {data.wordLink && ( // Conditionally render Word download
          <a
            href={data.wordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md text-base hover:bg-gray-200 transition duration-300 w-full flex items-center justify-center"
          >
            {/* Word Icon */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              <path fillRule="evenodd" d="M9 16a1 1 0 100-2h2a1 1 0 100 2H9zm-1-4a1 1 0 100-2h4a1 1 0 100 2H8z" clipRule="evenodd" />
            </svg>
            Word
          </a>
        )}
        <button
          onClick={handlePrint}
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md text-base hover:bg-gray-200 transition duration-300 w-full flex items-center justify-center"
        >
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
        <a href={getShareUrl('facebook')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.153 8.438 9.873V15h-2.969v-3h2.969V9.403c0-2.964 1.76-4.607 4.417-4.607 1.258 0 2.059.093 2.325.134v2.798h-1.64c-1.393 0-1.658.663-1.658 1.621V12h3.298l-.506 3h-2.792v6.873C18.343 21.153 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        {/* Twitter (X) Icon */}
        <a href={getShareUrl('twitter')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            {/* Note: The Twitter icon path provided was not standard. Using a generic one or assuming it's X's new logo.
                 For actual X logo, you might need to use its specific SVG path or an icon library.
                 I'm using a placeholder path for now if it's not the correct one for X. */}
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.884L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
         {/* LinkedIn Icon - Added as a common share target */}
        <a href={getShareUrl('linkedin')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm8.172-1.928H5.66v7.834h2.512V10.072zm-1.258-2.617c-.854 0-1.547-.693-1.547-1.547 0-.854.693-1.547 1.547-1.547.854 0 1.547.693 1.547 1.547 0 .854-.693 1.547-1.547 1.547zm9.641 2.617h-2.512v3.896c0 .874-.017 1.996-1.218 1.996-1.22 0-1.405-.952-1.405-1.936v-3.956H9.722v4.254c0 1.503 1.05 3.328 3.125 3.328 2.378 0 3.704-1.964 3.704-4.818v-4.254z" clipRule="evenodd" />
          </svg>
        </a>
        {/* Copy Link Icon */}
        <button onClick={copyLinkToClipboard} className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 005.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 010-2.828z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ArticleDownloadsShare;