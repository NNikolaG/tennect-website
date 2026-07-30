"use client";

import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";

const measurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-L434P285VX";
const consentStorageKey = "tennect-analytics-consent";
const consentChangeEvent = "tennect-analytics-consent-change";
const legalBase =
  "https://whwhvvfbxaoeezbtqhga.supabase.co/storage/v1/object/public/legal";

type ConsentChoice = "granted" | "denied";
type GtagArguments = [command: string, ...values: unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArguments) => void;
    tennectAnalyticsConsent?: ConsentChoice;
    tennectAnalyticsInitialized?: boolean;
  }
}

const consentCopy = {
  en: {
    title: "Help us improve Tennect",
    body: "With your permission, we use Google Analytics to understand visits and which features people explore. We do not send personal data.",
    accept: "Allow analytics",
    decline: "Decline",
    settings: "Privacy settings",
    privacy: "Privacy policy",
  },
  sr: {
    title: "Pomozi nam da unapredimo Tennect",
    body: "Uz tvoju dozvolu, Google Analytics koristimo da razumemo posete i koje funkcije korisnici istražuju. Ne šaljemo lične podatke.",
    accept: "Dozvoli analitiku",
    decline: "Odbij",
    settings: "Podešavanja privatnosti",
    privacy: "Politika privatnosti",
  },
  ru: {
    title: "Помогите нам улучшить Tennect",
    body: "С вашего разрешения Google Analytics помогает нам понимать посещаемость и интерес к функциям. Мы не отправляем персональные данные.",
    accept: "Разрешить аналитику",
    decline: "Отклонить",
    settings: "Настройки конфиденциальности",
    privacy: "Политика конфиденциальности",
  },
} as const;

function localeKey(lang: string) {
  if (lang.startsWith("sr")) return "sr";
  if (lang.startsWith("ru")) return "ru";
  return "en";
}

function consentParams(choice: ConsentChoice) {
  return {
    analytics_storage: choice,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
}

function readConsentChoice(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const storedChoice = window.localStorage.getItem(consentStorageKey);
    if (storedChoice === "granted" || storedChoice === "denied") {
      return storedChoice;
    }
  } catch {
    return window.tennectAnalyticsConsent ?? null;
  }
  return window.tennectAnalyticsConsent ?? null;
}

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(consentChangeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(consentChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string>,
) {
  if (
    typeof window === "undefined" ||
    readConsentChoice() !== "granted"
  ) {
    return;
  }
  window.gtag?.("event", eventName, parameters);
}

export function GoogleAnalytics({ lang }: { lang: string }) {
  const choice = useSyncExternalStore(
    subscribeToConsent,
    readConsentChoice,
    () => null,
  );
  const [panelOpen, setPanelOpen] = useState(false);
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const copy = consentCopy[localeKey(lang)];
  const policyLocale = lang.startsWith("sr") ? "sr-Latn" : localeKey(lang);
  const privacyHref = `${legalBase}/privacy-policies/privacy-policy-${policyLocale}.html`;

  useEffect(() => {
    if (choice !== "granted") return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: GtagArguments) => {
        window.dataLayer?.push(args);
      });

    if (window.tennectAnalyticsInitialized) {
      window.gtag("consent", "update", consentParams("granted"));
      return;
    }

    window.tennectAnalyticsInitialized = true;
    window.gtag("consent", "default", consentParams("granted"));
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });
  }, [choice]);

  useEffect(() => {
    function handleTrackedClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      if (!target?.dataset.analyticsEvent) return;

      const parameters: Record<string, string> = {};
      const parameterMap = {
        analyticsContentType: "content_type",
        analyticsContentId: "content_id",
        analyticsPlacement: "placement",
        analyticsLocale: "locale",
        analyticsStore: "store",
      } as const;

      for (const [datasetKey, parameterName] of Object.entries(parameterMap)) {
        const value = target.dataset[datasetKey];
        if (value) parameters[parameterName] = value;
      }

      if (target instanceof HTMLAnchorElement) {
        parameters.link_url = target.href;
      }
      trackAnalyticsEvent(target.dataset.analyticsEvent, parameters);
    }

    document.addEventListener("click", handleTrackedClick);
    return () => document.removeEventListener("click", handleTrackedClick);
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    try {
      window.localStorage.setItem(consentStorageKey, nextChoice);
    } catch {
      // Keep the choice in memory when browser storage is unavailable.
    }
    window.tennectAnalyticsConsent = nextChoice;
    window.gtag?.("consent", "update", consentParams(nextChoice));
    setPanelOpen(false);
    window.dispatchEvent(new Event(consentChangeEvent));
  }

  return (
    <>
      {hydrated && choice === "granted" ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      ) : null}

      {hydrated && (panelOpen || choice === null) ? (
        <aside
          className="analytics-consent"
          aria-labelledby="analytics-consent-title"
        >
          <h2 id="analytics-consent-title">{copy.title}</h2>
          <p>{copy.body}</p>
          <a href={privacyHref} target="_blank" rel="noreferrer">
            {copy.privacy}
          </a>
          <div>
            <button type="button" onClick={() => saveChoice("denied")}>
              {copy.decline}
            </button>
            <button
              className="analytics-consent-accept"
              type="button"
              onClick={() => saveChoice("granted")}
            >
              {copy.accept}
            </button>
          </div>
        </aside>
      ) : null}

      {hydrated && choice !== null && !panelOpen ? (
        <button
          className="analytics-settings"
          type="button"
          onClick={() => setPanelOpen(true)}
        >
          {copy.settings}
        </button>
      ) : null}
    </>
  );
}
