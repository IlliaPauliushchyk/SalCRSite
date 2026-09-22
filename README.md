# SalCR — Developer website

Official developer hub for Google Play: Football Spy (`com.spyfootball`) and Sabotage (`com.sabotage`).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` — developer hub
- `/apps/football-spy`
- `/apps/sabotage`
- `/privacy`
- `/contact`
- `/app-ads.txt` — authorized sellers for Yandex Ads (must be at site root)

Domain is a placeholder until deploy (`https://yourdomain.com` in config comments). Deploy as a SPA (see `vercel.json`).

### app-ads.txt (Yandex / Play)

1. Deploy the site over HTTPS.
2. In Google Play Console, set the developer website to that exact domain (so crawlers look for `https://yourdomain.com/app-ads.txt`).
3. After Play shows the website URL, Yandex rechecks within about a day.