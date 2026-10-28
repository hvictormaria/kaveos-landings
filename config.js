// Edit without touching the pages. Each landing passes ?track=<slug>&lang=<en|id>&utm_* to these.
// Branded tracks (play, gut, kocok) use the top-level URLs; the unbranded trading tracks (trade, learn) use their own.
window.KAVEOS_CONFIG = {
  // Tracking IDs. Leave empty to disable. `gtm` is preferred: one container, Meta/Ads/GA4 configured inside GTM.
  // Landing events already go to dataLayer: landing_viewed, landing_cta_clicked {position}, landing_help_clicked,
  // landing_money_block_viewed, quiz_answered, quiz_completed, demo_trade_placed, demo_trade_closed, lesson_started,
  // stick_shaken, stick_picked, stick_answered, stick_share_clicked — all with track, lang, geo where relevant.
  tracking: {
    branded:   { gtm: '', ga4: 'G-E32PB7P8JG', ads: '', meta: '1619488042599515', posthog: 'phc_pBvYtDJjwxU49cdWjGTKxmTQgM2wuKbkdBd7eoG2X3VD' },   // play / gut / kocok on go.kaveos.com — direct tags, same GA4 + Meta dataset as kaveos.com
    unbranded: { gtm: '', ga4: '', ads: '', meta: '1476857574314634', posthog: 'phc_pBvYtDJjwxU49cdWjGTKxmTQgM2wuKbkdBd7eoG2X3VD' },   // trade / learn on Vercel — own Meta dataset
    posthogHost: 'https://eu.i.posthog.com'   // PostHog: same public project key as the kaveos.com front
  },
  // Footer legal line. Empty = the line is not shown.
  legal: { branded: '', unbranded: '', company: '' },  // company: not shown ('Who we are' block removed from /trade on 2026-10-28)
  // /auth with #SignUp opens the Register form; ?email= prefills the field (verified on prod 2026-10-23).
  signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets#SignUp',
  // Help button: hidden while empty. Use a real page or 'mailto:support@…' (subject gets track and geo).
  help:   '',
  tracks: {
    // Unbranded trading tracks: straight to registration (per Maria, 2026-10-23).
    // room=classic pins the current trade room at sign-up (HVC-1768). Do not set room=events before that front is on prod.
    // Note: /markets is the public feed and does not force sign-in; /auth is the actual sign-in route.
    trader: { signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets&room=classic#SignUp', help: '' },
    learn:  { signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets&room=classic#SignUp', help: '' }
  }
};
