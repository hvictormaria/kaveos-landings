# Kaveos landing tracks

Static landings, no build step. `shared.css` + `shared.js` hold all five tracks; each folder is one page that boots its track.

| Path | Track | Копи-ключ в shared.js |
|---|---|---|
| /play/ | Игра | `C.game` |
| /gut/ | Интуиция | `C.intuition` |
| /trade/ | Трейдер | `C.trader` |
| /learn/ | Учебник | `C.learn` |
| /kocok/ | Kocok | `C.shake` |

- Geo routes: `/id/`, `/my/`, `/ph/`, `/br/`, `/mx/`, `/ng/` + track (`/my/trade/`). Root `/trade/` etc. = international EN with USD. The `GEO` table at the top of `shared.js` holds language(s), currency ladder and payment methods per geo; amounts in copy are tokens (`{MIN_DEP}`, `{AMT}`, `{AMT_RET}` …) filled per geo. Figures are a rounded $10 / $1 / $18 ladder — the cashier owns the real values.
- Languages: EN, ID, MS, TL (Taglish), PT-BR, ES-MX, plus an `en_ng` pack with Nigerian examples. `?lang=` picks within the geo's languages; the header button cycles them. Translations were machine-drafted and need a native read before traffic.
- Brand: `BRAND` map at the top of `shared.js`. `trade` and `learn` are unbranded: no wordmark in header/footer/share cards, legal line from `UNBRANDED`, own sign-up/help URLs under `tracks` in `config.js` (fill the REPLACE-ME values before traffic).
- Sign-up / help URLs: `config.js`. Every CTA appends `track`, `lang` and all `utm_*` from the landing URL.
- Tracking: `tags.js` loads before `shared.js` and reads `tracking` from `config.js` — separate IDs for the branded group (play/gut/kocok) and the unbranded one (trade/learn). Prefer `gtm` (one container; GA4, Google Ads and Meta Pixel inside it, triggered by dataLayer events). `ga4`/`ads` load gtag directly and mirror every landing event as a GA event; `meta` loads the Pixel directly, maps `landing_cta_clicked` → Lead and quiz/stick/demo completions → custom events. `?debug=1` logs events to the console.
- Copy: all strings live in the `C` object at the top of `shared.js` (EN and ID side by side). Vote shares and counters are placeholders until the real endpoint is wired.
- Hosting: GitHub Pages from `main`, root. Custom domain via `CNAME` file + DNS.
