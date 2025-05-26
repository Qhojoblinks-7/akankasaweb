// src/data/articlesData.js

export const articlesData = {
  // ----------------------------------------------------
  // Full Data for "The Syntax of Akan Serial Verb Constructions"
  // ----------------------------------------------------
  "the-syntax-of-akan-serial-verb-constructions": {
    title: "The Syntax of Akan Serial Verb Constructions",
    description: "An in-depth exploration of serial verb constructions in Akan, focusing on grammatical structure, usage, and implications for linguistic theory.",
    author: "Kwame Ofori",
    publishedDate: "April 12, 2024",
    pdfAvailable: true,
    keywords: ["Serial Verb", "Syntax", "Akan"],
    metadata: {
      authors: "Kwame Ofori, Ama Nyarko",
      publication: "Journal of African Linguistics",
      methodology: "Corpus-based analysis; Field interviews with native Akan speakers; Syntactic tree diagramming.",
      keywordsDetailed: ["Akan", "Serial Verb", "Syntax", "Linguistics", "Fieldwork", "Ghana"],
      abstract: "This paper investigates the syntactic properties of serial verb constructions (SVCs) in Akan, analyzing their structure, permissible verb combinations, and functional roles within a sentence. The study draws on corpus evidence and native speaker intuition to propose a revised model of SVC formation in Akan, with implications for comparative Akan linguistics."
    },
    fullArticle: {
      introduction: "Serial verb constructions (SVCs) are a defining feature of Akan syntax, allowing speakers to string together multiple verbs in a single clause. In this study, we analyze the structural patterns, semantic roles, and syntactic constraints characterizing SVCs in Akan.",
      background: "Akan, a Niger-Congo language, exhibits a rich variety of SVCs used in both spoken and written forms. The phenomenon has significant implications for typological and theoretical linguistics, as well as practical ramifications for language learners and educators.",
      methodology: "Data collection from corpora and field interviews. Linguistic elicitation tasks with native speakers. Syntactic tree diagramming (see interactive diagram below).",
      analysis: "Our findings suggest three major types of SVCs in Akan, each with unique syntactic and semantic properties. The following diagram illustrates the structure of a basic SVC.",
      diagramSrc: "/assets/diagram_akan_svc.png", // Placeholder path for your diagram image
      examples: [
        { id: 1, text: "Di kɔ sukuu (“Go to school”)" },
        { id: 2, text: "Fa no brɛ me (“Bring it to me”)" }
      ],
      discussion: "SVCs in Akan are not merely a string of verbs, but represent a complex interweaving of actions, intentions, and syntactic relations. This study proposes a formal model for predicting SVC acceptability based on verb classes and argument structure.",
      conclusion: "The syntactic analysis of SVCs in Akan enriches our understanding of both the language and broader linguistic theory. Further research is needed to explore cross-dialectal differences and diachronic changes."
    },
    citation: {
      full: "Ofori, K. & Nyarko, A. (2024). The Syntax of Akan Serial Verb Constructions. *Journal of African Linguistics*, 42(1), 123-145. DOI: 10.xxxx/xxxx",
      doiLink: "https://dx.doi.org/10.xxxx/xxxx" // Placeholder for actual DOI link
    },
    relatedResources: [
      {
        title: "Akan Verb Morphology Guide",
        description: "A comprehensive overview of verb forms and inflections in Akan, highlighting morphological patterns.",
        author: "Ama Nyarko",
        iconType: "document",
        link: "/research/articles/akan-verb-morphology-guide"
      },
      {
        title: "Introduction to Akan Linguistics",
        description: "A primer covering the basics of Akan phonology and grammar for new learners.",
        author: "Dr. Afia Owusu",
        iconType: "document",
        link: "/research/articles/introduction-to-akan-linguistics"
      },
      {
        title: "Akan Dictionary Entry: Serial Verb",
        description: "Explore the full definition, usage, and examples for 'Serial Verb' in the custom Akan dictionary.",
        iconType: "dictionary",
        link: "/dictionary/serial-verb" // Link to a dictionary entry
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Akan Verb Morphology Guide"
  // ----------------------------------------------------
  "akan-verb-morphology-guide": {
    title: "Akan Verb Morphology Guide",
    description: "A comprehensive overview of verb forms and inflections in Akan, highlighting morphological patterns.",
    author: "Ama Nyarko",
    publishedDate: "October 10, 2023",
    pdfAvailable: true,
    keywords: ["Morphology", "Akan Verbs", "Grammar"],
    metadata: {
      authors: "Ama Nyarko",
      publication: "Language Studies Journal",
      methodology: "Descriptive linguistics; Comparative analysis; Paradigm construction.",
      keywordsDetailed: ["Akan", "Morphology", "Verbs", "Inflection", "Linguistics", "Tense", "Aspect"],
      abstract: "This guide provides a detailed analysis of Akan verb morphology, including common inflections, tense markers, and agreement patterns. It aims to serve as a practical resource for students and researchers of Akan grammar, offering clear examples and paradigms."
    },
    fullArticle: {
      introduction: "Akan verb morphology is highly systematic, characterized by prefixes, suffixes, and internal changes that convey various grammatical meanings such as tense, aspect, and agreement.",
      background: "Understanding Akan verb forms is fundamental to mastering the language. This guide builds upon existing literature to offer a concise yet comprehensive overview, vital for learners and advanced researchers alike.",
      methodology: "The data for this guide was compiled through extensive review of academic literature, consultation with native Akan speakers, and analysis of recorded speech.",
      analysis: "Key morphological processes include prefixes for subject agreement, suffixes for aspect, and reduplication for intensity. Examples illustrate each pattern, demonstrating their usage in context.",
      examples: [
        { id: 1, text: "Kɔ (Go)" },
        { id: 2, text: "Rekɔ (Going)" },
        { id: 3, text: "Akɔ (Has gone)" }
      ],
      discussion: "The complex interplay of these morphological elements allows for a rich expression of nuance in Akan verbs, often conveying information that requires multiple words in English.",
      conclusion: "This guide serves as a foundational resource for further exploration into Akan verb morphology and is intended to aid both linguistic study and practical language acquisition."
    },
    citation: {
      full: "Nyarko, A. (2023). Akan Verb Morphology Guide. *Language Studies Journal*, 15(3), 45-60. DOI: 10.yyyy/yyyy",
      doiLink: "https://dx.doi.org/10.yyyy/yyyy"
    },
    relatedResources: [
      {
        title: "The Syntax of Akan Serial Verb Constructions",
        description: "An in-depth exploration of serial verb constructions in Akan.",
        author: "Kwame Ofori",
        iconType: "document",
        link: "/research/articles/the-syntax-of-akan-serial-verb-constructions"
      },
      {
        title: "Akan Alphabet Pronunciation Video",
        description: "Visual and audio guide to standard Akan alphabet sounds.",
        author: "Multimedia",
        iconType: "video", // Changed to 'video' for consistency with ResourceCard's new 'Video' type
        link: "/research/articles/akan-alphabet-pronunciation-video"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Introduction to Akan Linguistics"
  // ----------------------------------------------------
  "introduction-to-akan-linguistics": {
    title: "Introduction to Akan Linguistics",
    description: "A primer covering the basics of Akan phonology and grammar for new learners.",
    author: "Dr. Afia Owusu",
    publishedDate: "January 15, 2022",
    pdfAvailable: true,
    keywords: ["Akan", "Linguistics", "Introduction", "Phonology", "Grammar"],
    metadata: {
      authors: "Dr. Afia Owusu",
      publication: "Akan Linguistics Series",
      methodology: "Descriptive approach; Pedagogical focus.",
      keywordsDetailed: ["Akan Language", "Phonology", "Grammar", "Syntax basics", "Morphology basics", "Introductory Linguistics"],
      abstract: "This introductory text provides fundamental concepts in Akan linguistics, designed for students and enthusiasts. It covers the basic phonological rules, grammatical structures, and common morphological patterns of the Akan language, serving as an essential first step for serious study."
    },
    fullArticle: {
      introduction: "Welcome to the study of Akan linguistics! This module will introduce you to the foundational elements of the Akan language.",
      background: "Akan is a prominent Kwa language spoken in Ghana, known for its rich tonal system and complex verbal structures. This introduction simplifies these concepts for easier understanding.",
      methodology: "The content is structured pedagogically, breaking down complex linguistic phenomena into digestible lessons, supported by clear examples.",
      analysis: "We will cover topics such as vowel harmony, consonant inventories, basic sentence structures, and common prefixes/suffixes.",
      examples: [
        { id: 1, text: "Akan Tones: High (á), Low (à)" },
        { id: 2, text: "Basic Sentence: Kofi kɔ sukuu (Kofi goes to school)" }
      ],
      discussion: "Mastering these introductory concepts will provide a solid foundation for more advanced studies in Akan language and culture.",
      conclusion: "This primer aims to demystify Akan linguistics, making it accessible and engaging for all beginners."
    },
    citation: {
      full: "Owusu, A. (2022). *Introduction to Akan Linguistics*. Akan Linguistics Publications. DOI: 10.zzzz/zzzz",
      doiLink: "https://dx.doi.org/10.zzzz/zzzz"
    },
    relatedResources: [
      {
        title: "Akan Alphabet Pronunciation Video",
        description: "Visual and audio guide to standard Akan alphabet sounds.",
        author: "Multimedia",
        iconType: "video", // Changed to 'video' for consistency with ResourceCard's new 'Video' type
        link: "/research/articles/akan-alphabet-pronunciation-video"
      },
      {
        title: "Akan Verb Morphology Guide",
        description: "A comprehensive overview of verb forms and inflections in Akan.",
        author: "Ama Nyarko",
        iconType: "document",
        link: "/research/articles/akan-verb-morphology-guide"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Basic Cultural Studies Texts"
  // ----------------------------------------------------
  "basic-cultural-studies-texts": {
    title: "Basic Cultural Studies Texts",
    author: "Prof. Kojo Mensah",
    year: "2021",
    description: "Key readings on Akan traditions, rituals, and heritage for beginners.",
    publishedDate: "March 1, 2021",
    pdfAvailable: true,
    keywords: ["Akan Culture", "Traditions", "Heritage", "Rituals"],
    metadata: {
      authors: "Prof. Kojo Mensah",
      publication: "Cultural Heritage Studies",
      methodology: "Compilation of foundational texts; Ethnographic summaries.",
      keywordsDetailed: ["Akan", "Culture", "Traditions", "Rituals", "Heritage", "Sociology", "Anthropology"],
      abstract: "This collection compiles essential readings for beginners in Akan cultural studies. It introduces core concepts, historical overviews of traditions, significant rituals, and the enduring heritage of the Akan people, serving as a gateway to deeper cultural appreciation."
    },
    fullArticle: {
      introduction: "Embark on a journey into the heart of Akan culture with this curated selection of foundational texts.",
      background: "Akan culture is rich and diverse, spanning centuries of history and a vibrant tapestry of social practices. These readings provide a structured introduction.",
      methodology: "The content is organized thematically, covering rites of passage, communal ceremonies, and the philosophical underpinnings of Akan society.",
      analysis: "Explore the significance of naming ceremonies, marriage rituals, traditional festivals, and the role of proverbs and folklore.",
      examples: [
        { id: 1, text: "Adae Kɛse Festival" },
        { id: 2, text: "Akwaaba (Welcome) proverb" }
      ],
      discussion: "Understanding these basic cultural elements is crucial for anyone engaging with Akan language or society.",
      conclusion: "This compilation serves as an invaluable starting point for comprehending the depth and beauty of Akan cultural heritage."
    },
    citation: {
      full: "Mensah, K. (2021). *Basic Cultural Studies Texts*. Cultural Heritage Press. DOI: 10.xxxx/xxxx",
      doiLink: "https://dx.doi.org/10.xxxx/xxxx"
    },
    relatedResources: [
      {
        title: "Akan Oral Traditions Analysis",
        description: "Examining the narrative forms and significance of Akan oral traditions.",
        author: "Nana Yaw Boateng",
        iconType: "document",
        link: "/research/articles/akan-oral-traditions-analysis"
      },
      {
        title: "Historical Accounts of Akan Kingdoms",
        description: "Documented histories and analyses of major Akan kingdoms.",
        author: "Abena Sarpong",
        iconType: "document",
        link: "/research/articles/historical-accounts-of-akan-kingdoms"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Akan Alphabet Pronunciation Video"
  // ----------------------------------------------------
  "akan-alphabet-pronunciation-video": {
    title: "Akan Alphabet Pronunciation Video",
    description: "Visual and audio guide to standard Akan alphabet sounds.",
    author: "Multimedia",
    publishedDate: "September 5, 2023",
    pdfAvailable: false,
    keywords: ["Akan", "Pronunciation", "Alphabet", "Phonetics", "Video"],
    metadata: {
      authors: "Akan Dictionary Multimedia Team",
      publication: "Online Educational Resource",
      methodology: "Audio-visual demonstration; Native speaker recordings.",
      keywordsDetailed: ["Akan Language", "Pronunciation", "Alphabet", "Phonetics", "Video Tutorial", "Learning Akan"],
      abstract: "This multimedia resource provides a clear visual and audio guide to the pronunciation of each letter and common digraphs in the standard Akan alphabet. Featuring native speaker pronunciations, it is an essential tool for beginners to develop accurate Akan phonetics."
    },
    fullArticle: {
      introduction: "Mastering the sounds of Akan is the first step to fluency. This video guide will walk you through the correct pronunciation of the Akan alphabet.",
      background: "Unlike English, Akan is a tonal language, and precise pronunciation is crucial for meaning. Our guide focuses on clarity and repetition.",
      methodology: "Each letter is presented with a visual representation, followed by multiple audio examples from native speakers. Slow-motion audio is also included.",
      analysis: "Special attention is given to sounds unique to Akan, such as implosives and distinct vowel qualities.",
      examples: [
        { id: 1, text: "A as in 'Akan'" },
        { id: 2, text: "Ɛ as in 'ɛkyerɛ' (to show)" }
      ],
      discussion: "Consistent practice with this video will significantly improve your accent and comprehension. Pay close attention to tone changes.",
      conclusion: "This interactive resource is designed to provide a strong phonetic foundation for your Akan language journey."
    },
    citation: {
      full: "Akan Dictionary Multimedia Team. (2023). *Akan Alphabet Pronunciation Video*. Akan Dictionary Online Resources. [Video File]. Retrieved from [Link to video]",
      doiLink: "#"
    },
    relatedResources: [
      {
        title: "Introduction to Akan Linguistics",
        description: "A primer covering the basics of Akan phonology and grammar for new learners.",
        author: "Dr. Afia Owusu",
        iconType: "document",
        link: "/research/articles/introduction-to-akan-linguistics"
      },
      {
        title: "Akan Verb Morphology Guide",
        description: "A comprehensive overview of verb forms and inflections in Akan.",
        author: "Ama Nyarko",
        iconType: "document",
        link: "/research/articles/akan-verb-morphology-guide"
      }
    ],
    // ADD THE videoUrl HERE FOR THE FULL ARTICLE PAGE TO RENDER THE VIDEO
    videoUrl: "https://www.youtube.com/embed/your-akan-alphabet-video-id" // <-- **IMPORTANT: Replace with actual YouTube embed URL**
  },

  // ----------------------------------------------------
  // Full Data for "Akan Oral Traditions Analysis"
  // ----------------------------------------------------
  "akan-oral-traditions-analysis": {
    title: "Akan Oral Traditions Analysis",
    description: "Examining the narrative forms and significance of Akan oral traditions through case studies.",
    author: "Nana Yaw Boateng",
    publishedDate: "November 20, 2020",
    pdfAvailable: true,
    keywords: ["Oral Traditions", "Narrative", "Akan", "Folklore", "Storytelling"],
    metadata: {
      authors: "Nana Yaw Boateng",
      publication: "Journal of Folklore Studies",
      methodology: "Ethnographic research; Content analysis of recorded narratives; Comparative folklore.",
      keywordsDetailed: ["Akan", "Oral Literature", "Ananse Stories", "Proverbs", "Mythology", "Folklore Studies"],
      abstract: "This paper delves into the rich tapestry of Akan oral traditions, analyzing various narrative forms such as Ananse stories, proverbs, and historical accounts. Through detailed case studies, it explores their social functions, educational roles, and cultural significance within Akan communities."
    },
    fullArticle: {
      introduction: "Akan oral traditions are a cornerstone of their cultural identity, serving as vehicles for history, morality, and entertainment.",
      background: "From moonlight tales of Ananse the spider to the wisdom embedded in proverbs, oral traditions shape worldview and societal norms.",
      methodology: "Our analysis draws from transcribed recordings of storytelling sessions and interviews with traditional custodians of Akan narratives.",
      analysis: "Specific case studies highlight the structural elements of different narrative forms, their recurring themes, and the performance aspects unique to Akan oral delivery.",
      examples: [
        { id: 1, text: "Ananse's Wisdom Tales" },
        { id: 2, text: "Proverb: 'Ti koro nko agyina' (One head doesn't constitute a council)" }
      ],
      discussion: "The resilience of Akan oral traditions demonstrates their adaptability and continued relevance in contemporary society.",
      conclusion: "This research emphasizes the need for ongoing documentation and preservation of these invaluable cultural assets."
    },
    citation: {
      full: "Boateng, N. Y. (2020). Akan Oral Traditions Analysis. *Journal of Folklore Studies*, 8(2), 78-95. DOI: 10.wwww/wwww",
      doiLink: "https://dx.doi.org/10.wwww/wwww"
    },
    relatedResources: [
      {
        title: "Basic Cultural Studies Texts",
        description: "Key readings on Akan traditions, rituals, and heritage.",
        author: "Prof. Kojo Mensah",
        iconType: "document",
        link: "/research/articles/basic-cultural-studies-texts"
      },
      {
        title: "Akan Artifacts: A Visual Archive",
        description: "An image-based collection of Akan artifacts annotated for research use.",
        author: "Multimedia",
        iconType: "multimedia",
        link: "/research/articles/akan-artifacts-visual-archive"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Historical Accounts of Akan Kingdoms"
  // ----------------------------------------------------
  "historical-accounts-of-akan-kingdoms": {
    title: "Historical Accounts of Akan Kingdoms",
    description: "Documented histories and analyses of major Akan kingdoms and their social structures.",
    author: "Abena Sarpong",
    publishedDate: "June 1, 2021",
    pdfAvailable: true,
    keywords: ["Akan History", "Kingdoms", "Social Structure", "Ashanti", "Fante"],
    metadata: {
      authors: "Abena Sarpong",
      publication: "African Historical Review",
      methodology: "Archival research; Oral history interviews; Archaeological evidence synthesis.",
      keywordsDetailed: ["Akan", "History", "Ashanti Kingdom", "Fante Confederacy", "Social Organization", "Pre-colonial Africa"],
      abstract: "This comprehensive study provides detailed historical accounts of the major Akan kingdoms, including the Ashanti, Fante, and Akyem. It critically examines their political structures, social hierarchies, economic systems, and military strategies, offering insights into their rise, consolidation, and interactions."
    },
    fullArticle: {
      introduction: "The history of the Akan people is inextricably linked to the rise and fall of powerful pre-colonial kingdoms that shaped West Africa.",
      background: "From the influential Ashanti Empire to the coastal Fante states, Akan kingdoms developed sophisticated political and social systems.",
      methodology: "Our research synthesizes information from European colonial records, local oral traditions, and recent archaeological findings.",
      analysis: "Sections delve into the origins, key rulers, major conflicts, and the administrative brilliance of each kingdom, highlighting their unique contributions.",
      examples: [
        { id: 1, text: "Osei Tutu I and the founding of the Ashanti Kingdom." },
        { id: 2, text: "The role of the 'Omanhene' (paramount chief)." }
      ],
      discussion: "The legacy of these kingdoms continues to influence modern Ghanaian society and traditional governance.",
      conclusion: "Understanding the historical trajectory of Akan kingdoms is crucial for appreciating the contemporary cultural landscape."
    },
    citation: {
      full: "Sarpong, A. (2021). Historical Accounts of Akan Kingdoms. *African Historical Review*, 10(1), 1-25. DOI: 10.xxxx/xxxx",
      doiLink: "https://dx.doi.org/10.xxxx/xxxx"
    },
    relatedResources: [
      {
        title: "Basic Cultural Studies Texts",
        description: "Key readings on Akan traditions, rituals, and heritage.",
        author: "Prof. Kojo Mensah",
        iconType: "document",
        link: "/research/articles/basic-cultural-studies-texts"
      },
      {
        title: "Akan Social Structures: Animated Diagrams",
        description: "Interactive visuals explaining kinship systems and social hierarchies among Akan.",
        author: "Multimedia",
        iconType: "animated-diagrams",
        link: "/research/articles/akan-social-structures-animated-diagrams"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Akan Artifacts: A Visual Archive"
  // ----------------------------------------------------
  "akan-artifacts-visual-archive": {
    title: "Akan Artifacts: A Visual Archive",
    description: "An image-based collection of Akan artifacts annotated for research use.",
    author: "Multimedia",
    publishedDate: "January 20, 2023",
    pdfAvailable: false,
    keywords: ["Akan Art", "Artifacts", "Culture", "Visual Archive", "Museum"],
    metadata: {
      authors: "Akan Dictionary Multimedia Team",
      publication: "Digital Cultural Heritage Project",
      methodology: "High-resolution photography; Expert annotation; Digital curation.",
      keywordsDetailed: ["Akan", "Art", "Sculpture", "Textiles", "Gold Weights", "Regalia", "Cultural Heritage", "Digital Humanities"],
      abstract: "This digital archive presents a meticulously curated collection of Akan artifacts, ranging from Asante gold weights and Kente cloth to pottery and regalia. Each item is accompanied by detailed annotations, historical context, and cultural significance, making it an invaluable visual resource for researchers and enthusiasts."
    },
    fullArticle: {
      introduction: "Immerse yourself in the visual splendor of Akan artistry through this comprehensive digital archive.",
      background: "Akan artifacts are not merely decorative; they embody profound cultural narratives, historical events, and spiritual beliefs.",
      methodology: "Our team has photographed artifacts from various collections, cross-referencing with historical texts and expert knowledge.",
      analysis: "Explore categories such as ceremonial objects, everyday tools, textiles, and personal adornments. Discover the symbolism embedded in each piece.",
      examples: [
        { id: 1, text: "Adinkra Symbols on textiles" },
        { id: 2, text: "Akan Gold Weights and their meanings" }
      ],
      discussion: "The preservation and accessibility of these artifacts contribute significantly to global understanding of Akan heritage.",
      conclusion: "This visual archive aims to be a living repository, continuously updated with new discoveries and insights."
    },
    citation: {
      full: "Akan Dictionary Multimedia Team. (2023). *Akan Artifacts: A Visual Archive*. Akan Dictionary Digital Collections. [Online Resource]. Retrieved from [Link to Archive]",
      doiLink: "#"
    },
    relatedResources: [
      {
        title: "Basic Cultural Studies Texts",
        description: "Key readings on Akan traditions, rituals, and heritage.",
        author: "Prof. Kojo Mensah",
        iconType: "document",
        link: "/research/articles/basic-cultural-studies-texts"
      },
      {
        title: "Historical Accounts of Akan Kingdoms",
        description: "Documented histories and analyses of major Akan kingdoms.",
        author: "Abena Sarpong",
        iconType: "document",
        link: "/research/articles/historical-accounts-of-akan-kingdoms"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Peer-Reviewed Journals in Akan Linguistics"
  // ----------------------------------------------------
  "peer-reviewed-journals-in-akan-linguistics": {
    title: "Peer-Reviewed Journals in Akan Linguistics",
    description: "A collection of leading academic articles in advanced Akan language research.",
    author: "Dr. Kwame Adjei",
    publishedDate: "December 1, 2019",
    pdfAvailable: true,
    keywords: ["Academic Journals", "Akan Linguistics", "Research", "Peer-Review"],
    metadata: {
      authors: "Dr. Kwame Adjei (Compiler)",
      publication: "Akan Linguistics Research Repository",
      methodology: "Curated collection; Abstract and keyword indexing.",
      keywordsDetailed: ["Akan", "Linguistics", "Academic Research", "Journal Articles", "Phonetics", "Syntax", "Semantics", "Sociolinguistics"],
      abstract: "This curated list provides access to significant peer-reviewed journal articles focusing on various aspects of Akan linguistics. It serves as a vital resource for advanced researchers and scholars seeking in-depth, rigorously reviewed studies on Akan language structure and usage."
    },
    fullArticle: {
      introduction: "Staying abreast of the latest research in Akan linguistics is crucial for scholars. This resource guides you to key peer-reviewed publications.",
      background: "Academic journals are the primary vehicle for disseminating high-quality, validated research findings in the field of linguistics.",
      methodology: "Our team has compiled articles from reputable journals, categorized by sub-discipline (e.g., phonology, syntax, semantics, sociolinguistics).",
      analysis: "Each entry includes the journal title, issue, publication year, and a brief abstract. Direct links to publishers or repositories are provided where available.",
      examples: [
        { id: 1, text: "Journal of African Languages and Linguistics" },
        { id: 2, text: "Studies in African Linguistics" }
      ],
      discussion: "We encourage users to regularly check for updates as new research emerges. This collection is a living document.",
      conclusion: "This resource aims to accelerate advanced research in Akan linguistics by centralizing access to essential academic literature."
    },
    citation: {
      full: "Adjei, K. (Comp.). (2019). *Peer-Reviewed Journals in Akan Linguistics*. Akan Linguistics Research Repository. [Collection].",
      doiLink: "#"
    },
    relatedResources: [
      {
        title: "The Syntax of Akan Serial Verb Constructions",
        description: "An in-depth exploration of serial verb constructions in Akan.",
        author: "Kwame Ofori",
        iconType: "document",
        link: "/research/articles/the-syntax-of-akan-serial-verb-constructions"
      },
      {
        title: "Dissertations on Akan Language",
        description: "Selected doctoral and master's dissertations on phonology, syntax, and semantics.",
        author: "Various Authors",
        iconType: "document",
        link: "/research/articles/dissertations-on-akan-language"
      }
    ]
  },

  // ----------------------------------------------------
  // Full Data for "Dissertations on Akan Language"
  // ----------------------------------------------------
  "dissertations-on-akan-language": {
    title: "Dissertations on Akan Language",
    description: "Selected doctoral and master's dissertations on phonology, syntax, and semantics.",
    author: "Various Authors",
    publishedDate: "February 10, 2022",
    pdfAvailable: true,
    keywords: ["Dissertations", "Akan Linguistics", "Academic Research", "Thesis", "Ph.D."],
    metadata: {
      authors: "Various Authors (Compiled)",
      publication: "University Research Archive",
      methodology: "Compilation from university repositories; Abstract summaries.",
      keywordsDetailed: ["Akan", "Linguistics", "Dissertation", "Thesis", "Doctoral Research", "Master's Research", "Ghanaian Linguistics"],
      abstract: "This compilation features a selection of doctoral and master's dissertations focused on the Akan language. Covering a wide range of linguistic sub-disciplines including phonology, syntax, semantics, and sociolinguistics, it offers in-depth academic insights and extensive methodologies for advanced scholars."
    },
    fullArticle: {
      introduction: "Dissertations represent groundbreaking original research. This collection highlights significant contributions to Akan language studies.",
      background: "University dissertations offer comprehensive analyses and often introduce new theoretical frameworks or empirical data.",
      methodology: "We've curated a list of impactful theses, providing summaries and access links where possible.",
      analysis: "Each entry includes the author, university, year of completion, and a brief overview of the research focus. Topics range from detailed phonological analyses to sociolinguistic studies of language variation.",
      examples: [
        { id: 1, text: "Phonological Processes in Asante Twi (PhD Thesis, 2018)" },
        { id: 2, text: "Code-switching in Akan-English Bilinguals (MA Thesis, 2020)" }
      ],
      discussion: "These dissertations are invaluable for deep dives into specific aspects of Akan linguistics and provide foundational work for future research.",
      conclusion: "This archive aims to be a central point for discovering in-depth scholarly work on the Akan language."
    },
    citation: {
      full: "Various Authors. (2022). *Dissertations on Akan Language*. University Research Archive. [Collection].",
      doiLink: "#"
    },
    relatedResources: [
      {
        title: "Peer-Reviewed Journals in Akan Linguistics",
        description: "A collection of leading academic articles in advanced Akan language research.",
        author: "Dr. Kwame Adjei",
        iconType: "document",
        link: "/research/articles/peer-reviewed-journals-in-akan-linguistics"
      },
      {
        title: "The Syntax of Akan Serial Verb Constructions",
        description: "An in-depth exploration of serial verb constructions in Akan.",
        author: "Kwame Ofori",
        iconType: "document",
        link: "/research/articles/the-syntax-of-akan-serial-verb-constructions"
      }
    ]
  }
};

export const resourcesList = [
  {
    id: 'intro-akan-linguistics',
    category: 'Beginner',
    type: 'PDF',
    title: 'Introduction to Akan Linguistics',
    author: 'Dr. Afia Owusu',
    year: '2022',
    description: 'A primer covering the basics of Akan phonology and grammar for new learners.',
    link: '/resources/intro-akan-linguistics', // <--- IMPORTANT: Link to your new detail page route
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
    link: '/resources/basic-cultural-texts', // <--- IMPORTANT
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
    link: '/resources/akan-alphabet-pronunciation-video', // <--- IMPORTANT
    iconType: 'video',
  },
  // ... (update links for all other resources similarly)
  {
    id: 'syntax-akan-svc',
    category: 'Advanced / Academic',
    type: 'Journal',
    title: 'The Syntax of Akan Serial Verb Constructions',
    author: 'Dr. Kwame Adjei',
    year: '2019',
    description: 'A collection of leading academic articles in advanced Akan language research.',
    link: '/articles/syntax-akan-svc', // This one can still link to your existing ArticlePage if you want to keep it separate.
    iconType: 'journal',
  },
];

export const interactiveModulesData = [
  {
    id: 'akan-phonology-timeline',
    title: 'Akan Phonology Timeline',
    description: 'Explore interactive timelines illustrating key changes and developments in Akan phonology across centuries.',
    link: '/resources/akan-phonology-timeline', // <--- IMPORTANT
    iconType: 'interactive',
  },
    {
        id: 'akan-verb-conjugation-game',
        title: 'Akan Verb Conjugation Game',
        description: 'Engage with an interactive game designed to practice and master Akan verb conjugations.',
        link: '/resources/akan-verb-conjugation-game', // <--- IMPORTANT
        iconType: 'interactive',
    },
    {
        id: 'akan-culture-quiz',
        title: 'Akan Culture Quiz',
        description: 'Test your knowledge of Akan culture, traditions, and history through an engaging quiz format.',
        link: '/resources/akan-culture-quiz', // <--- IMPORTANT
        iconType: 'interactive',
    },
    {
        id: 'akan-dictionary-explorer',
        title: 'Akan Dictionary Explorer',
        description: 'An interactive tool for exploring Akan vocabulary, idioms, and their meanings.',
        link: '/resources/akan-dictionary-explorer', // <--- IMPORTANT
        iconType: 'interactive',
    }
];