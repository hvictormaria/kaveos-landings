// Edit without touching the pages. Each landing passes ?track=<slug>&lang=<en|id>&utm_* to these.
// Branded tracks (play, gut, kocok) use the top-level URLs; the unbranded trading tracks (trade, learn) use their own.
window.KAVEOS_CONFIG = {
  // Footer legal line. Empty = the line is not shown.
  legal: { branded: '', unbranded: '', company: '' },  // company shows in 'Who we are' on /trade
  signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets',
  help:   'https://kaveos.com/information',
  tracks: {
    // Unbranded trading tracks: straight to registration (per Maria, 2026-10-23).
    // Note: /markets is the public feed and does not force sign-in; /auth is the actual sign-in route.
    trader: { signup: 'https://kaveos.com/markets?continueByUrl=%2Fmarkets', help: 'https://kaveos.com/information' },
    learn:  { signup: 'https://kaveos.com/markets?continueByUrl=%2Fmarkets', help: 'https://kaveos.com/information' }
  }
};
