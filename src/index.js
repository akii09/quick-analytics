// src/index.js

export default {
    install(Vue, options) {
      const { id } = options;
  
      // Load the Google Analytics script dynamically
      const loadScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.head.appendChild(script);
      };
  
      // Initialize Google Analytics and track pageviews
      const initializeAnalytics = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', id);
      };
  
      // Track a custom event
      const trackEvent = (eventName, eventCategory, eventLabel) => {
        window.gtag('event', eventName, {
          event_category: eventCategory,
          event_label: eventLabel,
        });
      };
  
      // Add methods to Vue prototype
      Vue.prototype.$analytics = {
        initialize: initializeAnalytics,
        trackEvent,
      };
  
      // Load the Google Analytics script when the Vue app is mounted
      Vue.mixin({
        mounted() {
          loadScript();
          this.$analytics.initialize();
        },
      });
    },
  };
  