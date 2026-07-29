import Image from "next/image";
import {
  getContent,
  localePaths,
  locales,
  type Locale,
} from "../i18n";
import { FeatureShowcase } from "./FeatureShowcase";
import { GalleryShowcase } from "./GalleryShowcase";

const legalBase =
  "https://whwhvvfbxaoeezbtqhga.supabase.co/storage/v1/object/public/legal";

function legalLocale(locale: Locale) {
  return locale === "sr" ? "sr-Latn" : locale;
}

function earlyAccessHref(label: string) {
  return `mailto:tennect@outlook.com?subject=${encodeURIComponent(
    `Tennect — ${label}`,
  )}`;
}

export function TennectHome({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const appStoreBadge =
    locale === "ru"
      ? "/media/app-store-badge-ru.svg"
      : "/media/app-store-badge-en.svg";
  const googlePlayBadge = `/media/google-play-badge-${locale}.png`;
  const accessHref = earlyAccessHref(content.nav.earlyAccess);
  const questionHref = `mailto:tennect@outlook.com?subject=${encodeURIComponent(
    `Tennect — ${content.faq.ask}`,
  )}`;
  const policyLocale = legalLocale(locale);
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Tennect",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS",
    inLanguage: content.htmlLang,
    description: content.schema.description,
    featureList: content.schema.features,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: content.htmlLang,
    mainEntity: content.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div lang={content.htmlLang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label={content.aria.home}>
          <Image
            src="/media/tennect-icon.png"
            width={1024}
            height={1024}
            alt=""
          />
          <span>Tennect</span>
        </a>
        <nav className="desktop-nav" aria-label={content.aria.primaryNav}>
          <a href="#features">{content.nav.features}</a>
          <a href="#how-it-works">{content.nav.howItWorks}</a>
          <a href="#inside-the-app">{content.nav.insideApp}</a>
          <a href="#faq">{content.nav.faq}</a>
        </nav>
        <div className="header-tools">
          <details className="language-switcher">
            <summary aria-label={content.aria.selectLanguage}>
              <span>{content.localeLabel}</span>
              <b aria-hidden="true">⌄</b>
            </summary>
            <div>
              {locales.map((item) => (
                <a
                  href={localePaths[item]}
                  hrefLang={getContent(item).htmlLang}
                  aria-current={item === locale ? "page" : undefined}
                  key={item}
                >
                  <span>{item.toUpperCase()}</span>
                  {content.languageNames[item]}
                </a>
              ))}
            </div>
          </details>
          <a className="header-cta" href={accessHref}>
            {content.nav.earlyAccess} <span aria-hidden="true">↗</span>
          </a>
          <details className="mobile-menu">
            <summary aria-label={content.aria.openNav}>
              {content.nav.menu}
            </summary>
            <nav aria-label={content.aria.mobileNav}>
              <a href="#features">{content.nav.features}</a>
              <a href="#how-it-works">{content.nav.howItWorks}</a>
              <a href="#inside-the-app">{content.nav.insideApp}</a>
              <a href="#faq">{content.nav.faq}</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="court-lines" aria-hidden="true" />
          <div className="hero-side hero-side-left">
            <div className="orbit-ball" aria-hidden="true">
              <span />
            </div>
            <p className="side-title">{content.side.perfectMatch}</p>
            <p className="side-copy">{content.side.filters}</p>
            <div className="surface-stack" aria-label={content.aria.surfaces}>
              {content.side.surfaces.map((surface) => (
                <span key={surface}>{surface}</span>
              ))}
            </div>
            <div className="side-divider" />
            <div className="side-map" aria-hidden="true">
              <i />
              <span />
              <span />
              <span />
            </div>
            <p className="side-title">{content.side.everyCourt}</p>
          </div>

          <div className="hero-phone" aria-label={content.aria.matchPreview}>
            <div className="phone-speaker" aria-hidden="true" />
            <Image
              src="/media/tennect-match-preview.png"
              width={1260}
              height={2736}
              alt={content.hero.imageAlt}
            />
          </div>

          <div className="hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">●</span> {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {content.hero.title.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="hero-copy">{content.hero.copy}</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#features">
                {content.hero.explore} <span aria-hidden="true">↓</span>
              </a>
              <div className="store-badges">
                <a
                  className="store-badge-link app-store-link"
                  href="https://apple.co/3RAyuwX"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.hero.appStoreBadgeAlt}
                >
                  <Image
                    src={appStoreBadge}
                    width={120}
                    height={40}
                    alt={content.hero.appStoreBadgeAlt}
                  />
                </a>
                <a
                  className="store-badge-link google-play-link"
                  href={accessHref}
                  aria-label={content.hero.googlePlayBadgeAlt}
                >
                  <Image
                    src={googlePlayBadge}
                    width={646}
                    height={250}
                    alt={content.hero.googlePlayBadgeAlt}
                  />
                </a>
              </div>
            </div>
            <div className="hero-notes">
              {content.hero.notes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="intro" id="features">
          <div>
            <p className="section-kicker">{content.intro.kicker}</p>
            <h2>{content.intro.title}</h2>
          </div>
          <p>{content.intro.copy}</p>
        </section>

        <FeatureShowcase
          features={content.features}
          dialogKicker={content.featureDialog.kicker}
          closeLabel={content.aria.closeFeature}
          sectionLabel={content.aria.features}
        />

        <section className="steps" id="how-it-works">
          <div className="steps-heading">
            <p className="section-kicker">{content.steps.kicker}</p>
            <h2>{content.steps.title}</h2>
          </div>
          <ol className="steps-list">
            {content.steps.items.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <GalleryShowcase
          closeLabel={content.aria.closeFeature}
          gallery={content.gallery}
        />

        <section className="seo-band">
          <div className="seo-badge" aria-hidden="true">
            <Image
              src="/media/tennect-icon.png"
              width={1024}
              height={1024}
              alt=""
            />
          </div>
          <div>
            <p className="section-kicker">{content.seo.kicker}</p>
            <h2>{content.seo.title}</h2>
            <p>{content.seo.copy}</p>
          </div>
          <div className="seo-keywords" aria-label={content.aria.seoUses}>
            {content.seo.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="faq-heading">
            <p className="section-kicker">{content.faq.kicker}</p>
            <h2>{content.faq.title}</h2>
            <a href={questionHref}>
              {content.faq.ask} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {content.faq.items.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <b aria-hidden="true">+</b>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-ball" aria-hidden="true" />
          <p className="eyebrow">{content.finalCta.kicker}</p>
          <h2>{content.finalCta.title}</h2>
          <p>{content.finalCta.copy}</p>
          <a className="button button-dark" href={accessHref}>
            {content.finalCta.button} <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <a className="brand brand-footer" href="#top" aria-label={content.aria.backToTop}>
          <Image
            src="/media/tennect-icon.png"
            width={1024}
            height={1024}
            alt=""
          />
          <span>Tennect</span>
        </a>
        <p>{content.footer.tagline}</p>
        <nav aria-label={content.aria.legalNav}>
          <a href="mailto:tennect@outlook.com">{content.footer.contact}</a>
          <a
            href={`${legalBase}/privacy-policies/privacy-policy-${policyLocale}.html`}
            target="_blank"
            rel="noreferrer"
          >
            {content.footer.privacy}
          </a>
          <a
            href={`${legalBase}/terms-of-use/terms-of-use-${policyLocale}.html`}
            target="_blank"
            rel="noreferrer"
          >
            {content.footer.terms}
          </a>
        </nav>
        <p className="footer-copyright">© 2026 Tennect</p>
        <p className="apple-credit">
          Apple and the Apple logo are trademarks of Apple Inc., registered in
          the U.S. and other countries and regions. App Store is a service mark
          of Apple Inc.
        </p>
      </footer>
    </div>
  );
}
