// src/pages/ArticlePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router

// Corrected import paths for Navbar and Footer based on your existing structure
import Navbar from '../home/Header';
import Footer from '../home/Footer';

// Import components for each section of the Article page
import ArticleBreadcrumbs from '../article/ArticleBreadcrumbs';
import ArticleHeader from '../article/ArticleHeader';
import ArticleMetadataAbstract from '../article/ArticleMetadataAbstract';
import ArticleDownloadsShare from '../article/ArticleDownloadsShare';
import FullArticleContent from '../article/FullArticleContent';
import ArticleCitation from '../article/ArticleCitation';
import ArticleRelatedResources from '../article/ArticleRelatedResources';

function ArticlePage() {
  // In a real application, you'd fetch article data based on a route parameter (e.g., article ID)
  // For now, we'll hardcode example data or assume props are passed.
  const articleData = {
    title: "The Syntax of Akan Serial Verb Constructions",
    description: "An in-depth exploration of serial verb constructions in Akan, focusing on grammatical structure, usage, and implications for linguistic theory.",
    author: "Kwame Ofori",
    publishedDate: "April 12, 2024",
    pdfAvailable: true,
    keywords: ["Serial Verb", "Syntax"],
    metadata: {
      authors: "Kwame Ofori, Ama Nyarko",
      publication: "Journal of African Linguistics",
      methodology: "Corpus-based analysis; Field interviews with native Akan speakers; Syntactic tree diagramming.",
      keywordsDetailed: ["Akan", "Serial Verb", "Syntax", "Linguistics", "Fieldwork"],
      abstract: "This paper investigates the syntactic properties of serial verb constructions (SVCs) in Akan, analyzing their structure, permissible verb combinations, and functional roles within a sentence. The study draws on corpus evidence and native speaker intuition to propose a revised model of SVC formation in Akan, with implications for comparative Akan linguistics."
    },
    fullArticle: {
        introduction: "Serial verb constructions (SVCs) are a defining feature of Akan syntax, allowing speakers to string together multiple verbs in a single clause. In this study, we analyze the structural patterns, semantic roles, and syntactic constraints characterizing SVCs in Akan.",
        background: "Akan, a Niger-Congo language, exhibits a rich variety of SVCs used in both spoken and written forms. The phenomenon has significant implications for typological and theoretical linguistics, as well as practical ramifications for language learners and educators.",
        methodology: "Data collection from corpora and field interviews. Linguistic elicitation tasks with native speakers. Syntactic tree diagramming (see interactive diagram below).",
        analysis: "Our findings suggest three major types of SVCs in Akan, each with unique syntactic and semantic properties. The following diagram illustrates the structure of a basic SVC.",
        diagramSrc: "path/to/your/diagram.png", // You'll need to provide this image
        examples: [
            { id: 1, text: "Di kɔ sukuu (“Go to school”)" },
            { id: 2, text: "Fa no brɛ me (“Bring it to me”)" }
        ],
        discussion: "SVCs in Akan are not merely a string of verbs, but represent a complex interweaving of actions, intentions, and syntactic relations. This study proposes a formal model for predicting SVC acceptability based on verb classes and argument structure.",
        conclusion: "The syntactic analysis of SVCs in Akan enriches our understanding of both the language and broader linguistic theory. Further research is needed to explore cross-dialectal differences and diachronic changes."
    },
    citation: {
      full: "Ofori, K. & Nyarko, A. (2024). The Syntax of Akan Serial Verb Constructions. Journal of African Linguistics, 42(1), 123-145. DOI",
      doiLink: "#" // Placeholder for actual DOI link
    },
    relatedResources: [
      {
        title: "Akan Verb Morphology",
        description: "A comprehensive overview of verb forms and inflections in Akan, highlighting morphological patterns.",
        author: "Ama Nyarko",
        iconType: "document", // Custom icon type for related resources
        link: "#" // Placeholder link for related resources
      },
      {
        title: "Akan Traditions & Customs",
        description: "Insights into core cultural practices, ceremonies, and beliefs shaping Akan society.",
        iconType: "culture", // Custom icon type for related resources
        link: "#" // Placeholder link for related resources
      },
      {
        title: "Akan Dictionary Entry: Serial Verb",
        description: "Explore the full definition, usage, and examples for 'Serial Verb' in the custom Akan dictionary.",
        iconType: "dictionary", // Custom icon type for related resources
        link: "#" // Placeholder link for related resources
      }
    ]
  };


  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar /> {/* Your main header/navigation */}

      <main className="container mx-auto px-4 md:px-0 py-8">
        {/* Updated Breadcrumbs to use Link */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <Link to="/research" className="text-orange-600 hover:underline">
                        Research Features
                    </Link>
                    <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                    </svg>
                </li>
                <li className="flex items-center">
                    {/* Assuming a specific path for the resource library, or you can make it dynamic */}
                    <Link to="/research/resource-library" className="text-orange-600 hover:underline">
                        Resource Library
                    </Link>
                    <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                    </svg>
                </li>
                <li>
                    <span className="text-gray-700">{articleData.title}</span> {/* Dynamic title */}
                </li>
            </ol>
        </nav>
        {/* End Updated Breadcrumbs */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (Left - 2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            <ArticleHeader data={articleData} />
            <ArticleMetadataAbstract data={articleData.metadata} />
            <FullArticleContent data={articleData.fullArticle} />
            <ArticleCitation data={articleData.citation} />
          </div>

          {/* Sidebar Column (Right - 1/3 width on large screens) */}
          <div className="lg:col-span-1 space-y-8">
            <ArticleDownloadsShare />
            {/* The "Discuss this Research" button is part of the download/share section visually */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition duration-300 w-full flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.233-1.189l-2.417.403a1 1 0 01-1.116-1.116l.403-2.417A8 8 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                Discuss this Research
              </button>
            </div>
          </div>
        </div>

        <ArticleRelatedResources data={articleData.relatedResources} />
      </main>

      <Footer /> {/* Your site footer */}
    </div>
  );
}

export default ArticlePage;