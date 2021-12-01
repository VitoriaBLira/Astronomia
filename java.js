  /* Function to detect opted out users */
  function __gaTrackerIsOptedOut() {
    return document.cookie.indexOf(disableStr + '=true') > -1;
  }

  /* Disable tracking if the opt-out cookie exists. */
  if ( __gaTrackerIsOptedOut() ) {
    window[disableStr] = true;
  }

  /* Opt-out function */
  function __gaTrackerOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
  }

  if ( 'undefined' === typeof gaOptout ) {
    function gaOptout() {
      __gaTrackerOptout();
    }
  }
  
  if ( em_track_user ) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','__gaTracker');

window.ga = __gaTracker;		__gaTracker('create', 'UA-151886698-1', 'auto');
    __gaTracker('set', 'forceSSL', true);
    __gaTracker('send','pageview');
    __gaTracker( function() { window.ga = __gaTracker; } );
  } else {
    console.log( "" );
    (function() {
      /* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
      var noopfn = function() {
        return null;
      };
      var noopnullfn = function() {
        return null;
      };
      var Tracker = function() {
        return null;
      };
      var p = Tracker.prototype;
      p.get = noopfn;
      p.set = noopfn;
      p.send = noopfn;
      var __gaTracker = function() {
        var len = arguments.length;
        if ( len === 0 ) {
          return;
        }
        var f = arguments[len-1];
        if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
          console.log( 'Not running function __gaTracker(' + arguments[0] + " ....) because you are not being tracked. " + em_no_track_reason );
          return;
        }
        try {
          f.hitCallback();
        } catch (ex) {

        }
      };
      __gaTracker.create = function() {
        return new Tracker();
      };
      __gaTracker.getByName = noopnullfn;
      __gaTracker.getAll = function() {
        return [];
      };
      __gaTracker.remove = noopfn;
      window['__gaTracker'] = __gaTracker;
      window.ga = __gaTracker;		})();
    }
    !function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);

    document.querySelector("#post-360 > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-abcc06b.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default")

    document.querySelector("#office-MultiFeatureCarousel-nyr4dsg")
