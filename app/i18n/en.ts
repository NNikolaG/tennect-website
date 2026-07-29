import type { SiteContent } from "./types";

export const en: SiteContent = {
  htmlLang: "en",
  localeLabel: "EN",
  languageNames: { en: "English", sr: "Srpski", ru: "Русский" },
  aria: {
    home: "Tennect home",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    openNav: "Open navigation",
    selectLanguage: "Select language",
    surfaces: "Court surface options",
    matchPreview: "Tennect match preview screen",
    features: "Tennect features",
    seoUses: "Ways to use Tennect",
    legalNav: "Legal and contact links",
    backToTop: "Back to top",
  },
  nav: {
    features: "Features",
    howItWorks: "How it works",
    insideApp: "Inside the app",
    faq: "FAQ",
    earlyAccess: "Get early access",
    menu: "Menu",
  },
  side: {
    perfectMatch: "Find your perfect match",
    filters: "Level · location · availability",
    surfaces: ["CLAY", "GRASS", "HARD"],
    everyCourt: "Every court. One map.",
  },
  hero: {
    eyebrow: "Your tennis community",
    title: ["Your next", "tennis match", "starts here."],
    copy:
      "Find players at your level, discover nearby courts and organise every match in one place.",
    explore: "Explore Tennect",
    join: "Join early access",
    notes: ["Built for every level", "23 app languages", "One connected game"],
    imageAlt:
      "Tennect app showing a confirmed tennis match between two players",
  },
  intro: {
    kicker: "Tennis, connected.",
    title: "Everything you need to get on court.",
    copy:
      "Tennect turns the scattered parts of amateur tennis into one clear experience—from finding a hitting partner to confirming the final score.",
  },
  features: [
    {
      eyebrow: "Player finder",
      title: "Find tennis players near you",
      copy:
        "Search by city, skill level, preferred surface and availability. Discover the right tennis partner without endless group chats.",
      alt: "Tennect player search showing local players and preferred surfaces",
    },
    {
      eyebrow: "Court discovery",
      title: "Explore nearby tennis courts",
      copy:
        "See courts on a map, check ratings, opening hours and contact details, then choose where your next match happens.",
      alt: "Tennect map displaying nearby tennis courts",
    },
    {
      eyebrow: "Match day",
      title: "Schedule, play and score",
      copy:
        "Send a match or training request, confirm the time and court, keep score and build a complete history of your tennis.",
      alt: "Tennect confirmed tennis match preview",
    },
  ],
  steps: {
    kicker: "From “want to play” to match point",
    title: "Three steps. One better tennis routine.",
    items: [
      {
        title: "Build your tennis profile",
        copy:
          "Add your level, city, availability and favourite court surfaces.",
      },
      {
        title: "Find the right player and court",
        copy:
          "Search nearby players, compare preferences and choose a local court.",
      },
      {
        title: "Play, score and improve",
        copy:
          "Confirm the match, record the score and turn every game into useful progress.",
      },
    ],
  },
  gallery: {
    kicker: "Inside Tennect",
    title: "One app for your whole tennis life.",
    swipe: "Swipe to explore the experience →",
    items: [
      {
        label: "Set availability",
        alt: "Tennect availability calendar and preferred tennis surfaces",
      },
      {
        label: "Manage matches",
        alt: "Upcoming confirmed tennis matches in Tennect",
      },
      {
        label: "Discover courts",
        alt: "Search results for tennis courts in Tennect",
      },
      {
        label: "Climb rankings",
        alt: "Global tennis player rankings in Tennect",
      },
      {
        label: "Follow tennis news",
        alt: "Tennis news and community match feed in Tennect",
      },
    ],
  },
  seo: {
    kicker: "Made for players, not spectators",
    title: "A smarter way to play more tennis.",
    copy:
      "Whether you are looking for a tennis partner, a nearby court, a practice session or your next competitive match, Tennect keeps the people, places and progress together.",
    keywords: [
      "Find tennis partners",
      "Discover tennis courts",
      "Schedule matches",
      "Track tennis scores",
      "Compare rankings",
      "Follow tennis news",
    ],
  },
  faq: {
    kicker: "Frequently asked questions",
    title: "Everything before your first serve.",
    ask: "Ask us anything",
    items: [
      {
        question: "How can I find tennis players near me?",
        answer:
          "Tennect lets you search for players by location, playing level, preferred court surface and availability, making it easier to find a compatible tennis partner nearby.",
      },
      {
        question: "Can I use Tennect to find tennis courts?",
        answer:
          "Yes. Search nearby tennis courts in a list or on a map, view ratings and opening hours, save favourites and open the court’s contact or location details.",
      },
      {
        question: "Can I organise and score a tennis match in the app?",
        answer:
          "Yes. Tennect supports match and training requests, scheduling, confirmation, live scoring, result verification, match history and performance statistics.",
      },
      {
        question: "Is Tennect only for advanced players?",
        answer:
          "No. Tennect is designed for every stage. Profiles and filters help beginners, recreational players and competitive players find suitable partners.",
      },
      {
        question: "Which languages does Tennect support?",
        answer:
          "This website is currently available in English, Serbian and Russian, while the Tennect app includes 23 interface languages.",
      },
    ],
  },
  finalCta: {
    kicker: "Find your perfect match",
    title: "Ready when you are.",
    copy:
      "Be among the first players to know when Tennect is ready in your city.",
    button: "Get launch updates",
  },
  footer: {
    tagline: "Find your perfect match.",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
  },
  metadata: {
    title: "Tennect — Find Tennis Players & Courts Near You",
    description:
      "Find tennis players near you, discover local courts, organise matches, track scores and climb the rankings with Tennect.",
    ogTitle: "Tennect — Your next tennis match starts here.",
    ogDescription:
      "Find players, discover courts, schedule matches and track your tennis in one connected app.",
    ogAlt: "Tennect — Your next tennis match starts here",
    keywords: [
      "find tennis players",
      "tennis players near me",
      "tennis partner app",
      "tennis courts near me",
      "tennis match app",
      "tennis ranking app",
      "tennis community",
      "tennis score tracker",
    ],
  },
  schema: {
    description:
      "A tennis community app for finding nearby players and courts, organising matches, tracking scores, viewing rankings and following tennis news.",
    features: [
      "Find tennis players near you",
      "Discover nearby tennis courts",
      "Schedule tennis matches and training",
      "Track live tennis scores and match history",
      "Compare statistics and rankings",
      "Read tennis news and community updates",
    ],
  },
};
