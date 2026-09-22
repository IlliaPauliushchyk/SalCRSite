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
    footballSpyOneLiner: 'Party spy game with a football twist',
    sabotageName: 'Sabotage',
    sabotageOneLiner: 'Deal the roles, complete the mission, find the saboteur',
  },
  spy: {
    name: 'Football Spy',
    nameLocal: 'Футбольный шпион',
    description:
      'A party spy game for friends with a football theme. Play classic spy rounds and Football Dle — guess the footballer from attributes. Offline / local play, no account required.',
    featuresTitle: 'Features',
    features: [
      'Role dealing, round timer, language packs and custom word sets',
      'Classic spy mode and Football Dle',
      'Audience: 13+ (not Designed for Families)',
    ],
    adsTitle: 'Ads & monetization',
    ads: [
      'No AdMob or third-party ad networks',
      'Play Console “Contains ads” refers to cross-promo of our other game, Sabotage',
      'Advertising ID is not used for ads',
      'No in-app purchases',
    ],
    dataTitle: 'Data & privacy',
    data: [
      'Local settings, languages and custom sets stay on the device',
      'Firebase Analytics for anonymous usage events (custom set text is not sent)',
      'We do not collect name, email, phone, photos, precise location, contacts or payments',
    ],
    supportText: 'Questions, privacy requests or store issues:',
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
    lastUpdated: 'Last updated: 22 September 2026',
    introTitle: '1. Operator',
    intro:
      'This policy describes how SalCR (“we”) handles information for the Android apps Football Spy (com.spyfootball) and Sabotage (com.sabotage). Contact: {email}.',
    appsTitle: '2. Apps covered',
    spyBlockTitle: 'Football Spy',
    spySummary:
      'Offline party game. Firebase Analytics may collect anonymous usage data. No AdMob. “Contains ads” in Play refers to cross-promo of Sabotage. Advertising ID is not used for advertising networks. Full policy:',
    sabBlockTitle: 'Sabotage',
    sabSummary:
      'Offline social-deduction party game. Firebase Analytics and Yandex Mobile Ads. Yandex may process Advertising ID and technical data for ads (banner, native, interstitial, rewarded). No IAP. Full policy:',
    collectTitle: '3. What is processed',
    collect: [
      'Local game settings and custom content on the device',
      'Firebase Analytics events (device/app metadata, screens, actions) without custom content text',
      'For Sabotage only: Yandex Ads data including Advertising ID as required by the SDK',
    ],
    notCollectTitle: '4. What we do not collect ourselves',
    notCollect: [
      'Name, email, phone number',
      'Photos, video, audio',
      'Precise location, contacts, payment data, social accounts',
    ],
    purposeTitle: '5. Purposes',
    purpose: [
      'Run the games and keep local preferences',
      'Improve the apps via anonymous analytics',
      'Show and measure ads in Sabotage (Yandex)',
      'Comply with store and legal requirements',
    ],
    thirdTitle: '6. Third parties',
    third: [
      'Google Firebase (Analytics) — both apps',
      'Yandex Mobile Ads — Sabotage only',
    ],
    rightsTitle: '7. Your rights',
    rights:
      'You may ask questions, request information, or object to processing by emailing {email}. Uninstalling the app removes local data; aggregated analytics cannot always be deleted per device. SDK operators (Google, Yandex) process data under their own policies.',
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
