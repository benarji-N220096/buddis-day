export interface SemesterItem {
  id: string;
  semester: string;
  label: string;
  roman: string;
  subtitle?: string;
}

export interface Part2Data {
  opening: {
    bridgeHint: string;
    quote: string;
  };
  safePlace: {
    intro: string;
    comfortLines: string[];
    pillarItems: string[];
    strengthConclusion: string;
    necessity: string;
    unmasking: string;
    authenticity: string;
    vulnerabilities: string[];
    editorialQuote: string;
    personalRevealLead: string;
    personalReveal: string;
    personalRevealSub: string;
  };
  ordinaryMoments: {
    resetExclamation: string;
    simplicity: string;
    smallMoment: string;
    busyBore: {
      busy: string;
      bore: string;
      presence: string;
      feeling: string;
    };
  };
  twoMinutes: {
    durationBadge: string;
    title: string;
    conversations: {
      noBigWords: string;
      simpleWords: string;
      whileThere: string;
      smile: string;
      climax: string;
      heartFull: string;
    };
    corePhilosophy: {
      intro: string;
      loveInCreatingTime: string;
      createTimeHighlight: string;
      memoryNote: string;
      memoryClimax: string;
    };
    englishEditorialQuote: {
      part1: string;
      part2: string;
      part3: string;
    };
    personalValidation: {
      lead: string;
      recipient: string;
    };
  };
  reflection: {
    repetitionLead: string;
    repetitionFollow: string;
    crowdVsFew: {
      crowd: string;
      few: string;
    };
    akkaMoment: {
      akka: string;
      special: string;
      you: string;
      fullSentence: string;
    };
  };
  ending: {
    memoriesLine: string;
    bestPartLine: string;
    destinedLine: string;
    curiosityHook: string;
    nextChapterTag: string;
  };
}

export interface Part3Data {
  opening: {
    bridge: string;
    subBridge: string;
    lead: string;
  };
  futureWishes: {
    strengthLead: string;
    strengthNeed: string;
    qualities: string[];
    returnDouble: string;
    personalBlessing1: string;
    personalBlessing2: string;
  };
  photoChapter: {
    introLead: string;
    introProof: string;
    introReveal: string;
    photo1: {
      captionLead: string;
      captionReaction: string;
      captionPunchline: string;
      captionFollowup: string;
    };
    photo2: {
      tag: string;
      line1: string;
      line2: string;
    };
  };
  permanentStory: {
    memories: string;
    chapters: string;
    permanent: string;
    permanenceClimax: string;
  };
  collegeToLife: {
    intro: string;
    moreThanCollege: string;
    keepInLife: string;
  };
  relationshipWish: {
    prayerLead: string;
    prayerWish: string;
    comfortCraziness: string[];
    beLikeThis: string;
    confidence: string;
  };
  philosopher: {
    pauseWord: string;
    tooEmotional: string;
    philosopherJoke: string;
    stopHere: string;
  };
  birthdayLetter: {
    mainWish: string;
    newYearWishes: string[];
    timelessBond: string;
    threeWords: string[];
    closingHeart: string;
  };
  closingSignOff: {
    thanksNote: string;
    sender: string;
    readAgainText: string;
    reflectionFootnote: string;
  };
}

export interface StoryData {
  opening: {
    eyebrow: string;
    recipient: string;
    scrollHint: string;
    storyHint: string;
  };
  secret: {
    introLines: string[];
    wishes: {
      greeting: string;
      busyJoke: string;
      wish: string;
      futureWish: string;
    };
    prompt: string;
    buttonText: string;
  };
  threeYears: {
    highlightQuote: string;
    firstSem: string;
    fifthSem: string;
    travelQuote: string;
    semesters: SemesterItem[];
    timePassed: string;
    realization: string;
  };
  funnyMemory: {
    setup: string;
    reaction: string;
    reactionSub: string;
    punchlineIntro: string;
    punchline: string;
    punchlineHighlight: string;
    aftermath: string;
  };
  transition: {
    calmIntro: string;
    bondShift: string;
    labelQuestion: string;
    roles: string[];
    reflection: string;
    deepRealization: string;
    teluguClimax: string;
    nextPartHint: string;
    nextPartCta: string;
  };
  part2: Part2Data;
  part3: Part3Data;
}

export const storyData: StoryData = {
  opening: {
    eyebrow: "A little something I made for you.",
    recipient: "BUDDIII",
    scrollHint: "Scroll slowly.",
    storyHint: "there's a story here",
  },
  secret: {
    introLines: [
      "Before you start reading…",
      "I didn't want to wish you the usual way this year.",
      "So I made you a little story.",
    ],
    wishes: {
      greeting: "Good morning buddiii....",
      busyJoke: "entaa busy?... ha haa maku telusu le... adhi anthaa wishes busy ani 😂",
      wish: "Anyways, wish u many many many more more more happy returns of the day, Buddi...",
      futureWish: "neekosam kottha year wait chestundhi... ee year chaala achievements ni, success ni nee kosam plan chesindhi... wait and see ☀️",
    },
    prompt: "Ready?",
    buttonText: "Let’s go →",
  },
  threeYears: {
    highlightQuote: "appude 3 years ayipoyaay, Buddi…",
    firstSem: "1st SEM",
    fifthSem: "5th SEM",
    travelQuote: "chaala travel chesaam Buddi.",
    semesters: [
      { id: "sem-1", semester: "1st SEM", label: "Semester 01", roman: "01", subtitle: "Where it all started" },
      { id: "sem-2", semester: "2nd SEM", label: "Semester 02", roman: "02", subtitle: "Conversations begin" },
      { id: "sem-3", semester: "3rd SEM", label: "Semester 03", roman: "03", subtitle: "Inside jokes & shared hours" },
      { id: "sem-4", semester: "4th SEM", label: "Semester 04", roman: "04", subtitle: "Unspoken comfort" },
      { id: "sem-5", semester: "5th SEM", label: "Semester 05", roman: "05", subtitle: "Right here, today" },
    ],
    timePassed: "and somehow... three years just happened.",
    realization: "From classmates to something much more special.",
  },
  funnyMemory: {
    setup: "appudeppudo akka ani pilistey…",
    reaction: "“entra evarra akkaa annaav?”",
    reactionSub: "that instant shock & immediate comeback 😂",
    punchlineIntro: "ippudu chudu...",
    punchline: "ee gundu gaadike ippatiki 2 times rakhi kaataav...",
    punchlineHighlight: "gundu gaadu",
    aftermath: "antey taruvatha alaa annanduku sorry cheppav le... adhi verey vishayam 😂",
  },
  transition: {
    calmIntro: "But somewhere along the way…",
    bondShift: "this became more than just a college friendship.",
    labelQuestion: "Ee relation ki oka label pettali ante…",
    roles: ["Akka?", "Friend?", "Teacher?", "Guide?"],
    reflection: "Maybe none of them alone can explain it.",
    deepRealization: "Because somewhere along the way, you became all of them.",
    teluguClimax: "Endukante nuvvu ivanni konchem konchem kaadu… anni kalipi naa life lo oka special person ayipoyaav ❤️",
    nextPartHint: "there's more to this story…",
    nextPartCta: "Part 2: The Safe Place ↓",
  },
  part2: {
    opening: {
      bridgeHint: "Maybe this explains it better…",
      quote: "Strong ga undadam antey prathi problem ni okkadiga face cheyyadam kaadhu.",
    },
    safePlace: {
      intro: "Konni saarlu...",
      comfortLines: [
        "evaraina pakkana kurchoni...",
        "emi cheppakunda unna kuda chaalu.",
      ],
      pillarItems: [
        "oka shoulder...",
        "oka hug...",
        "oka “nenu unna” ane maata...",
      ],
      strengthConclusion: "chaala pedda strength avuthundhi.",
      necessity: "prathi manishiki oka safe place kaavali.",
      unmasking: "akkada vaallu strong ga act cheyyalsina avasaram undadhu.",
      authenticity: "akkada vaallu vaallalaa undocchu.",
      vulnerabilities: [
        "edvacchu...",
        "silent ga undocchu...",
        "tana problems cheppukovacchu...",
        "ledha emi cheppakunna pakkaney kurchovacchu...",
      ],
      editorialQuote:
        "I think the best people in our lives are not always the ones who make the biggest moments happen, but the ones who make ordinary moments feel special.",
      personalRevealLead: "For me...",
      personalReveal: "you are that safe place, Buddi.",
      personalRevealSub: "A quiet sanctuary where being completely myself is effortless.",
    },
    ordinaryMoments: {
      resetExclamation: "mastu anipistadi abbaa...! 😌",
      simplicity: "mana kosam ani special ga em cheyyakkarledhu..",
      smallMoment: "konni saarlu mana kosam oka chinna moment create cheyyadam chaalu...",
      busyBore: {
        busy: "manam entha busy lo vunna...",
        bore: "manam entha bore ga vunna...",
        presence: "oka 2 mins manatho pakkane kurchoni matladi manatho time spend chese manushulu vuntey...",
        feeling: "aa feeling ey veru.",
      },
    },
    twoMinutes: {
      durationBadge: "THE TWO-MINUTE EXPERIMENT",
      title: "02:00",
      conversations: {
        noBigWords: "aa 2 mins lo pedda pedda maatalu em vundavu..",
        simpleWords: "Simple and soft maatalu...",
        whileThere: "alaa unnanta sepu...",
        smile: "alaa face meedha smile...",
        climax: "anthe...",
        heartFull: "heart full aipothundhi.",
      },
      corePhilosophy: {
        intro: "endukante time ivvadam kanna..",
        loveInCreatingTime: "mana kosam time ni create cheskodam lo unna love veru.",
        createTimeHighlight: "time ni create cheskodam",
        memoryNote: "konni relationships lo minutes chinnave..",
        memoryClimax: "kaani aa minutes ey gurthundipoye memories avuthai.",
      },
      englishEditorialQuote: {
        part1: "Some people give you hours of their time,",
        part2: "but some people can make even two minutes",
        part3: "feel like something worth remembering.",
      },
      personalValidation: {
        lead: "naa life lo ilaanti 2 minutes kosam evaraina person unnaaru ante..",
        recipient: "adhi nuvve Buddiii.. ❤️",
      },
    },
    reflection: {
      repetitionLead: "appudu cheppindhey...",
      repetitionFollow: "ippudu malli chepthunnaa...",
      crowdVsFew: {
        crowd: "naatho paatu vunna enthomandhilo...",
        few: "naa kosam antu vunna konthamandilo...",
      },
      akkaMoment: {
        akka: "akka",
        special: "special ey.",
        you: "nuvvu",
        fullSentence: "nuvvu naaku eppudu special ey akka..",
      },
    },
    ending: {
      memoriesLine: "Three years gave us the memories…",
      bestPartLine: "but I think the best part…",
      destinedLine: "is knowing that some people are meant to stay in the story.",
      curiosityHook: "There's one more thing I want to tell you.",
      nextChapterTag: "Part 3: What I Wanted You To Know ↓",
    },
  },
  part3: {
    opening: {
      bridge: "Actually...",
      subBridge: "there are a few things.",
      lead: "Things I genuinely wish for you.",
    },
    futureWishes: {
      strengthLead: "Nuvvu chaala mandiki strength ga untav…",
      strengthNeed: "kaani konni saarlu nee kosam kuda evaraina strength ga undaali.",
      qualities: ["care", "support", "happiness"],
      returnDouble: "avi anni neeku kuda double ga return avvaali.",
      personalBlessing1:
        "I hope life gives you the same kind of happiness that you unknowingly give to the people around you.",
      personalBlessing2:
        "You deserve to have people around you who make you feel as valued, supported and cared for as you make others feel.",
    },
    photoChapter: {
      introLead: "And then there are the memories…",
      introProof: "the ones that quietly prove how far we've come.",
      introReveal: "One of them is probably this.",
      photo1: {
        captionLead: "appudeppudo akka ani pilistey…",
        captionReaction: "“entra evarra akkaa annaav?”",
        captionPunchline: "ippudu chudu… ee gundu gaadike ippatiki 2 times rakhi kaataav… 😂",
        captionFollowup: "antey taruvatha alaa annanduku sorry cheppav le… adhi verey vishayam.",
      },
      photo2: {
        tag: "THREE YEARS LATER",
        line1: "Three years later…",
        line2: "some memories just explain themselves.",
      },
    },
    permanentStory: {
      memories: "Some people become memories,",
      chapters: "some become chapters,",
      permanent: "and a very few become a permanent part of the story.",
      permanenceClimax: "I'm glad you became the third one for me.",
    },
    collegeToLife: {
      intro: "And somewhere in between all these years,",
      moreThanCollege: "you stopped being just someone I met in college",
      keepInLife: "and became someone I genuinely want to keep in my life, long after college is over.",
    },
    relationshipWish: {
      prayerLead: "Paina vaadu nijanga mana maatalu vini neraverustaadu ante…",
      prayerWish: "ippatiki, eppatiki mana relation ilaane undaali ani korukuntaa.",
      comfortCraziness: [
        "Maarakunda…",
        "dooram kaakunda…",
        "mana madhya ee comfort…",
        "ee craziness…",
        "ee understanding…",
      ],
      beLikeThis: "ilaane undaali.",
      confidence: "Untundani 200% nammuthunna 🤞❤️",
    },
    philosopher: {
      pauseWord: "Okay…",
      tooEmotional: "This is getting way too emotional.",
      philosopherJoke:
        "And yes, before this becomes too emotional and you start thinking I have suddenly become a philosopher,",
      stopHere: "let me stop here. 😂",
    },
    birthdayLetter: {
      mainWish: "Happy Birthday once again, Buddiii.",
      newYearWishes: [
        "all the happiness,",
        "success,",
        "peace,",
        "and beautiful moments",
        "you truly deserve.",
      ],
      timelessBond:
        "And no matter how much life changes or how many years pass, I hope this crazy little bond of ours stays just the way it is —",
      threeWords: ["special.", "comfortable.", "and ours."],
      closingHeart: "❤️",
    },
    closingSignOff: {
      thanksNote: "Thank you for being one of the best parts of these three years.",
      sender: "— from your gundu gaadu",
      readAgainText: "Read it again ↻",
      reflectionFootnote: "Some stories are worth reading twice.",
    },
  },
};
