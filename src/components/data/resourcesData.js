// src/data/resourcesData.js

export const resourcesData = [
  // Beginner Resources
  {
    id: 'intro-akan-linguistics',
    category: 'Beginner',
    type: 'PDF',
    title: 'Introduction to Akan Linguistics',
    author: 'Dr. Afia Owusu',
    year: '2022',
    description: 'A primer covering the basics of Akan phonology and grammar for new learners.',
    link: '/resources/intro-akan-linguistics',
    actualContentLink: '/documents/intro-akan-linguistics.pdf',
    iconType: 'pdf',
  },
  {
    id: 'basic-cultural-texts',
    category: 'Beginner',
    type: 'PDF',
    title: 'Basic Cultural Studies Texts',
    author: 'Prof. Kojo Mensah',
    year: '2021',
    description: 'Key readings on Akan traditions, rituals, and heritage for beginners.',
    link: '/resources/basic-cultural-texts',
    actualContentLink: '/documents/basic-cultural-texts.pdf',
    iconType: 'pdf',
  },
  {
    id: 'akan-alphabet-pronunciation-video',
    category: 'Beginner',
    type: 'Multimedia',
    title: 'Akan Alphabet Pronunciation Video',
    author: 'Multimedia',
    year: '2023',
    description: 'Visual and audio guide to standard Akan alphabet sounds.',
    link: '/resources/akan-alphabet-pronunciation-video',
    videoUrl: 'https://www.youtube.com/embed/j1uVl9iJ-J8', // **IMPORTANT: Use actual embed URL**
    imageUrl: 'https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Akan+Alphabet+Video+Thumbnail',
    iconType: 'video',
    relatedVideos: [
      { title: 'Akan Twi Tones', videoUrl: 'https://www.youtube.com/embed/another-video-id-1' },
      { title: 'Counting in Twi', videoUrl: 'https://www.youtube.com/embed/another-video-id-2' },
      { title: 'Twi Greetings Explained', videoUrl: 'https://www.youtube.com/embed/another-video-id-3' },
    ],
  },
  // Intermediate Resources
  {
    id: 'akan-oral-traditions-analysis',
    category: 'Intermediate',
    type: 'PDF',
    title: 'Akan Oral Traditions Analysis',
    author: 'Nana Yaw Boateng',
    year: '2020',
    description: 'Examining the narrative forms and significance of Akan oral traditions through case studies.',
    link: '/resources/akan-oral-traditions-analysis',
    actualContentLink: '/documents/akan-oral-traditions-analysis.pdf',
    iconType: 'pdf',
  },
  {
    id: 'historical-accounts-of-akan-kingdoms',
    category: 'Intermediate',
    type: 'PDF',
    title: 'Historical Accounts of Akan Kingdoms',
    author: 'Abena Sarpong',
    year: '2021',
    description: 'Documented histories and analyses of major Akan kingdoms and their social structures.',
    link: '/resources/historical-accounts-of-akan-kingdoms',
    actualContentLink: '/documents/akan-historical-accounts.pdf',
    iconType: 'pdf',
  },
  {
    id: 'akan-artifacts-visual-archive',
    category: 'Intermediate',
    type: 'Multimedia',
    title: 'Akan Artifacts: A Visual Archive',
    author: 'Multimedia',
    year: '2023',
    description: 'An image-based collection of Akan artifacts annotated for research use.',
    link: '/resources/akan-artifacts-visual-archive',
    actualContentLink: '/galleries/akan-artifacts-visual-archive',
    imageUrl: 'https://via.placeholder.com/800x600/C1FFD1/808080?text=Akan+Artifacts+Main+Image',
    iconType: 'image',
    galleryImages: [
      { src: 'https://via.placeholder.com/1000x700/C1FFD1/808080?text=Artifact+1', alt: 'Akan artifact 1', caption: 'Ancient carving from Ashanti region.' },
      { src: 'https://via.placeholder.com/1000x700/A0D8E6/FFFFFF?text=Artifact+2', alt: 'Akan artifact 2', caption: 'Traditional kente cloth pattern.' },
      { src: 'https://via.placeholder.com/1000x700/F0F0F0/000000?text=Artifact+3', alt: 'Akan artifact 3', caption: 'Gold dust weights.' },
      { src: 'https://via.placeholder.com/1000x700/DDAADD/FFFFFF?text=Artifact+4', alt: 'Akan artifact 4', caption: 'Adinkra symbols on pottery.' },
    ],
  },
  // Advanced / Academic Resources
  {
    id: 'the-syntax-of-akan-serial-verb-constructions',
    category: 'Advanced / Academic',
    type: 'Journal',
    title: 'The Syntax of Akan Serial Verb Constructions',
    author: 'Dr. Kwame Adjei',
    year: '2019',
    description: 'A collection of leading academic articles in advanced Akan language research.',
    link: '/articles/syntax-akan-svc',
    actualContentLink: '/documents/the-syntax-of-akan-serial-verb-constructions.pdf',
    iconType: 'journal',
  },
  {
    id: 'dissertations-on-akan-language',
    category: 'Advanced / Academic',
    type: 'Thesis',
    title: 'Dissertations on Akan Language',
    author: 'Various Authors',
    year: '2022',
    description: 'Selected doctoral and master\'s dissertations on phonology, syntax, and semantics.',
    link: '/resources/dissertations-on-akan-language',
    actualContentLink: '/documents/dissertations-on-akan-language.pdf',
    iconType: 'thesis',
  },
  {
    id: 'akan-social-structures-animated-diagrams',
    category: 'Advanced / Academic',
    type: 'Interactive Module',
    title: 'Akan Social Structures: Animated Diagrams',
    author: 'Multimedia',
    year: '2023',
    description: 'Interactive visuals explaining kinship systems and social hierarchies among Akan.',
    link: '/resources/akan-social-structures-animated-diagrams',
    actualContentLink: '/modules/akan-social-structures-animated-diagrams',
    imageUrl: 'https://via.placeholder.com/600x400/FFC1DD/808080?text=Animated+Diagrams+Thumbnail',
    iconType: 'interactive',
  },
  // NEW: A Text-Heavy Article/Report Resource
  {
    id: 'akan-linguistic-evolution-report',
    category: 'Advanced / Academic',
    type: 'Report', // New type for text-heavy content
    title: 'A Comprehensive Report on Akan Linguistic Evolution',
    author: 'Dr. Mensah Ofori & Prof. Yaa Nkrumah',
    year: '2024',
    description: 'An in-depth analysis of the historical development and modern variations of the Akan language family, including dialectical shifts and external influences.',
    link: '/resources/akan-linguistic-evolution-report',
    fullTextContent: `
      <p>The Akan language, spoken by over 20 million people primarily in Ghana and parts of Côte d'Ivoire, represents a fascinating case study in linguistic evolution. Belonging to the Kwa branch of the Niger-Congo language family, Akan is characterized by its tonal nature, rich vowel harmony system, and intricate serial verb constructions.</p>

      <h2>Historical Overview and Dialectical Divergence</h2>
      <p>The linguistic ancestors of modern Akan dialects are believed to have originated from the ancient Bono Kingdom. Over centuries, migrations and interactions led to the development of distinct dialects, each with unique phonological, morphological, and lexical features. The most prominent dialects include:</p>
      <ul>
        <li><strong>Asante Twi:</strong> Widely spoken in the Ashanti region and serves as a lingua franca.</li>
        <li><strong>Fante:</strong> Predominant along the coastal areas and central Ghana.</li>
        <li><strong>Akuapem Twi:</strong> One of the earliest standardized dialects, used in Bible translations.</li>
        <li><strong>Akyem:</strong> Spoken in the Eastern region, closely related to Akuapem.</li>
      </ul>
      <p>While these dialects share a high degree of mutual intelligibility, significant divergences exist, particularly in phonetics and specific vocabulary. For instance, the realization of certain vowels and consonants can vary considerably, affecting pronunciation and sometimes leading to slight semantic shifts.</p>

      <h2>Phonological Shifts and Tonal Innovations</h2>
      <p>One of the most intriguing aspects of Akan linguistic evolution is its dynamic phonological landscape. Historical linguists have traced several key sound changes that have shaped the current tonal patterns. The interplay between tone and intonation is critical for meaning, where a single word can have multiple meanings depending on its tonal contour.</p>
      <figure>
        <img src="https://via.placeholder.com/800x450/F0F8FF/333333?text=Akan+Tonal+Diagram" alt="Diagram showing Akan tonal patterns" class="rounded-lg shadow-md my-4">
        <figcaption>Fig 1: Illustrative diagram of basic Akan tonal patterns in simple sentences.</figcaption>
      </figure>
      <p>Recent studies suggest that external linguistic influences, particularly from trade languages and colonial contact, have also played a subtle role in accelerating certain phonetic shifts, although the core grammatical structure remains robustly indigenous.</p>

      <h2>Syntactic Complexities: Serial Verb Constructions</h2>
      <p>A hallmark of Akan grammar is its pervasive use of serial verb constructions (SVCs). These are sequences of two or more verbs that function as a single predicate, expressing a complex event without overt conjunctions. For example:</p>
      <blockquote>
        <p><em>Kofi kɔɔ gua tɔɔ aduan.</em></p>
        <p><em>Kofi went-market bought food.</em></p>
        <p><em>"Kofi went to the market and bought food."</em></p>
      </blockquote>
      <p>The semantic relationship between the verbs in an SVC can indicate causality, sequential action, manner, or direction. Understanding the nuances of SVCs is fundamental to mastering advanced Akan expression.</p>

      <h2>Future Research Directions</h2>
      <p>Future research will focus on the sociolinguistic aspects of dialectal maintenance among the Ghanaian diaspora, the impact of digital communication on contemporary Akan usage, and the potential for a more unified orthography across all major dialects. Longitudinal studies of language acquisition in children are also paramount for understanding ongoing evolutionary processes.</p>

      <p class="text-sm italic text-gray-600 mt-8">This report was compiled as part of the Akan Language Dynamics Project (ALDP) at the University of Ghana, 2024.</p>
    `,
    iconType: 'document',
    // actualContentLink: '/documents/akan-linguistic-evolution-report.pdf', // Optional PDF download
  },
];

export const interactiveModulesData = [
  {
    id: 'akan-phonology-timeline',
    title: 'Akan Phonology Timeline',
    description: 'Explore interactive timelines illustrating key changes and developments in Akan phonology across centuries.',
    link: '/resources/akan-phonology-timeline',
    actualContentLink: '/modules/akan-phonology-timeline',
    imageUrl: 'https://via.placeholder.com/600x400/E6E6FA/808080?text=Phonology+Timeline+Thumbnail',
    type: 'Interactive Module',
    category: 'Interactive Cultural Modules',
    iconType: 'interactive',
  },
  {
    id: 'cultural-practice-simulator',
    title: 'Cultural Practice Simulator',
    description: 'Engage with immersive simulations of Akan ceremonies and rituals for research and teaching.',
    link: '/resources/cultural-practice-simulator',
    actualContentLink: '/modules/cultural-practice-simulator',
    imageUrl: 'https://via.placeholder.com/600x400/FFFACD/808080?text=Cultural+Simulator+Thumbnail',
    type: 'Interactive Module',
    category: 'Interactive Cultural Modules',
    iconType: 'interactive',
  },
  {
    id: 'animated-akan-kinship-diagrams',
    title: 'Animated Akan Kinship Diagrams',
    description: 'Interact with animated diagrams detailing Akan social hierarchies and kinship structures.',
    link: '/resources/animated-akan-kinship-diagrams',
    actualContentLink: '/modules/animated-akan-kinship-diagrams',
    imageUrl: 'https://via.placeholder.com/600x400/F0FFF0/808080?text=Kinship+Diagrams+Thumbnail',
    type: 'Animated Diagrams',
    category: 'Interactive Cultural Modules',
    iconType: 'interactive',
  },
];

export const getResourceById = (id) => {
  const allResources = [...resourcesData, ...interactiveModulesData];
  return allResources.find(res => res.id === id);
};