// Edit without touching the pages. Each landing passes ?track=<slug>&lang=<en|id>&utm_* to these.
// Branded tracks (play, gut, kocok) use the top-level URLs; the unbranded trading tracks (trade, learn) use their own.
window.KAVEOS_CONFIG = {
  // Tracking IDs. Leave empty to disable. `gtm` is preferred: one container, Meta/Ads/GA4 configured inside GTM.
  // Landing events already go to dataLayer: landing_viewed, landing_cta_clicked {position}, landing_help_clicked,
  // landing_money_block_viewed, quiz_answered, quiz_completed, demo_trade_placed, demo_trade_closed, lesson_started,
  // stick_shaken, stick_picked, stick_answered, stick_share_clicked — all with track, lang, geo where relevant.
  tracking: {
    branded:   { gtm: '', ga4: '', ads: '', meta: '1619488042599515' },   // play / gut / kocok on *.kaveos.com (Meta dataset from kaveos.com)
    unbranded: { gtm: '', ga4: '', ads: '', meta: '' }    // trade / learn on the separate domain
  },
  // Footer legal line. Empty = the line is not shown.
  legal: { branded: '', unbranded: '', company: '' },  // company shows in 'Who we are' on /trade
  // /auth with #SignUp opens the Register form; ?email= prefills the field (verified on prod 2026-10-23).
  signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets#SignUp',
  help:   'https://kaveos.com/information',
  tracks: {
    // Unbranded trading tracks: straight to registration (per Maria, 2026-10-23).
    // Note: /markets is the public feed and does not force sign-in; /auth is the actual sign-in route.
    trader: { signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets#SignUp', help: 'https://kaveos.com/information' },
    learn:  { signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets#SignUp', help: 'https://kaveos.com/information' }
  }
};
