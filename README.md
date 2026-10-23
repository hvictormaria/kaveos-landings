# Kaveos landing tracks

Static landings, no build step. `shared.css` + `shared.js` hold all five tracks; each folder is one page that boots its track.

| Path | Track | Копи-ключ в shared.js |
|---|---|---|
| /play/ | Игра | `C.game` |
| /gut/ | Интуиция | `C.intuition` |
| /trade/ | Трейдер | `C.trader` |
| /learn/ | Учебник | `C.learn` |
| /kocok/ | Kocok | `C.shake` |

- Language: `?lang=en|id`, otherwise browser language (`id-*` → ID). The EN/ID button in the header switches and rewrites the URL.
- Brand: `BRAND` map at the top of `shared.js`. `trade` and `learn` are unbranded: no wordmark in header/footer/share cards, legal line from `UNBRANDED`, own sign-up/help URLs under `tracks` in `config.js` (fill the REPLACE-ME values before traffic).
- Sign-up / help URLs: `config.js`. Every CTA appends `track`, `lang` and all `utm_*` from the landing URL.
- Analytics: events go to `window.dataLayer` (GTM) and to `posthog.capture` when PostHog is on the page; `?debug=1` logs them to the console. Names match the ТЗ.
- Copy: all strings live in the `C` object at the top of `shared.js` (EN and ID side by side). Vote shares and counters are placeholders until the real endpoint is wired.
- Hosting: GitHub Pages from `main`, root. Custom domain via `CNAME` file + DNS.
