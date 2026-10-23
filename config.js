// Edit without touching the pages. Each landing passes ?track=<slug>&lang=<en|id>&utm_* to these.
// Branded tracks (play, gut, kocok) use the top-level URLs; the unbranded trading tracks (trade, learn) use their own.
window.KAVEOS_CONFIG = {
  signup: 'https://kaveos.com/auth?continueByUrl=%2Fmarkets',
  help:   'https://kaveos.com/information',
  tracks: {
    trader: { signup: 'https://REPLACE-ME.example/auth', help: 'https://REPLACE-ME.example/support' },
    learn:  { signup: 'https://REPLACE-ME.example/auth', help: 'https://REPLACE-ME.example/support' }
  }
};
