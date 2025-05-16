import React from 'react';
import { useParams } from 'react-router-dom';
import ResponsiveForumPage from '../../pages/ResponsiveForumPage'; // Assuming this is the main forum list page
import DiscussionView from './DiscussionView'; // The renamed component

const ForumContainer = () => {
  const { threadId } = useParams();

  return (
    <div className='w-fit'>
      {threadId ? (
        // Render the DiscussionView if a threadId is present in the URL
        <DiscussionView />
      ) : (
        // Render the main forum list page if no threadId is present
        <ResponsiveForumPage />
      )}
    </div>
  );
};

export default ForumContainer;