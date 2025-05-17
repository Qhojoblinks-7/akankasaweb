// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SignIn from './components/pages/SignIn';
import RegistrationForm from './components/pages/RegistrationForm';
import AboutPage from './components/pages/AboutPage';
import TermsOfServicePage from './components/pages/TermsOfServicePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import LearnHomePage from './components/ui/learnPage/LearnHomePage';
import BeginnerLevelPage from './components/pages/BeginnerLevelPage';
import IntermediateLevelPage from './components/pages/IntermediateLevelPage';
import AdvancedLevelPage from './components/pages/AdvancedLevelPage';
import AdvancedDashboardPage from './components/pages/AdvancedDashboardPage';
import IntermediateDashboardPage from './components/pages/IntermediateDashboardPage';
import BeginnerDashboardPage from './components/pages/BeginnerDashboardPage';
import VideoPlaybackPage from './components/pages/VideoPlaybackPage';
import ReadingPage from './components/pages/ReadingPage';
import ForumMainPage from './components/pages/ForumMainPage';
import ThreadDetailPage from './components/pages/ThreadDetailPage';
import ViewResourcePage from './components/pages/ViewResourcePage';
import ProfilePage from './components/pages/ProfilePage';
import ResponsiveForumPage from './components/pages/ResponsiveForumPage';
import ForumContainer from './components/ui/forum/ForumContainer';
import LearnHeader from './components/ui/learnPage/LearnHeader'; // Assuming your header is here
import DictionaryPage from './components/pages/DictionaryPage';
function App() {
  const location = useLocation();



  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn/beginner" element={<BeginnerLevelPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="register" element={<RegistrationForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/learn-home-page" element={<LearnHomePage />} />
        <Route path="/learn/intermediate" element={<IntermediateLevelPage />} />
        <Route path="/learn/advanced" element={<AdvancedLevelPage />} />
        <Route path="/dashboard/:level" element={<BeginnerDashboardPage />} />
        <Route path="/dashboard/:level" element={<IntermediateDashboardPage />} />
        <Route path="/dashboard/:level" element={<AdvancedDashboardPage />} />
        <Route path="/dashboard/:level/module/:moduleId/video/:videoId" element={<VideoPlaybackPage />} />
        <Route path="/dashboard/:level/module/:moduleId/reading/:readingId" element={<ReadingPage />} />
        <Route path="/forum" element={<ForumMainPage />} />
        <Route path="/forum/thread/:threadId" element={<ForumContainer />} />
        <Route path="/resources" element={<ViewResourcePage />} />
        <Route path="/mobile-forum" element={<ResponsiveForumPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
      </Routes>
    </>
  );
}

export default App;