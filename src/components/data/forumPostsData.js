// src/data/forumPostsData.js

import avatarKwameA from '../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';
import avatarAmaNana from '../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';
import avatarKofiMensah from '../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';
import avatarAkosuaB from '../../assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg';

export const forumDiscussions = [
  {
    id: 'akan-proverbs-discussion-1',
    title: 'Asking About Akan Proverbs',
    posts: [
      {
        postId: 'post-1',
        author: 'KwameA',
        avatarSrc: avatarKwameA,
        timestamp: 'May 21, 2025 - 10:12am',
        content: `
          <p>Hello everyone!</p>
          <p>I'm interested in learning more about Akan proverbs and their meanings. Can anyone share some common proverbs, their literal translations, and how they're used in everyday conversations?</p>
          <p>Also, are there particular resources or dictionary entries here that can help? <a href="/research?search=dictionary" class="text-blue-600 hover:underline">@dictionary</a>, <a href="/profiles/Afia">@Afia</a></p>
        `,
        repliesCount: 3,
      },
      {
        postId: 'reply-1',
        author: 'AmaNana',
        avatarSrc: avatarAmaNana,
        timestamp: 'May 21, 2025 - 11:30am',
        content: `
          <div class="proverb-highlight">
            <p><em>"Abofra bo nkyerekyerekyedee."</em></p>
            <p>Literal: <em>A child does not know how to crack a tortoise shell.</em></p>
          </div>
          <p>This proverb means that some tasks require experience or wisdom. It's often used to remind people that elders have knowledge that youth may not. Here's a link to a cultural article that explains this: <a href="/resources/akan-proverbs-meanings" class="text-blue-600 hover:underline">Akan Proverbs & Meanings</a>.</p>
          <p><span class="text-gray-500">@KwameA</span> If you have access to the <a href="/dictionary" class="text-blue-600 hover:underline">dictionary section</a>, you can search for proverbs. There's also a lesson on common proverbs: <a href="/lessons/proverbs-in-akan" class="text-blue-600 hover:underline">Lesson: Proverbs in Akan</a>.</p>
        `,
      },
      {
        postId: 'reply-2',
        author: 'KofiMensah',
        avatarSrc: avatarKofiMensah,
        timestamp: 'May 21, 2025 - 12:00pm',
        content: `
          <div class="proverb-highlight">
            <p><em>"Tete pa badwan ba."</em></p>
            <p>Literal: <em>A person is a coil of thought.</em></p>
          </div>
          <p>This suggests that people are shaped by their thoughts and intentions. You'll find a great explanation in the research library here: <a href="/research/proverbs-and-akan-ethics" class="text-blue-600 hover:underline">Proverbs and Akan Ethics</a>.</p>
          <p><span class="text-gray-500">@KwameA</span> There's also a flashcard set on proverbs in the <a href="/vocabulary-section" class="text-blue-600 hover:underline">Vocabulary Section</a>!</p>
        `,
      },
      {
        postId: 'reply-3',
        author: 'AkosuaB',
        avatarSrc: avatarAkosuaB,
        timestamp: 'May 21, 2025 - 12:47pm',
        content: `
          <div class="proverb-highlight">
            <p><em>"Opanyin a onni abofra na okyere abofra."</em></p>
            <p>Literal: <em>It is the elder who knows the way that guides the child.</em></p>
          </div>
          <p>It's a gentle reminder of the importance of guidance from elders. This is often referenced in cultural lessons. See: <a href="/lessons/role-of-elders-in-akan-society" class="text-blue-600 hover:underline">Role of Elders in Akan Society</a>.</p>
        `,
      },
    ],
  },
  {
    id: 'dialects-field-methods',
    title: 'Comparing Akan Dialectal Variations: Field Methods',
    posts: [
      {
        postId: 'post-a1',
        author: 'Dr. Daniel Tetteh',
        avatarSrc: avatarKwameA,
        timestamp: 'May 19, 2025 - 09:00am',
        content: '<p>Seeking advice on effective field methods for comparing subtle dialectal variations in Akan. Any recommended software or interview techniques?</p>',
      },
      {
        postId: 'reply-a1',
        author: 'AmaNana',
        avatarSrc: avatarAmaNana,
        timestamp: 'May 19, 2025 - 03:00pm',
        content: '<p>For phonological analysis, PRAAT is indispensable. For lexical variations, consider using elicitation tasks with a standardized wordlist across informants from different regions.</p>',
      },
    ]
  },
  {
    id: 'ethnographic-cultural-practices',
    title: 'Ethnographic Approaches to Akan Cultural Practices',
    posts: [
      {
        postId: 'post-b1',
        author: 'Ama Serwaa',
        avatarSrc: avatarAmaNana,
        timestamp: 'May 16, 2025 - 01:00pm',
        content: '<p>I\'m starting ethnographic research on Akan puberty rites. What are some ethical considerations and best practices for engaging with community elders?</p>',
      },
    ]
  },
  {
    id: 'recent-publications-syntax',
    title: 'Recent Publications on Akan Syntax (2024)',
    posts: [
      {
        postId: 'post-c1',
        author: 'Prof. Kwaku Addai',
        avatarSrc: avatarKofiMensah,
        timestamp: 'May 20, 2025 - 04:00pm',
        content: '<p>Has anyone come across new significant publications on Akan syntax from 2024? I\'m particularly interested in work on aspectual markers.</p>',
      },
    ]
  }
];

export const getForumDiscussionById = (id) => {
  return forumDiscussions.find(discussion => discussion.id === id);
};

export const getLatestForumDiscussions = (count = 3) => {
  return forumDiscussions.slice(0, count);
};