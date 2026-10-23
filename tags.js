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
  // Meta Pixel without GTM
  if(ids.meta){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',ids.meta); fbq('track','PageView');
    var op=window.dataLayer.push; window.dataLayer.push=function(){ var a=arguments[0]; var r=op.apply(window.dataLayer,arguments); try{ if(a&&a.event==='landing_cta_clicked') fbq('track','Lead',{track:a.track,position:a.position}); if(a&&(a.event==='quiz_completed'||a.event==='stick_answered'||a.event==='demo_trade_closed')) fbq('trackCustom',a.event,a); }catch(e){} return r; };
  }
})();
