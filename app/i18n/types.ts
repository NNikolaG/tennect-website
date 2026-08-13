export const locales = ["en", "sr", "ru"] as const;

export type Locale = (typeof locales)[number];

export type FeatureContent = {
  eyebrow: string;
  title: string;
  copy: string;
  alt: string;
  action: string;
  details: [string, string, string];
};

export type GalleryContent = {
  label: string;
  alt: string;
  action: string;
  copy: string;
  details: [string, string, string];
  walkthrough?: {
    title: string;
    alt: string;
    details: [string, string, string, string];
    privacy: {
      title: string;
      alt: string;
      details: [string, string, string, string];
      options: [string, string, string];
    };
  };
};

export type FaqContent = {
  question: string;
  answer: string;
};

export type SiteContent = {
  htmlLang: string;
  localeLabel: string;
  languageNames: Record<Locale, string>;
  aria: {
    home: string;
    primaryNav: string;
    mobileNav: string;
    openNav: string;
    selectLanguage: string;
    profilePreview: string;
    features: string;
    seoUses: string;
    legalNav: string;
    backToTop: string;
    closeFeature: string;
    nextSlide: string;
    previousSlide: string;
    slide: string;
    slideOf: string;
  };
  nav: {
    features: string;
    howItWorks: string;
    insideApp: string;
    faq: string;
    downloadLabel: string;
    download: string;
    downloadAndroid: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    copy: string;
    download: string;
    explore: string;
    appStoreBadgeAlt: string;
    googlePlayBadgeAlt: string;
    notes: [string, string, string];
    imageAlt: string;
  };
  intro: {
    kicker: string;
    title: string;
    copy: string;
  };
  featureDialog: {
    kicker: string;
    openLabel: string;
  };
  features: [FeatureContent, FeatureContent, FeatureContent];
  steps: {
    kicker: string;
    title: string;
    items: [
      { title: string; copy: string },
      { title: string; copy: string },
      { title: string; copy: string },
    ];
  };
  gallery: {
    kicker: string;
    title: string;
    swipe: string;
    items: [
      GalleryContent,
      GalleryContent,
      GalleryContent,
      GalleryContent,
      GalleryContent,
    ];
  };
  seo: {
    kicker: string;
    title: string;
    copy: string;
    keywords: [string, string, string, string, string, string];
  };
  faq: {
    kicker: string;
    title: string;
    ask: string;
    items: FaqContent[];
  };
  finalCta: {
    kicker: string;
    title: string;
    copy: string;
    button: string;
  };
  footer: {
    tagline: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogAlt: string;
    keywords: string[];
  };
  schema: {
    description: string;
    features: [string, string, string, string, string, string];
  };
};
