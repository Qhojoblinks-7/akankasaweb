
import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { BreadcrumbProvider } from './BreadcrumbContext';

const landingPageLinks = [
  { to: '/learn-akan', label: 'Learn Akan' },
  { to: '/akan-culture', label: 'Akan Culture' },
  { to: '/akan-dictionary', label: 'Akan Dictionary' },
  { to: '/research', label: 'Research' },
  { to: '/community', label: 'Community' },
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/forum', label: 'Forum' },
  { to: '/forum/thread/:threadId', label: 'Discussion' },
  { to: '/learn/beginner', label: 'Beginner' },
  { to: '/learn/intermediate', label: 'Intermediate' },
  { to: '/learn/advanced', label: 'Advanced' },
  { to: '/learn-home-page', label: 'Learn' },
  { to: '/resources', label: 'Resources' },
  { to: '/mobile-forum', label: 'Mobile Forum' },
  { to: '/profile', label: 'Profile' },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BreadcrumbProvider landingPageLinks={landingPageLinks}>
        <App />
      </BreadcrumbProvider>
    </BrowserRouter>
  </StrictMode>
)
