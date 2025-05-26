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
      audioUrls: { //
        Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
        Akuapem: "/audio/akuapem/sua.mp3",
        Fante: "/audio/fante/suar.mp3",
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
      audioUrls: { //
        Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
        Akuapem: "/audio/akuapem/sua.mp3",
        Fante: "/audio/fante/suar.mp3",
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
      audioUrls: { //
        Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
        Akuapem: "/audio/akuapem/sua.mp3",
        Fante: "/audio/fante/suar.mp3",
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

      audioUrls: { //
        Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
        Akuapem: "/audio/akuapem/sua.mp3",
        Fante: "/audio/fante/suar.mp3",
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

      audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
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

      audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
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

    // Additional words
    {
        headword: "love",
        translations: {
            Twi: "ɔdɔ",
            Akuapem: "ɔdɔ",
            Fante: "ɔdɔ",
        },
        pronunciation: {
            Twi: "[ɔˈdɔ]",
            Akuapem: "[ɔˈdɔ]",
            Fante: "[ɔˈdɔ]",
        },
        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "love, affection" }],
        examples: {
            Twi: [{ sentence: "Mepɛ ɔdɔ.", translation: "I love love." }],
            Akuapem: [{ sentence: "Mepɛ ɔdɔ.", translation: "I love love." }],
            Fante: [{ sentence: "Mepɛ ɔdɔ.", translation: "I love love." }],
        },
        relatedWords: {
            Twi: ["anigye", "pɛ"],
            Akuapem: ["anigye", "pɛ"],
            Fante: ["anigyɛ", "pɛ"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["emotion", "relationship"],
    },
    {
        headword: "water",
        translations: {
            Twi: "nsuo",
            Akuapem: "nsuo",
            Fante: "nsuo",
        },
        pronunciation: {
            Twi: "[nˈsu.o]",
            Akuapem: "[nˈsu.o]",
            Fante: "[nˈsu.o]",
        },

        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "water" }],
        examples: {
            Twi: [{ sentence: "Mepɛ nsuo.", translation: "I want water." }],
            Akuapem: [{ sentence: "Mepɛ nsuo.", translation: "I want water." }],
            Fante: [{ sentence: "Mepɛ nsuo.", translation: "I want water." }],
        },
        relatedWords: {
            Twi: ["nsuomnam", "nsa"],
            Akuapem: ["nsuomnam", "nsa"],
            Fante: ["nsuomnam", "nsa"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["basic needs", "nature"],
    },
    {
        headword: "sun",
        translations: {
            Twi: "owia",
            Akuapem: "owia",
            Fante: "owia",
        },
        pronunciation: {
            Twi: "[oˈwi.a]",
            Akuapem: "[oˈwi.a]",
            Fante: "[oˈwi.a]",
        },

        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "sun" }],
        examples: {
            Twi: [{ sentence: "Owia rebɔ den.", translation: "The sun is shining brightly." }],
            Akuapem: [{ sentence: "Owia rebɔ den.", translation: "The sun is shining brightly." }],
            Fante: [{ sentence: "Owia rebɔ den.", translation: "The sun is shining brightly." }],
        },
        relatedWords: {
            Twi: ["hye", "sram"],
            Akuapem: ["hye", "sram"],
            Fante: ["hye", "sram"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["nature", "weather"],
    },
    {
        headword: "friend",
        translations: {
            Twi: "adamfo",
            Akuapem: "adamfo",
            Fante: "adampa",
        },
        pronunciation: {
            Twi: "[aˈdam.fo]",
            Akuapem: "[aˈdam.fo]",
            Fante: "[aˈdam.pa]",
        },

        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "friend, companion" }],
        examples: {
            Twi: [{ sentence: "Me adamfo yɛ me boafo.", translation: "My friend is my helper." }],
            Akuapem: [{ sentence: "Me adamfo yɛ me boafo.", translation: "My friend is my helper." }],
            Fante: [{ sentence: "Me adampa yɛ me boafo.", translation: "My friend is my helper." }],
        },
        relatedWords: {
            Twi: ["boafo", "ɔdɔfo"],
            Akuapem: ["boafo", "ɔdɔfo"],
            Fante: ["boafo", "ɔdɔfo"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["relationship", "social"],
    },
    {
        headword: "home",
        translations: {
            Twi: "fi",
            Akuapem: "fi",
            Fante: "fi",
        },
        pronunciation: {
            Twi: "[fi]",
            Akuapem: "[fi]",
            Fante: "[fi]",
        },
        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "home, house" }],
        examples: {
            Twi: [{ sentence: "Mekɔ me fi.", translation: "I am going home." }],
            Akuapem: [{ sentence: "Mekɔ me fi.", translation: "I am going home." }],
            Fante: [{ sentence: "Mekɔ me fi.", translation: "I am going home." }],
        },
        relatedWords: {
            Twi: ["dan", "fie"],
            Akuapem: ["dan", "fie"],
            Fante: ["dan", "fie"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["location", "daily life"],
    },
    {
        headword: "peace",
        translations: {
            Twi: "asomdwoe",
            Akuapem: "asomdwoe",
            Fante: "asomdwee",
        },
        pronunciation: {
            Twi: "[aˈsom.dwɔe]",
            Akuapem: "[aˈsom.dwɔe]",
            Fante: "[aˈsom.dwɛe]",
        },
        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "peace, calm" }],
        examples: {
            Twi: [{ sentence: "Asomdwoe wɔ hɔ.", translation: "There is peace." }],
            Akuapem: [{ sentence: "Asomdwoe wɔ hɔ.", translation: "There is peace." }],
            Fante: [{ sentence: "Asomdwee wɔ hɔ.", translation: "There is peace." }],
        },
        relatedWords: {
            Twi: ["ahotɔ", "dwo"],
            Akuapem: ["ahotɔ", "dwo"],
            Fante: ["ahotɔ", "dwo"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["emotion", "values"],
    },
    {
        headword: "strength",
        translations: {
            Twi: "ahoɔden",
            Akuapem: "ahoɔden",
            Fante: "hoɔden",
        },
        pronunciation: {
            Twi: "[aˈhɔ.ɔ.den]",
            Akuapem: "[aˈhɔ.ɔ.den]",
            Fante: "[hɔ.ɔ.den]",
        },
        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "strength, power" }],
        examples: {
            Twi: [{ sentence: "Me wɔ ahoɔden.", translation: "I have strength." }],
            Akuapem: [{ sentence: "Me wɔ ahoɔden.", translation: "I have strength." }],
            Fante: [{ sentence: "Me wɔ hoɔden.", translation: "I have strength." }],
        },
        relatedWords: {
            Twi: ["tumi", "den"],
            Akuapem: ["tumi", "den"],
            Fante: ["tumi", "den"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["values", "personal attributes"],
    },
    {
        headword: "music",
        translations: {
            Twi: "nnwom",
            Akuapem: "nnwom",
            Fante: "nnwom",
        },
        pronunciation: {
            Twi: "[nˈnwɔm]",
            Akuapem: "[nˈnwɔm]",
            Fante: "[nˈnwɔm]",
        },
        audioUrls: { //
    Twi: "/audio/twi/sua.mp3", // Assuming you have an audio file for the headword "sua"
    Akuapem: "/audio/akuapem/sua.mp3",
    Fante: "/audio/fante/suar.mp3",
  },
        partOfSpeech: "noun",
        definitions: [{ language: "en", definition: "music, song" }],
        examples: {
            Twi: [{ sentence: "Mepɛ nnwom.", translation: "I like music." }],
            Akuapem: [{ sentence: "Mepɛ nnwom.", translation: "I like music." }],
            Fante: [{ sentence: "Mepɛ nnwom.", translation: "I like music." }],
        },
        relatedWords: {
            Twi: ["dwom", "to"],
            Akuapem: ["dwom", "to"],
            Fante: ["dwom", "to"],
        },
        akanDialects: ["Twi", "Akuapem", "Fante"],
        tags: ["culture", "art"],
    }
];

export default akanDictionaryData;