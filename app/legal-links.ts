const privacyPolicyUrls = {
  en: "https://teal-starship-35c661.netlify.app",
  sr: "https://superb-pavlova-bfabce.netlify.app",
  ru: "https://animated-basbousa-5f9c2c.netlify.app",
} as const;

export function getPrivacyPolicyUrl(locale: string) {
  if (locale.startsWith("sr")) return privacyPolicyUrls.sr;
  if (locale.startsWith("ru")) return privacyPolicyUrls.ru;
  return privacyPolicyUrls.en;
}
