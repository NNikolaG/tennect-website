const features = [
  {
    number: "01",
    eyebrow: "Player finder",
    title: "Find tennis players near you",
    copy: "Search by city, skill level, preferred surface and availability. Discover the right tennis partner without endless group chats.",
    image: "/media/tennect-player-search.png",
    alt: "Tennect player search showing local tennis players and preferred court surfaces",
    tone: "lime",
  },
  {
    number: "02",
    eyebrow: "Court discovery",
    title: "Explore nearby tennis courts",
    copy: "See courts on a map, check ratings, opening hours and contact details, then choose where your next match happens.",
    image: "/media/tennect-courts-map.png",
    alt: "Tennect map displaying nearby tennis courts",
    tone: "clay",
  },
  {
    number: "03",
    eyebrow: "Match day",
    title: "Schedule, play and score",
    copy: "Send a match or training request, confirm the time and court, keep score and build a complete history of your tennis.",
    image: "/media/tennect-match-preview.png",
    alt: "Tennect confirmed tennis match preview",
    tone: "cream",
  },
];

const gallery = [
  {
    image: "/media/tennect-availability.png",
    alt: "Tennect availability calendar and preferred tennis surfaces",
    label: "Set availability",
  },
  {
    image: "/media/tennect-upcoming-matches.png",
    alt: "Upcoming confirmed tennis matches in Tennect",
    label: "Manage matches",
  },
  {
    image: "/media/tennect-court-search.png",
    alt: "Search results for tennis courts in Tennect",
    label: "Discover courts",
  },
  {
    image: "/media/tennect-ranking.png",
    alt: "Global tennis player rankings in Tennect",
    label: "Climb rankings",
  },
  {
    image: "/media/tennect-tennis-news.png",
    alt: "Tennis news and community match feed in Tennect",
    label: "Follow tennis news",
  },
];

const faqs = [
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
      "Yes. Tennect supports match and training requests, scheduling, match confirmation, live scoring, result verification, match history and performance statistics.",
  },
  {
    question: "Is Tennect only for advanced players?",
    answer:
      "No. Tennect is designed for tennis players at every stage. Profiles and filters help beginners, recreational players and competitive players find suitable partners.",
  },
  {
    question: "Which languages does Tennect support?",
    answer:
      "Tennect currently includes 23 interface languages so tennis communities can connect across cities, countries and borders.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Tennect",
  applicationCategory: "SportsApplication",
  operatingSystem: "iOS",
  description:
    "A tennis community app for finding nearby players and courts, organising matches, tracking scores, viewing rankings and following tennis news.",
  featureList: [
    "Find tennis players near you",
    "Discover nearby tennis courts",
    "Schedule tennis matches and training",
    "Track live tennis scores and match history",
    "Compare statistics and rankings",
    "Read tennis news and community updates",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tennect home">
          <img
            src="/media/tennect-icon.png"
            width={1024}
            height={1024}
            alt=""
          />
          <span>Tennect</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#inside-the-app">Inside the app</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          className="header-cta"
          href="mailto:tennect@outlook.com?subject=Tennect%20early%20access"
        >
          Get early access <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#inside-the-app">Inside the app</a>
            <a href="#faq">FAQ</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="court-lines" aria-hidden="true" />
          <div className="hero-side hero-side-left">
            <div className="orbit-ball" aria-hidden="true">
              <span />
            </div>
            <p className="side-title">Find your perfect match</p>
            <p className="side-copy">Level · location · availability</p>
            <div className="side-divider" />
            <div className="surface-stack" aria-label="Court surface options">
              <span>CLAY</span>
              <span>GRASS</span>
              <span>HARD</span>
            </div>
            <p className="side-title">Every court. One map.</p>
          </div>

          <div className="hero-phone" aria-label="Tennect match preview screen">
            <div className="phone-speaker" aria-hidden="true" />
            <img
              src="/media/tennect-match-preview.png"
              width={1260}
              height={2736}
              alt="Tennect app showing a confirmed tennis match between two players"
            />
          </div>

          <div className="hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">●</span> Your tennis community
            </p>
            <h1 id="hero-title">
              Your next
              <br />
              tennis match
              <br />
              starts here.
            </h1>
            <p className="hero-copy">
              Find players at your level, discover nearby courts and organise
              every match in one place.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#features">
                Explore Tennect <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-outline"
                href="mailto:tennect@outlook.com?subject=Tennect%20early%20access"
              >
                Join early access <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-notes">
              <span>Built for every level</span>
              <span>23 languages</span>
              <span>One connected game</span>
            </div>
          </div>
        </section>

        <section className="intro" id="features">
          <div>
            <p className="section-kicker">Tennis, connected.</p>
            <h2>Everything you need to get on court.</h2>
          </div>
          <p>
            Tennect turns the scattered parts of amateur tennis into one clear
            experience—from finding a hitting partner to confirming the final
            score.
          </p>
        </section>

        <section className="feature-grid" aria-label="Tennect features">
          {features.map((feature) => (
            <article
              className={`feature-card feature-card-${feature.tone}`}
              key={feature.number}
            >
              <div className="feature-card-top">
                <span>{feature.number}</span>
                <span>↗</span>
              </div>
              <p className="card-eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
              <div className="feature-phone">
                <img
                  src={feature.image}
                  width={1260}
                  height={2736}
                  alt={feature.alt}
                />
              </div>
            </article>
          ))}
        </section>

        <section className="steps" id="how-it-works">
          <div className="steps-heading">
            <p className="section-kicker">From “want to play” to match point</p>
            <h2>Three steps. One better tennis routine.</h2>
          </div>
          <ol className="steps-list">
            <li>
              <span>01</span>
              <div>
                <h3>Build your tennis profile</h3>
                <p>
                  Add your level, city, availability and favourite court
                  surfaces.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Find the right player and court</h3>
                <p>
                  Search nearby players, compare preferences and choose a local
                  court.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Play, score and improve</h3>
                <p>
                  Confirm the match, record the score and turn every game into
                  useful progress.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="app-gallery" id="inside-the-app">
          <div className="gallery-heading">
            <div>
              <p className="section-kicker">Inside Tennect</p>
              <h2>One app for your whole tennis life.</h2>
            </div>
            <p>Swipe to explore the experience →</p>
          </div>
          <div className="gallery-track">
            {gallery.map((item, index) => (
              <figure className="gallery-item" key={item.image}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="gallery-phone">
                  <img
                    src={item.image}
                    width={1260}
                    height={2736}
                    alt={item.alt}
                  />
                </div>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="seo-band">
          <div className="seo-badge" aria-hidden="true">
            <img
              src="/media/tennect-icon.png"
              width={1024}
              height={1024}
              alt=""
            />
          </div>
          <div>
            <p className="section-kicker">Made for players, not spectators</p>
            <h2>A smarter way to play more tennis.</h2>
            <p>
              Whether you are looking for a tennis partner, a nearby court, a
              practice session or your next competitive match, Tennect keeps
              the people, places and progress together.
            </p>
          </div>
          <div className="seo-keywords" aria-label="Tennect uses">
            <span>Find tennis partners</span>
            <span>Discover tennis courts</span>
            <span>Schedule matches</span>
            <span>Track tennis scores</span>
            <span>Compare rankings</span>
            <span>Follow tennis news</span>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="faq-heading">
            <p className="section-kicker">Frequently asked questions</p>
            <h2>Everything before your first serve.</h2>
            <a href="mailto:tennect@outlook.com?subject=Tennect%20question">
              Ask us anything <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
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
          <p className="eyebrow">Find your perfect match</p>
          <h2>Ready when you are.</h2>
          <p>
            Be among the first players to know when Tennect is ready in your
            city.
          </p>
          <a
            className="button button-dark"
            href="mailto:tennect@outlook.com?subject=Tennect%20early%20access"
          >
            Get launch updates <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <a className="brand brand-footer" href="#top" aria-label="Back to top">
          <img
            src="/media/tennect-icon.png"
            width={1024}
            height={1024}
            alt=""
          />
          <span>Tennect</span>
        </a>
        <p>Find your perfect match.</p>
        <nav aria-label="Legal and contact links">
          <a href="mailto:tennect@outlook.com">Contact</a>
          <a
            href="https://whwhvvfbxaoeezbtqhga.supabase.co/storage/v1/object/public/legal/privacy-policies/privacy-policy-en.html"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://whwhvvfbxaoeezbtqhga.supabase.co/storage/v1/object/public/legal/terms-of-use/terms-of-use-en.html"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
        </nav>
        <p>© 2026 Tennect</p>
      </footer>
    </>
  );
}
