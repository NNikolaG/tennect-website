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
    profilePreview: "Prikaz Tennect profila i dostupnosti",
    features: "Tennect funkcije",
    seoUses: "Načini korišćenja Tennect aplikacije",
    legalNav: "Pravni dokumenti i kontakt",
    backToTop: "Nazad na vrh",
    closeFeature: "Zatvori detalje funkcije",
  },
  nav: {
    features: "Funkcije",
    howItWorks: "Kako funkcioniše",
    insideApp: "U aplikaciji",
    faq: "Česta pitanja",
    download: "Preuzmi za iOS",
    menu: "Meni",
  },
  hero: {
    eyebrow: "Tvoja teniska zajednica",
    title: ["Sledeći", "teniski meč", "počinje ovde."],
    copy:
      "Pronađi igrače svog nivoa, otkrij terene u blizini i organizuj svaki meč na jednom mestu.",
    download: "Preuzmi",
    explore: "Pogledaj funkcije",
    androidSoon: "Android verzija uskoro",
    appStoreBadgeAlt: "Preuzmi Tennect u App Store-u",
    notes: ["Za svaki nivo", "Dostupno na 23 jezika", "Jedna povezana igra"],
    imageAlt:
      "Tennect profil igrača sa rasporedom dostupnosti i omiljenim podlogama",
  },
  intro: {
    kicker: "Tenis, povezan.",
    title: "Sve što ti treba da izađeš na teren.",
    copy:
      "Tennect spaja sve delove rekreativnog tenisa u jedno jasno iskustvo—od pronalaženja partnera za igru do potvrde konačnog rezultata.",
  },
  featureDialog: {
    kicker: "Tennect funkcija",
  },
  features: [
    {
      eyebrow: "Pretraga igrača",
      title: "Pronađi tenisere u blizini",
      copy:
        "Pretražuj po gradu, nivou igre, omiljenoj podlozi i dostupnosti. Pronađi odgovarajućeg partnera bez beskrajnih grupnih poruka.",
      alt: "Tennect pretraga lokalnih tenisera i omiljenih podloga",
      action: "Istraži pretragu igrača",
      details: [
        "Filtriraj igrače u blizini po gradu, udaljenosti, nivou, omiljenoj podlozi i dostupnosti.",
        "Pregledaj teniske profile i uporedi važne detalje pre slanja zahteva.",
        "Poveži se sa odgovarajućim igračem i brzo pređi od pretrage do pravog meča.",
      ],
    },
    {
      eyebrow: "Pronalaženje terena",
      title: "Otkrij teniske terene u blizini",
      copy:
        "Pogledaj terene na mapi, ocene, radno vreme i kontakt podatke, pa izaberi gde će se odigrati sledeći meč.",
      alt: "Tennect mapa sa teniskim terenima u blizini",
      action: "Istraži pronalaženje terena",
      details: [
        "Pregledaj terene u blizini kroz jasnu listu ili ih pronađi direktno na mapi.",
        "Proveri ocene, radno vreme, adresu i kontakt podatke na jednom mestu.",
        "Sačuvaj omiljene terene i otvori njihovu lokaciju kada je vreme za igru.",
      ],
    },
    {
      eyebrow: "Dan meča",
      title: "Zakaži, igraj i beleži rezultat",
      copy:
        "Pošalji zahtev za meč ili trening, potvrdi vreme i teren, vodi rezultat i izgradi kompletnu istoriju svoje igre.",
      alt: "Prikaz potvrđenog teniskog meča u Tennect aplikaciji",
      action: "Istraži organizaciju meča",
      details: [
        "Pošalji zahtev za meč ili trening sa predlogom vremena, terena i formata.",
        "Jasne potvrde i detalji meča pomažu da oba igrača imaju iste informacije.",
        "Zabeleži rezultat, potvrdi ishod i gradi statistiku i istoriju svojih mečeva.",
      ],
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
          "Pretraži igrače u blizini, uporedi nivo igre, dostupnost i omiljene podloge, pa izaberi lokalni teren.",
      },
      {
        title: "Igraj, beleži rezultat i napreduj",
        copy:
          "Potvrdi meč, zabeleži rezultat i prati napredak iz meča u meč.",
      },
    ],
  },
  gallery: {
    kicker: "U aplikaciji Tennect",
    title: "Sve za tvoj tenis u jednoj aplikaciji.",
    swipe: "Prevuci i pogledaj funkcije aplikacije →",
    items: [
      {
        label: "Podesi dostupnost",
        alt: "Tennect kalendar dostupnosti i omiljene teniske podloge",
        action: "Istraži dostupnost",
        copy:
          "Pokaži drugim igračima kada možeš da igraš i koje podloge ti najviše odgovaraju.",
        details: [
          "Izaberi dane i termine kada si obično dostupan za tenis.",
          "Dodaj omiljene podloge: šljaku, travu ili tvrdi teren.",
          "Promeni dostupnost kad god se promeni tvoja nedeljna rutina.",
        ],
      },
      {
        label: "Organizuj mečeve",
        alt: "Predstojeći potvrđeni teniski mečevi u Tennect aplikaciji",
        action: "Istraži organizaciju mečeva",
        copy:
          "Drži svaki zahtev, potvrđeni meč i važan detalj meča na jednom mestu.",
        details: [
          "Odmah vidi protivnika, datum, vreme, teren i status meča.",
          "Odgovori na nove zahteve i prati predstojeće potvrđene mečeve.",
          "Vrati se završenim mečevima kada želiš da pregledaš svoju istoriju.",
        ],
      },
      {
        label: "Pronađi terene",
        alt: "Rezultati pretrage teniskih terena u Tennect aplikaciji",
        action: "Istraži pretragu terena",
        copy:
          "Pronađi pravi teren u blizini pomoću rezultata prilagođenih stvarnim odlukama igrača.",
        details: [
          "Pretraži terene u blizini i uporedi korisne informacije u jasnoj listi.",
          "Proveri ocene, radno vreme, kontakt podatke i lokaciju.",
          "Sačuvaj favorite kako bi proverene terene ponovo pronašao bez muke.",
        ],
      },
      {
        label: "Napreduj na rang-listi",
        alt: "Globalna rang-lista tenisera u Tennect aplikaciji",
        action: "Istraži rang-liste",
        copy:
          "Pogledaj svoju poziciju i prati napredak na gradskoj, državnoj i globalnoj rang-listi.",
        details: [
          "Prebacuj se između gradske, državne i globalne rang-liste.",
          "Prati trenutnu poziciju, nivo i napredak na rang-listi.",
          "Potvrđeni rezultati mečeva grade jasniju sliku tvog napretka.",
        ],
      },
      {
        label: "Prati teniske vesti",
        alt: "Teniske vesti i objave zajednice u Tennect aplikaciji",
        action: "Istraži teniske vesti",
        copy:
          "Ostani povezan sa tenisom kroz relevantne vesti i aktivnosti Tennect zajednice.",
        details: [
          "Čitaj teniske priče bez napuštanja aplikacije koju koristiš za igru.",
          "Prati novosti o igračima, mečevima i široj teniskoj zajednici.",
          "Lako pređi sa čitanja na povezivanje i organizaciju sledećeg meča.",
        ],
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
      "Beleži rezultate",
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
        question: "Mogu li u aplikaciji Tennect da pronađem teniske terene?",
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
      {
        question: "Da li je Tennect besplatan?",
        answer:
          "Da. Tennect je besplatan za preuzimanje i omogućava kreiranje profila, pretragu igrača i pronalaženje terena. Tennect Pro otključava slanje zahteva za mečeve i treninge, rang-liste i naprednu statistiku; cena i period pretplate prikazani su u aplikaciji pre kupovine.",
      },
      {
        question: "Da li Tennect rezerviše teren?",
        answer:
          "Ne direktno. Tennect ti pomaže da pronađeš teren i proveriš lokaciju, ocene, radno vreme i kontakt podatke. Rezervaciju trenutno obavljaš direktno sa klubom ili upravljačem terena.",
      },
      {
        question: "Kako se određuje nivo igrača?",
        answer:
          "Početni nivo određuje se kratkom samoprocenom tokom registracije. Nakon toga se automatski menja kroz evidentirane mečeve i treninge. Što više igraš i beležiš aktivnosti, sistem brže može da prepozna i prikaže tvoj napredak.",
      },
      {
        question: "Na kojim uređajima je aplikacija dostupna?",
        answer:
          "Tennect je trenutno dostupan za iPhone i zahteva iOS 18.6 ili noviji. Android verzija je u pripremi; prijavi se za obaveštenje da saznaš kada bude objavljena.",
      },
    ],
  },
  finalCta: {
    kicker: "Pronađi igrača za meč ili trening",
    title: "Spreman za sledeći meč?",
    copy:
      "Preuzmi Tennect, pronađi igrače svog nivoa i organizuj sledeći meč.",
    button: "Preuzmi Tennect za iOS",
  },
  footer: {
    tagline: "Pronađi pravog partnera za igru.",
    contact: "Kontakt",
    privacy: "Privatnost",
    terms: "Uslovi",
  },
  metadata: {
    title: "Tennect — Pronađi tenisere i terene u blizini",
    description:
      "Pronađi tenisere svog nivoa, otkrij terene u blizini, organizuj mečeve i prati rezultate uz Tennect aplikaciju.",
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
