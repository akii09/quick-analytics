# Quick Analytics

Quick Analytics is a Vue.js plugin that integrates Google Analytics into your Vue.js application.

## Introduction

Quick Analytics is a lightweight and easy-to-use package that allows you to add Google Analytics tracking to your Vue.js application. It provides a simple setup and API to track events and page views.

## Features

- Easy installation and setup
- Event tracking for custom events
- Page view tracking for Vue Router
- Customizable configuration options

## Installation

```bash
npm install quick-analytics
```

## Usage

### Setup
In your main JavaScript file:

```javascript
import Vue from 'vue';
import QuickAnalytics from 'quick-analytics';

Vue.use(QuickAnalytics, { id: 'YOUR_ANALYTICS_ID' });
```
Make sure to replace 'YOUR_ANALYTICS_ID' with your actual Google Analytics tracking ID.

## Tracking Events
To track events, you can use the $analytics object available in your Vue components:
```javascript
// Inside a Vue component method
this.$analytics.trackEvent('eventName', 'eventCategory', 'eventLabel');
```

## Tracking Page Views
To track page views, you can use the $analytics object in your Vue Router configuration:
```javascript
// Inside your Vue Router configuration
router.beforeEach((to, from, next) => {
  // Track the page view
  Vue.prototype.$analytics.trackPageView(to.path);

  next();
});
```

## Configuration Options
Quick Analytics supports the following configuration options:
    - id (required): Your Google Analytics tracking ID.
    - debug (optional): Enable debug mode to see analytics events in the console.
    - You can provide these options when installing the plugin:
```javascript
Vue.use(QuickAnalytics, {
  id: 'YOUR_ANALYTICS_ID',
  debug: true
});
```
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

Please make sure to replace `'YOUR_ANALYTICS_ID'` with your actual Google Analytics tracking ID.
