// src/data.js
export const courseData = {
  "beginner": {
    "title": "Beginner Level",
    "overview": "Welcome to the Beginner Level Akan course! This level introduces the fundamental building blocks of the Akan language. You will start by learning the alphabet, basic greetings, and essential pronunciation skills. Get ready to embark on your Akan language journey!",
    "totalVideoHours": 1.5,
    "totalReadingHours": 0.5,
    "modules": [
      {
        "id": "module1",
        "title": "Module 1: Introduction to Akan",
        "overview": "This module introduces you to the fundamental aspects of the Akan language, including its alphabet and basic greetings. You'll learn how to pronounce key sounds and start building a foundational vocabulary.",
        "subtopics": [
          {
            "id": "subtopic1.1",
            "title": "The Akan Alphabet",
            "videos": [{ "id": "v1.1.1", "title": "Akan Alphabet Part 1", "link": "#/beginner/module/module1/video/v1.1.1" }],
            "readings": [{ "id": "r1.1.1", "title": "Akan Alphabet Guide", "link": "#/beginner/module/module1/reading/r1.1.1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }]
          },
          {
            "id": "subtopic1.2",
            "title": "Basic Greetings",
            "videos": [{ "id": "v1.2.1", "title": "Common Akan Greetings", "link": "#/beginner/module/module1/video/v1.2.1" }],
            "readings": []
          }
        ]
      },
      {
        "id": "module2",
        "title": "Module 2: Pronunciation and Tones",
        "overview": "This module delves into the nuances of Akan pronunciation, focusing on vowel sounds and the crucial role of tones in conveying meaning. Mastering these elements is key to clear communication.",
        "subtopics": [
          {
            "id": "subtopic2.1",
            "title": "Vowel Sounds",
            "videos": [{ "id": "v2.1.1", "title": "Akan Vowel Pronunciation", "link": "#/beginner/module/module2/video/v2.1.1" }],
            "readings": [{ "id": "r2.1.1", "title": "Guide to Akan Vowels", "link": "#/beginner/module/module2/reading/r2.1.1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }]
          },
          {
            "id": "subtopic2.2",
            "title": "Introduction to Tones",
            "videos": [{ "id": "v2.2.1", "title": "Understanding Akan Tones", "link": "#/beginner/module/module2/video/v2.2.1" }],
            "readings": [{ "id": "r2.2.1", "title": "The Importance of Tone", "link": "#/beginner/module/module2/reading/r2.2.1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. " }]
          }
        ]
      }
    ]
  },
  "intermediate": {
    "title": "Intermediate Level",
    "overview": "Welcome to the Intermediate Level Akan course! Building on your beginner knowledge, this level focuses on understanding and forming basic sentence structures. You will learn about subject-verb-object order and start constructing simple yet meaningful sentences in Akan.",
    "totalVideoHours": 2.0,
    "totalReadingHours": 1.0,
    "modules": [
      {
        "id": "module3",
        "title": "Module 3: Sentence Structure",
        "overview": "This module builds upon your foundation by exploring basic Akan sentence structures. You'll learn how to form simple sentences and understand the order of words.",
        "subtopics": [
          {
            "id": "subtopic3.1",
            "title": "Subject-Verb-Object Order",
            "videos": [{ "id": "v3.1.1", "title": "Basic Sentence Formation", "link": "#/intermediate/module/module3/video/v3.1.1" }],
            "readings": [{ "id": "r3.1.1", "title": "Sentence Structure Guide", "link": "#/intermediate/module/module3/reading/r3.1.1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat." }]
          }
        ]
      }
    ]
  },
  "advanced": {
    "title": "Advanced Level",
    "overview": "Welcome to the Advanced Level Akan course! This level takes your language skills further by introducing complex sentence structures. You will learn how to use clauses and conjunctions to express more intricate ideas and enhance your fluency in Akan.",
    "totalVideoHours": 2.5,
    "totalReadingHours": 1.5,
    "modules": [
      {
        "id": "module4",
        "title": "Module 4: Complex Sentence Structures",
        "overview": "This advanced module introduces more complex sentence constructions, including clauses and conjunctions, enabling you to express more intricate ideas.",
        "subtopics": [
          {
            "id": "subtopic4.1",
            "title": "Using Conjunctions",
            "videos": [{ "id": "v4.1.1", "title": "Connecting Ideas", "link": "#/advanced/module/module4/video/v4.1.1" }],
            "readings": [{ "id": "r4.1.1", "title": "Conjunction Usage", "link": "#/advanced/module/module4/reading/r4.1.1", "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat." }]
          }
        ]
      }
    ]
  }
};