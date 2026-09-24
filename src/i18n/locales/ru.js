/** @type {typeof import('./en.js').en} */
const ru = {
  nav: {
    home: 'Главная',
    privacy: 'Конфиденциальность',
    contact: 'Контакты',
    apps: 'Приложения',
  },
  footer: {
    privacy: 'Политика конфиденциальности',
    contact: 'Контакты',
    play: 'Google Play',
    copyright: '© {year} {name}',
  },
  common: {
    getOnPlay: 'Google Play',
    learnMore: 'Подробнее',
    backHome: 'На главную',
    package: 'Package',
    platform: 'Платформа',
    platformValue: 'Android (Google Play)',
    support: 'Поддержка',
    fullPrivacy: 'Полная политика конфиденциальности',
    emailLabel: 'Email',
  },
  hub: {
    brand: 'SalCR',
    headline: 'Мобильные party-игры',
    tagline:
      'Публикую офлайн party-игры для компании — футбольный «шпион» и социальную дедукцию.',
    appsHeading: 'Приложения',
    footballSpyName: 'Футбольный шпион',
    footballSpyOneLiner: 'Party-игра «шпион» с футбольным уклоном — плюс Football Dle',
    sabotageName: 'Саботаж',
    sabotageOneLiner: 'Раздайте роли, выполните миссию, найдите саботажника',
  },
  spy: {
    name: 'Football Spy',
    nameLocal: 'Футбольный шпион',
    description:
      '«Футбольный шпион» — party-игра «шпион» в футбольной тематике. Передаёте телефон, раздаются роли — ищите шпионов. Аккаунт не нужен. Есть режим Football Dle: ежедневная угадайка футболиста по атрибутам (данные из Wikidata; для этого режима нужен интернет).',
    featuresTitle: 'Что делает приложение',
    features: [
      'Раздача ролей (шпионы / мирные), таймер раунда',
      'Встроенные наборы футболистов и тренеров + кастомные наборы (кастомы только на устройстве)',
      'Много языков интерфейса',
      'Режим Football Dle: три тира сложности (stars / known / deep), сравнение атрибутов, один «день» / период на тир; опционально ещё один раунд за rewarded-рекламу (Android)',
      'Кросс-промо другой нашей игры («Саботаж») → Google Play',
      'Целевая аудитория в Play: как в листинге (не Designed for Families / не до 13)',
    ],
    adsTitle: 'Реклама и монетизация',
    ads: [
      'Реклама: да на Android — Yandex Mobile Ads / РСЯ (не AdMob)',
      'Форматы в Football Dle: feed (правила; история попыток), native (в списке попыток), rewarded (доп. раунд на тир после просмотра)',
      'Дополнительно: карточка-промо своей игры «Саботаж» (не РСЯ)',
      'Покупки (IAP): нет',
      'Advertising ID: используется SDK Yandex для показа / учёта рекламы',
    ],
    dataTitle: 'Данные и конфиденциальность',
    data: [
      'Локально: настройки, кастомные наборы, язык, прогресс Football Dle, кэш ответов Wikidata',
      'Firebase Firestore: чтение встроенных списков имён (не запись пользовательских наборов)',
      'Firebase Analytics: анонимные события использования (без текста кастомных наборов)',
      'Wikidata: запросы публичных атрибутов игроков для Football Dle',
      'Yandex Ads (Android): Advertising ID + техданные SDK',
      'Сами не собираем: имя, email, телефон, фото, GPS-геолокацию, контакты, платежи',
      'Интернет нужен для Firestore, Analytics, Football Dle (Wikidata) и рекламы; базовый «шпион» с закэшированными наборами может работать офлайн',
    ],
    supportText: 'Вопросы, жалобы на рекламу, запросы по данным или проблемы в магазине:',
  },
  sabotage: {
    name: 'Sabotage',
    nameLocal: 'Саботаж',
    description:
      '«Саботаж» — party-игра социальной дедукции. Телефон — ведущий: раздаёт роли, запускает таймер и выдаёт миссии. Игра офлайн, без аккаунта. Найдите саботажника, пока миссия не выполнена.',
    featuresTitle: 'Что делает приложение',
    features: [
      'Раздача ролей (мирные / саботажники) и таймер раунда',
      'Режимы: обсуждение и фоновый (вечерний) геймплей',
      'Темы миссий и свои наборы (кастомный текст только на устройстве)',
      'Много языков интерфейса',
      'Временное отключение рекламы за rewarded-ролик (~1 час)',
      'Аудитория в Play: 13–15, 16–17, 18+ (не Designed for Families)',
    ],
    adsTitle: 'Реклама и монетизация',
    ads: [
      'Реклама: да — Yandex Mobile Ads / РСЯ (не AdMob)',
      'Форматы: sticky banner, native, interstitial, rewarded',
      'Покупки (IAP): нет',
      'Advertising ID: использует SDK Yandex (учёт / персонализация рекламы)',
      'Рекламу можно временно выключить через rewarded (локальный таймер)',
    ],
    dataTitle: 'Данные и конфиденциальность',
    data: [
      'Локально: настройки, кастомные миссии, язык, флаги mute рекламы',
      'Firebase Analytics: события использования (без текста кастомных миссий)',
      'Yandex Ads: Advertising ID и техданные SDK',
      'Сами не собираем: имя, email, телефон, фото, геолокацию, контакты, платежи',
      'Аккаунт не требуется',
    ],
    supportText: 'Поддержка, жалобы на рекламу или запросы по данным:',
  },
  privacy: {
    title: 'Политика конфиденциальности',
    lastUpdated: 'Последнее обновление: 24 сентября 2026 г.',
    introTitle: '1. Оператор',
    intro:
      'Эта политика описывает, как SalCR («мы») обрабатывает информацию в Android-приложениях Football Spy (com.spyfootball) и Sabotage (com.sabotage). Контакт: {email}.',
    appsTitle: '2. Приложения',
    spyBlockTitle: 'Football Spy / Футбольный шпион',
    spySummary:
      'Party-игра «шпион» плюс Football Dle (атрибуты Wikidata). Firebase Analytics и Firestore (чтение списков). На Android: Yandex Mobile Ads (feed / native / rewarded в Football Dle) и Advertising ID. Кросс-промо «Саботажа» отдельно от РСЯ. Без IAP. Полная политика:',
    sabBlockTitle: 'Sabotage / Саботаж',
    sabSummary:
      'Офлайн party-игра социальной дедукции. Firebase Analytics и Yandex Mobile Ads. Yandex может обрабатывать Advertising ID и техданные для рекламы (banner, native, interstitial, rewarded). Без IAP. Полная политика:',
    collectTitle: '3. Что обрабатывается',
    collect: [
      'Локальные настройки и пользовательский контент на устройстве',
      'События Firebase Analytics (метаданные устройства/приложения, экраны, действия) без текста кастомного контента',
      'Football Spy: чтение встроенных списков в Firebase Firestore; публичные атрибуты Wikidata для Football Dle',
      'Оба приложения (Android): данные Yandex Ads, включая Advertising ID, в объёме SDK',
    ],
    notCollectTitle: '4. Что мы сами не собираем',
    notCollect: [
      'Имя, email, телефон',
      'Фото, видео, аудио',
      'GPS / точную геолокацию, контакты, платежные данные, соцсети',
    ],
    purposeTitle: '5. Цели',
    purpose: [
      'Работа игр и сохранение локальных настроек',
      'Контент Football Dle (Wikidata) и встроенные списки (Firestore)',
      'Улучшение приложений через анонимную аналитику',
      'Показ и измерение рекламы через Yandex (Android)',
      'Кросс-промо своих приложений (не рекламная сеть)',
      'Соблюдение требований магазинов и закона',
    ],
    thirdTitle: '6. Третьи стороны',
    third: [
      'Google Firebase (Analytics; у Football Spy ещё Firestore на чтение) — оба приложения',
      'Yandex Mobile Ads — Football Spy и Sabotage (Android)',
      'Wikimedia / Wikidata — только Football Spy (Football Dle)',
    ],
    rightsTitle: '7. Ваши права',
    rights:
      'Вы можете задать вопросы, запросить информацию или возразить против обработки, написав на {email}. Удаление приложения удаляет локальные данные; агрегированную аналитику не всегда можно удалить по одному устройству. Операторы SDK (Google, Yandex) и Wikidata обрабатывают данные по своим политикам.',
    childrenTitle: '8. Дети',
    children:
      'Приложения не Designed for Families и не предназначены для детей младше 13 лет.',
    changesTitle: '9. Изменения',
    changes:
      'Мы можем обновлять эту страницу. Дата «Последнее обновление» изменится при существенных правках.',
    contactTitle: '10. Контакты',
    contact: 'Вопросы по конфиденциальности: {email}',
  },
  contact: {
    title: 'Контакты / Поддержка',
    body: 'По вопросам поддержки, конфиденциальности, рекламы или магазина пишите на адрес ниже. Это тот же контакт, что в Google Play.',
    cta: 'Написать email',
  },
};

export default ru;
