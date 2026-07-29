import type { SiteContent } from "./types";

export const sr: SiteContent = {
  htmlLang: "sr-Latn",
  localeLabel: "SR",
  languageNames: { en: "English", sr: "Srpski", ru: "Русский" },
  aria: {
    home: "Početna stranica Tennect",
    primaryNav: "Glavna navigacija",
    mobileNav: "Mobilna navigacija",
    openNav: "Otvori navigaciju",
    selectLanguage: "Izaberi jezik",
    surfaces: "Vrste teniskih podloga",
    matchPreview: "Prikaz Tennect meča",
    features: "Tennect funkcije",
    seoUses: "Načini korišćenja Tennect aplikacije",
    legalNav: "Pravni dokumenti i kontakt",
    backToTop: "Nazad na vrh",
  },
  nav: {
    features: "Funkcije",
    howItWorks: "Kako funkcioniše",
    insideApp: "U aplikaciji",
    faq: "Česta pitanja",
    earlyAccess: "Rani pristup",
    menu: "Meni",
  },
  side: {
    perfectMatch: "Pronađi idealnog protivnika",
    filters: "Nivo · lokacija · dostupnost",
    surfaces: ["ŠLJAKA", "TRAVA", "TVRDA"],
    everyCourt: "Svaki teren. Jedna mapa.",
  },
  hero: {
    eyebrow: "Tvoja teniska zajednica",
    title: ["Sledeći", "teniski meč", "počinje ovde."],
    copy:
      "Pronađi igrače svog nivoa, otkrij terene u blizini i organizuj svaki meč na jednom mestu.",
    explore: "Istraži Tennect",
    join: "Pridruži se",
    notes: ["Za svaki nivo", "23 jezika u aplikaciji", "Jedna povezana igra"],
    imageAlt:
      "Tennect aplikacija prikazuje potvrđen teniski meč između dva igrača",
  },
  intro: {
    kicker: "Tenis, povezan.",
    title: "Sve što ti treba da izađeš na teren.",
    copy:
      "Tennect spaja sve delove rekreativnog tenisa u jedno jasno iskustvo—od pronalaženja partnera za igru do potvrde konačnog rezultata.",
  },
  features: [
    {
      eyebrow: "Pretraga igrača",
      title: "Pronađi tenisere u blizini",
      copy:
        "Pretražuj po gradu, nivou igre, omiljenoj podlozi i dostupnosti. Pronađi odgovarajućeg partnera bez beskrajnih grupnih poruka.",
      alt: "Tennect pretraga lokalnih tenisera i omiljenih podloga",
    },
    {
      eyebrow: "Pronalaženje terena",
      title: "Otkrij teniske terene u blizini",
      copy:
        "Pogledaj terene na mapi, ocene, radno vreme i kontakt podatke, pa izaberi gde će se odigrati sledeći meč.",
      alt: "Tennect mapa sa teniskim terenima u blizini",
    },
    {
      eyebrow: "Dan meča",
      title: "Zakaži, igraj i beleži rezultat",
      copy:
        "Pošalji zahtev za meč ili trening, potvrdi vreme i teren, vodi rezultat i izgradi kompletnu istoriju svoje igre.",
      alt: "Prikaz potvrđenog teniskog meča u Tennect aplikaciji",
    },
  ],
  steps: {
    kicker: "Od želje za igrom do meč lopte",
    title: "Tri koraka. Bolja teniska rutina.",
    items: [
      {
        title: "Napravi teniski profil",
        copy: "Dodaj nivo igre, grad, dostupnost i omiljene podloge.",
      },
      {
        title: "Pronađi pravog igrača i teren",
        copy:
          "Pretraži igrače u blizini, uporedi preference i izaberi lokalni teren.",
      },
      {
        title: "Igraj, beleži rezultat i napreduj",
        copy:
          "Potvrdi meč, zabeleži rezultat i pretvori svaku igru u koristan napredak.",
      },
    ],
  },
  gallery: {
    kicker: "Unutar Tennect-a",
    title: "Jedna aplikacija za ceo tvoj teniski život.",
    swipe: "Prevuci i istraži iskustvo →",
    items: [
      {
        label: "Podesi dostupnost",
        alt: "Tennect kalendar dostupnosti i omiljene teniske podloge",
      },
      {
        label: "Organizuj mečeve",
        alt: "Predstojeći potvrđeni teniski mečevi u Tennect aplikaciji",
      },
      {
        label: "Pronađi terene",
        alt: "Rezultati pretrage teniskih terena u Tennect aplikaciji",
      },
      {
        label: "Napreduj na rang-listi",
        alt: "Globalna rang-lista tenisera u Tennect aplikaciji",
      },
      {
        label: "Prati teniske vesti",
        alt: "Teniske vesti i objave zajednice u Tennect aplikaciji",
      },
    ],
  },
  seo: {
    kicker: "Napravljeno za igrače, ne za gledaoce",
    title: "Pametniji način da igraš više tenisa.",
    copy:
      "Bilo da tražiš teniskog partnera, teren u blizini, trening ili sledeći takmičarski meč, Tennect povezuje ljude, mesta i tvoj napredak.",
    keywords: [
      "Pronađi teniske partnere",
      "Otkrij teniske terene",
      "Zakaži mečeve",
      "Vodi teniski rezultat",
      "Uporedi rang-liste",
      "Prati teniske vesti",
    ],
  },
  faq: {
    kicker: "Česta pitanja",
    title: "Sve pre prvog servisa.",
    ask: "Pitaj nas bilo šta",
    items: [
      {
        question: "Kako da pronađem tenisere u blizini?",
        answer:
          "Tennect omogućava pretragu igrača po lokaciji, nivou igre, omiljenoj podlozi i dostupnosti, pa lakše možeš pronaći odgovarajućeg teniskog partnera u blizini.",
      },
      {
        question: "Mogu li preko Tennect-a da pronađem teniske terene?",
        answer:
          "Da. Pretraži terene u listi ili na mapi, pogledaj ocene i radno vreme, sačuvaj favorite i otvori kontakt ili lokaciju terena.",
      },
      {
        question: "Mogu li da organizujem meč i vodim rezultat?",
        answer:
          "Da. Tennect podržava zahteve za meč i trening, zakazivanje, potvrdu meča, vođenje rezultata uživo, potvrdu rezultata, istoriju i statistiku.",
      },
      {
        question: "Da li je Tennect samo za napredne igrače?",
        answer:
          "Ne. Tennect je namenjen svim nivoima. Profili i filteri pomažu početnicima, rekreativcima i takmičarima da pronađu odgovarajuće partnere.",
      },
      {
        question: "Koje jezike Tennect podržava?",
        answer:
          "Ovaj sajt je trenutno dostupan na engleskom, srpskom i ruskom, dok Tennect aplikacija uključuje interfejs na 23 jezika.",
      },
    ],
  },
  finalCta: {
    kicker: "Pronađi idealnog protivnika",
    title: "Spremni kada i ti.",
    copy:
      "Budi među prvim igračima koji će saznati kada Tennect bude spreman u tvom gradu.",
    button: "Prijavi se za novosti",
  },
  footer: {
    tagline: "Pronađi idealnog protivnika.",
    contact: "Kontakt",
    privacy: "Privatnost",
    terms: "Uslovi",
  },
  metadata: {
    title: "Tennect — Pronađi tenisere i terene u blizini",
    description:
      "Pronađi tenisere u blizini, otkrij lokalne terene, organizuj mečeve, vodi rezultat i napreduj na rang-listi uz Tennect.",
    ogTitle: "Tennect — Tvoj sledeći teniski meč počinje ovde.",
    ogDescription:
      "Pronađi igrače i terene, zakaži mečeve i prati svoj teniski napredak u jednoj aplikaciji.",
    ogAlt: "Tennect — Tvoj sledeći teniski meč počinje ovde",
    keywords: [
      "pronađi tenisere",
      "teniseri u blizini",
      "teniski partner",
      "teniski tereni u blizini",
      "aplikacija za tenis",
      "teniski mečevi",
      "teniska zajednica",
      "praćenje teniskog rezultata",
    ],
  },
  schema: {
    description:
      "Aplikacija za tenisku zajednicu koja pomaže u pronalaženju igrača i terena, organizaciji mečeva, vođenju rezultata i praćenju rang-lista i vesti.",
    features: [
      "Pronađi tenisere u blizini",
      "Otkrij obližnje teniske terene",
      "Zakaži teniske mečeve i treninge",
      "Prati rezultat uživo i istoriju mečeva",
      "Uporedi statistiku i rang-liste",
      "Prati teniske vesti i objave zajednice",
    ],
  },
};
