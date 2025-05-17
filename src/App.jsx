// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/ui/pages/HomePage';
import SignIn from './components/ui/pages/SignIn';
import RegistrationForm from './components/ui/pages/RegistrationForm';
import AboutPage from './components/ui/pages/AboutPage';
import TermsOfServicePage from './components/ui/pages/TermsOfServicePage';
import PrivacyPolicyPage from './components/ui/pages/PrivacyPolicyPage';
import LearnHomePage from './components/ui/learnPage/LearnHomePage';
import BeginnerLevelPage from './components/ui/pages/BeginnerLevelPage';
import IntermediateLevelPage from './components/ui/pages/IntermediateLevelPage';
import AdvancedLevelPage from './components/ui/pages/AdvancedLevelPage';
import AdvancedDashboardPage from './components/ui/pages/AdvancedDashboardPage';
import IntermediateDashboardPage from './components/ui/pages/IntermediateDashboardPage';
import BeginnerDashboardPage from './components/ui/pages/BeginnerDashboardPage';
import VideoPlaybackPage from './components/ui/pages/VideoPlaybackPage';
import ReadingPage from './components/ui/pages/ReadingPage';
import ForumMainPage from './components/ui/pages/ForumMainPage';
import ThreadDetailPage from './components/ui/pages/ThreadDetailPage';
import ViewResourcePage from './components/ui/pages/ViewResourcePage';
import ProfilePage from './components/ui/pages/ProfilePage';
import ResponsiveForumPage from './components/ui/pages/ResponsiveForumPage';
import ForumContainer from './components/ui/forum/ForumContainer';
import LearnHeader from './components/ui/learnPage/LearnHeader'; // Assuming your header is here
import DictionaryPage from './components/ui/pages/DictionaryPage';
import CultureHighlightsPage from './components/ui/pages/CultureHighlightsPage';
import ResearchPage from './components/ui/pages/ResearchPage';
import CommunityPage from './components/ui/pages/CommunityPage';
function App() {


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
        <Route path="/culture" element={<CultureHighlightsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </>
  );
}

export default App;