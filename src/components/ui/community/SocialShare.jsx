import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

function SocialShare({ url, title, hashtags, size = 32 }) {
  return (
    <div className="flex space-x-3">
      <FacebookShareButton url={url} quote={title} hashtag={hashtags}>
        <FacebookIcon round size={size} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} hashtags={hashtags}>
        <TwitterIcon round size={size} />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon round size={size} />
      </WhatsappShareButton>

      <EmailShareButton url={url} subject={title} body={`Check out this: ${url}`}>
        <EmailIcon round size={size} />
      </EmailShareButton>
    </div>
  );
}

export default SocialShare;

// Example Usage (within a post or article):
// <SocialShare url="https://example.com/akan_proverb" title="Akan Proverb: 'Obi nte...' " hashtags={['Akan', 'Proverb', 'Culture']} />