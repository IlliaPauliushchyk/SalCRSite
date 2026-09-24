/** @typedef {typeof en} LocaleDict */

export const en = {
  nav: {
    home: 'Home',
    privacy: 'Privacy',
    contact: 'Contact',
    apps: 'Apps',
  },
  footer: {
    privacy: 'Privacy Policy',
    contact: 'Contact',
    play: 'Google Play',
    copyright: '© {year} {name}',
  },
  common: {
    getOnPlay: 'Google Play',
    learnMore: 'Learn more',
    backHome: 'Back to home',
    package: 'Package',
    platform: 'Platform',
    platformValue: 'Android (Google Play)',
    support: 'Support',
    fullPrivacy: 'Full privacy policy',
    emailLabel: 'Email',
  },
  hub: {
    brand: 'SalCR',
    headline: 'Mobile party games',
    tagline:
      'I publish offline party games for friends — a football spy game and a social-deduction mission.',
    appsHeading: 'Apps',
    footballSpyName: 'Football Spy',
    footballSpyOneLiner: 'Party spy game with a football twist — plus Football Dle',
    sabotageName: 'Sabotage',
    sabotageOneLiner: 'Deal the roles, complete the mission, find the saboteur',
  },
  spy: {
    name: 'Football Spy',
    nameLocal: 'Футбольный шпион',
    description:
      'Football Spy is a football-themed party spy game. Pass the phone, deal secret roles, and find the spies. No account required. Also includes Football Dle — a daily Wordle-style challenge: guess the footballer by comparing attributes loaded from Wikidata (internet needed for that mode).',
    featuresTitle: 'What the app does',
    features: [
      'Role dealing (spies / civilians) and round timer',
      'Built-in footballer and coach sets plus custom sets (customs stay on device only)',
      'Many UI languages',
      'Football Dle: three difficulty tiers (stars / known / deep), attribute comparison, one day/period per tier; optional extra round via rewarded ad (Android)',
      'Cross-promo of our other game, Sabotage → Google Play',
      'Play audience: as in the listing (not Designed for Families / not under 13)',
    ],
    adsTitle: 'Ads & monetization',
    ads: [
      'Ads: yes on Android — Yandex Mobile Ads / Yandex Advertising Network (not AdMob)',
      'Football Dle formats: feed (rules; attempt history), native (in the attempts list), rewarded (extra round per tier after watching)',
      'Also: in-app promo card for our game Sabotage (not Yandex)',
      'In-app purchases: none',
      'Advertising ID: used by the Yandex SDK for showing / measuring ads',
    ],
    dataTitle: 'Data & privacy',
    data: [
      'Local: settings, custom sets, language, Football Dle progress, Wikidata response cache',
      'Firebase Firestore: read-only built-in name lists (no writing of user custom sets)',
      'Firebase Analytics: anonymous usage events (custom set text is not sent)',
      'Wikidata: public player attributes for Football Dle',
      'Yandex Ads (Android): Advertising ID and technical SDK data',
      'We do not ourselves collect name, email, phone, photos, GPS location, contacts or payments',
      'Internet is needed for Firestore content, Analytics, Football Dle (Wikidata) and ads; basic spy with cached sets can work offline',
    ],
    supportText: 'Questions, ad complaints, privacy requests or store issues:',
  },
  sabotage: {
    name: 'Sabotage',
    nameLocal: 'Саботаж',
    description:
      'Sabotage is a social-deduction party game. The phone is the game master: it deals secret roles, runs the timer, and issues missions. Play offline with friends — no account required. Find the saboteur before the mission succeeds.',
    featuresTitle: 'What the app does',
    features: [
      'Role dealing (civilians / saboteurs) and round timer',
      'Discussion and background (evening) gameplay modes',
      'Mission themes plus custom sets (custom text stays on device only)',
      'Many UI languages',
      'Temporarily disable ads by watching a rewarded video (~1 hour)',
      'Play audience: 13–15, 16–17, 18+ (not Designed for Families)',
    ],
    adsTitle: 'Ads & monetization',
    ads: [
      'Ads: yes — Yandex Mobile Ads / Yandex Advertising Network (not AdMob)',
      'Formats: sticky banner, native, interstitial, rewarded',
      'In-app purchases: none',
      'Advertising ID: used by the Yandex SDK for ads measurement / personalization',
      'Ads can be muted temporarily via rewarded video (local timer)',
    ],
    dataTitle: 'Data & privacy',
    data: [
      'Local: settings, custom missions, language, ad-mute flags',
      'Firebase Analytics: usage events (custom mission text is not sent)',
      'Yandex Ads: Advertising ID and technical SDK data',
      'We do not ourselves collect name, email, phone, photos, location, contacts or payments',
      'No account required',
    ],
    supportText: 'Support, ad complaints or data requests:',
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: 24 September 2026',
    introTitle: '1. Operator',
    intro:
      'This policy describes how SalCR (“we”) handles information for the Android apps Football Spy (com.spyfootball) and Sabotage (com.sabotage). Contact: {email}.',
    appsTitle: '2. Apps covered',
    spyBlockTitle: 'Football Spy',
    spySummary:
      'Football-themed party spy game plus Football Dle (Wikidata attributes). Firebase Analytics and Firestore (read-only lists). On Android: Yandex Mobile Ads (feed / native / rewarded in Football Dle) and Advertising ID. Cross-promo of Sabotage is separate from Yandex. No IAP. Full policy:',
    sabBlockTitle: 'Sabotage',
    sabSummary:
      'Offline social-deduction party game. Firebase Analytics and Yandex Mobile Ads. Yandex may process Advertising ID and technical data for ads (banner, native, interstitial, rewarded). No IAP. Full policy:',
    collectTitle: '3. What is processed',
    collect: [
      'Local game settings and custom content on the device',
      'Firebase Analytics events (device/app metadata, screens, actions) without custom content text',
      'Football Spy: Firebase Firestore reads of built-in name lists; Wikidata public attributes for Football Dle',
      'Both apps (Android): Yandex Ads data including Advertising ID as required by the SDK',
    ],
    notCollectTitle: '4. What we do not collect ourselves',
    notCollect: [
      'Name, email, phone number',
      'Photos, video, audio',
      'GPS / precise location, contacts, payment data, social accounts',
    ],
    purposeTitle: '5. Purposes',
    purpose: [
      'Run the games and keep local preferences',
      'Load Football Dle content (Wikidata) and built-in lists (Firestore)',
      'Improve the apps via anonymous analytics',
      'Show and measure ads via Yandex (Android)',
      'Cross-promote our own apps (not an ad network)',
      'Comply with store and legal requirements',
    ],
    thirdTitle: '6. Third parties',
    third: [
      'Google Firebase (Analytics; Football Spy also Firestore read) — both apps',
      'Yandex Mobile Ads — Football Spy and Sabotage (Android)',
      'Wikimedia / Wikidata — Football Spy only (Football Dle)',
    ],
    rightsTitle: '7. Your rights',
    rights:
      'You may ask questions, request information, or object to processing by emailing {email}. Uninstalling the app removes local data; aggregated analytics cannot always be deleted per device. SDK operators (Google, Yandex) and Wikidata process data under their own policies.',
    childrenTitle: '8. Children',
    children:
      'The apps are not Designed for Families and are not directed at children under 13.',
    changesTitle: '9. Changes',
    changes:
      'We may update this page. The “Last updated” date will change when we do.',
    contactTitle: '10. Contact',
    contact: 'Privacy questions: {email}',
  },
  contact: {
    title: 'Contact / Support',
    body: 'For support, privacy requests, ad complaints or store questions, email the address below. This is the same contact used for Google Play.',
    cta: 'Send email',
  },
};

export default en;
