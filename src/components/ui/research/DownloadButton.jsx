import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function DownloadButton({ url, filename, label = 'Download' }) {
  if (!url) {
    return null;
  }

  return (
    <Link
      to={url}
      download={filename}
      className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
    >
      {label}
    </Link>
  );
}

export default DownloadButton;