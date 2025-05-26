// src/pages/ArticlePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Import Link for navigation to Home

// Data source (our mock database)
import { articlesData } from '../../data/articlesData'; // Ensure this path is correct

// Corrected import paths for Navbar and Footer based on your existing structure
import Navbar from '../home/Header';
import Footer from '../home/Footer';

// Import components for each section of the Article page
import ArticleBreadcrumbs from '../article/ArticleBreadcrumbs';
import ArticleHeader from '../article/ArticleHeader';
import ArticleMetadataAbstract from '../article/ArticleMetadataAbstract';
import ArticleDownloadsShare from '../article/ArticleDownloadsShare';
import FullArticleContent from '../article/FullArticleContent'; // FullArticleContent will now handle the video
import ArticleCitation from '../article/ArticleCitation';
import ArticleRelatedResources from '../article/ArticleRelatedResources';
import ArticleDiscussion from '../article/ArticleDiscussion'; // Assuming you'll create this component based on the "Discuss this Research" button


function ArticlePage() {
  const { articleId } = useParams(); // Get the articleId from the URL (e.g., /article/akan-svc -> articleId = "akan-svc")
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data fetching with a small delay for a real-world feel
    const fetchArticle = async () => {
      setLoading(true);
      setError(null); // Clear any previous errors

      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay

        const data = articlesData[articleId]; // Look up article by ID from our mock data

        if (data) {
          setArticleData(data);
        } else {
          // If article not found, navigate to a 404 page (or home)
          navigate('/404'); // Assuming you have a /404 route configured
          // Alternatively, you could just set an error state here:
          // setError("Article not found.");
        }
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId, navigate]); // Re-run effect if articleId changes or navigate function changes (though navigate is stable)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-red-600">
        <p className="text-xl">{error}</p>
        <Link to="/" className="mt-4 text-orange-600 hover:underline">Go to Home</Link>
      </div>
    );
  }

  // If articleData is null after loading (e.g., if navigate('/404') was called), return null
  // This prevents rendering components with null data while redirecting
  if (!articleData) {
      return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans ">
      <Navbar /> {/* Your main header/navigation component */}

      <main className="container mx-auto px-4 md:px-0 py-8 ">
        {/* Dynamic Breadcrumbs Component */}
        <ArticleBreadcrumbs articleTitle={articleData.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (Left - 2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            {/* ArticleHeader now only shows header details and a static image/visual cue */}
            <ArticleHeader data={articleData} />

            {/* ArticleMetadataAbstract will receive the metadata if it exists */}
            {articleData.metadata && <ArticleMetadataAbstract data={articleData.metadata} />}

            {/* FullArticleContent will receive the entire articleData to handle both text and video */}
            <FullArticleContent data={articleData} /> {/* IMPORTANT: Passing full articleData */}

            {/* ArticleCitation will receive citation data */}
            {articleData.citation && <ArticleCitation data={articleData.citation} />}
          </div>

          {/* Sidebar Column (Right - 1/3 width on large screens) */}
          <div className="lg:col-span-1 space-y-8">
            {/* Pass relevant data to ArticleDownloadsShare */}
            <ArticleDownloadsShare
              data={{
                title: articleData.title,
                pdfLink: articleData.pdfLink, // Ensure pdfLink is present in articlesData
                wordLink: articleData.wordLink, // Ensure wordLink is present in articlesData
                pdfAvailable: articleData.pdfAvailable, // Pass this too if needed for conditional rendering inside
              }}
            />
            {/* Assuming you will create an ArticleDiscussion component */}
            <ArticleDiscussion />
          </div>
        </div>

        {/* Conditionally render related resources if they exist and are not empty */}
        {articleData.relatedResources && articleData.relatedResources.length > 0 && (
          <ArticleRelatedResources data={articleData.relatedResources} />
        )}
      </main>

      <Footer /> {/* Your site footer component */}
    </div>
  );
}

export default ArticlePage;