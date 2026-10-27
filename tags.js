// Tracking loader. Runs before shared.js. IDs live in config.js under `tracking`.
// Branded tracks (play/gut/kocok on *.kaveos.com) and unbranded ones (trade/learn on the separate domain) get separate containers.
(function(){
  var cfg=(window.KAVEOS_CONFIG&&KAVEOS_CONFIG.tracking)||{};
  var track=(document.currentScript&&document.currentScript.getAttribute('data-track'))||(document.body&&document.body.getAttribute('data-track'))||'';
  var group=(track==='trader'||track==='learn')?'unbranded':'branded';
  var ids=cfg[group]||{};
  window.dataLayer=window.dataLayer||[];
  // GTM: one container carries GA4, Google Ads and Meta Pixel; events arrive via dataLayer (landing_viewed, landing_cta_clicked, ...)
  if(ids.gtm){
    window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(ids.gtm); document.head.appendChild(s);
  }
  // Direct Google tag (GA4 measurement id G-… and/or Google Ads AW-…) when GTM is not used
  var direct=[ids.ga4,ids.ads].filter(Boolean);
  if(direct.length){
    window.gtag=window.gtag||function(){ window.dataLayer.push(arguments); };
    gtag('js',new Date());
    var g=document.createElement('script'); g.async=true; g.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(direct[0]); document.head.appendChild(g);
    direct.forEach(function(id){ gtag('config',id,{send_page_view:true}); });
    // mirror landing events into gtag as custom events
    var origPush=window.dataLayer.push;
    window.dataLayer.push=function(){ var a=arguments[0]; var r=origPush.apply(window.dataLayer,arguments); try{ if(a&&typeof a==='object'&&a.event&&!/^gtm\./.test(a.event)&&!(a instanceof Arguments)){ var p={}; for(var k in a) if(k!=='event') p[k]=a[k]; gtag('event',a.event,p); } }catch(e){} return r; };
  }
  // PostHog (same project as kaveos.com). Landing events from shared.js go here via posthog.capture.
  // On *.kaveos.com the cookie is shared across subdomains, so a go.kaveos.com visitor keeps the same distinct_id on kaveos.com
  // and the landing visit joins the sign-up and deposit in one person. shorttrade.app is another domain: joined by utm/track only.
  if(ids.posthog){
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister identify alias set_config reset get_distinct_id getFeatureFlag isFeatureEnabled onFeatureFlags opt_out_capturing opt_in_capturing".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init(ids.posthog,{ api_host: cfg.posthogHost||'https://eu.i.posthog.com', person_profiles:'identified_only', cross_subdomain_cookie:true, capture_pageview:true, capture_pageleave:true, autocapture:false });
    var q=new URLSearchParams(location.search), geo=(location.pathname.split('/')[1]||'');
    posthog.register({ landing_track: track, landing_group: group, landing_geo: /^(id|my|ph|br|mx|ng)$/.test(geo)?geo:'intl', landing_lang: q.get('lang')||'' });
    posthog.register_once({ landing_first_track: track, landing_first_url: location.href });
  }
  // Meta Pixel without GTM
  if(ids.meta){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',ids.meta); fbq('track','PageView');
    var op=window.dataLayer.push; window.dataLayer.push=function(){ var a=arguments[0]; var r=op.apply(window.dataLayer,arguments); try{ if(a&&a.event==='landing_cta_clicked') fbq('track','Lead',{track:a.track,position:a.position}); if(a&&(a.event==='quiz_completed'||a.event==='stick_answered'||a.event==='demo_trade_closed')) fbq('trackCustom',a.event,a); }catch(e){} return r; };
  }
})();
