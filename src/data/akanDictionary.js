const akanDictionaryData = [
    {
      headword: "learn",
      translations: {
        Twi: "sua",
        Akuapem: "sua",
        Fante: "suar",
      },
      pronunciation: {
        Twi: "[ˈsu.a]",
        Akuapem: "[ˈsu.a]",
        Fante: "[ˈsu.ar]",
      },
      partOfSpeech: "verb",
      definitions: [{ language: "en", definition: "to learn, to study" }],
      examples: {
        Twi: [{ sentence: "Mepɛ sɛ mesua Twi.", translation: "I want to learn Twi." }],
        Akuapem: [{ sentence: "Mepɛ sɛ mesua Akuapem.", translation: "I want to learn Akuapem." }],
        Fante: [{ sentence: "Mepɛ dɛ mesuar Fante.", translation: "I want to learn Fante." }],
      },
      relatedWords: {
        Twi: ["ɔkyerɛkyerɛni", "nimdeɛ"],
        Akuapem: ["ɔkyerɛkyerɛni", "nimdeɛ"],
        Fante: ["ɔkyerɛkyerɛnyi", "nyimdzi"],
      },
      akanDialects: ["Twi", "Akuapem", "Fante"],
      tags: ["education", "learning"],
    },
    {
      headword: "book",
      translations: {
        Twi: "nwoma",
        Akuapem: "nwoma",
        Fante: "nwuma",
      },
      pronunciation: {
        Twi: "[ˈnwɔ.ma]",
        Akuapem: "[ˈnwɔ.ma]",
        Fante: "[ˈnwu.ma]",
      },
      partOfSpeech: "noun",
      definitions: [{ language: "en", definition: "book, paper" }],
      examples: {
        Twi: [{ sentence: "Mekenkan nwoma.", translation: "I am reading a book." }],
        Akuapem: [{ sentence: "Mekenkan nwoma.", translation: "I am reading a book." }],
        Fante: [{ sentence: "Merekɛnkan nwuma.", translation: "I am reading a book." }],
      },
      relatedWords: {
        Twi: ["kenkan", "sukuu"],
        Akuapem: ["kenkan", "sukuu"],
        Fante: ["kɛ̃nkan", "skul"],
      },
      akanDialects: ["Twi", "Akuapem", "Fante"],
      tags: ["literature", "education"],
    },
    {
      headword: "glory",
      translations: {
        Twi: "enyimnyam",
        Akuapem: "animuonyam",
        Fante: "enyimnyam",
      },
      pronunciation: {
        Twi: "[ɛˈɲɪmɲam]",
        Akuapem: "[aˈnimuɔɲam]",
        Fante: "[ɛˈɲɪmɲam]",
      },
      partOfSpeech: "noun",
      definitions: [{ language: "en", definition: "glory, honor" }],
      examples: {
        Twi: [{ sentence: "Onyankopɔn wɔ enyimnyam.", translation: "God has glory." }],
        Akuapem: [{ sentence: "Nyankopɔn wɔ animuonyam.", translation: "God has glory." }],
        Fante: [{ sentence: "Nyame wɔ enyimnyam.", translation: "God has glory." }],
      },
      relatedWords: {
        Twi: ["anuonyam", "yɛkeseɛ"],
        Akuapem: ["anuonyam", "kɛseɛ"],
        Fante: ["anuonyam", "yɛkɛse"],
      },
      akanDialects: ["Twi", "Akuapem", "Fante"],
      tags: ["religion", "values"],
    },
    {
      headword: "hunger",
      translations: {
        Twi: "ɛkɔm",
        Akuapem: "ɛkɔm",
        Fante: "ekum",
      },
      pronunciation: {
        Twi: "[ɛˈkɔm]",
        Akuapem: "[ɛˈkɔm]",
        Fante: "[ˈekum]",
      },
      partOfSpeech: "noun",
      definitions: [{ language: "en", definition: "hunger" }],
      examples: {
        Twi: [{ sentence: "Me ho yɛ me ɛkɔm.", translation: "I am hungry." }],
        Akuapem: [{ sentence: "Me ho yɛ me ɛkɔm.", translation: "I am hungry." }],
        Fante: [{ sentence: "Me ho yɛ me ekum.", translation: "I am hungry." }],
      },
      relatedWords: {
        Twi: ["aduan", "ɛnam"],
        Akuapem: ["aduan", "ɛnam"],
        Fante: ["edziban", "etsɛm"],
      },
      akanDialects: ["Twi", "Akuapem", "Fante"],
      tags: ["food", "basic needs"],
    },
    {
      headword: "mercy",
      translations: {
        Twi: "adom",
        Akuapem: "adom",
        Fante: "adom",
      },
      pronunciation: {
        Twi: "[aˈdom]",
        Akuapem: "[aˈdom]",
        Fante: "[aˈdom]",
      },
      partOfSpeech: "noun",
      definitions: [{ language: "en", definition: "grace, mercy" }],
      examples: {
        Twi: [{ sentence: "Onyankopɔn adom wɔ me so.", translation: "God's grace is upon me." }],
        Akuapem: [{ sentence: "Nyankopɔn adom wɔ me so.", translation: "God's grace is upon me." }],
        Fante: [{ sentence: "Nyame adom wɔ me do.", translation: "God's grace is upon me." }],
      },
      relatedWords: {
        Twi: ["ahyɛase", "boa"],
        Akuapem: ["ahyɛase", "boa"],
        Fante: ["ahyɛase", "boa"],
      },
      akanDialects: ["Twi", "Akuapem", "Fante"],
      tags: ["religion", "values"],
    },
    {
      headword: "language",
      translations: {
        Twi: "kasafua",
        Akuapem: "kasafua",
        Fante: "kasafua",
      },
      pronunciation: {
        Twi: "[ka.sa.fwa]",
        Akuapem: "[ka.sa.fwa]",
        Fante: "[ka.sa.fwa]",
      },
      partOfSpeech: "noun",
      definitions: [{ language: "en", definition: "language, speech" }],
      examples: {
        Twi: [{ sentence: "Twi yɛ kasa foforɔ.", translation: "Twi is a new language." }],
        Akuapem: [{ sentence: "Twi yɛ kasa foforɔ.", translation: "Twi is a new language." }],
        Fante: [{ sentence: "Twi yɛ kasafua fofor.", translation: "Twi is a new language." }],
      },
      relatedWords: {
        Twi: ["asɛm", "kasa"],
        Akuapem: ["asɛm", "kasa"],
        Fante: ["asem", "kasa"],
      },
      akanDialects: ["Twi", "Akuapem", "Fante"],
      tags: ["communication", "culture"],
    },
  ];
  
  export default akanDictionaryData;
  