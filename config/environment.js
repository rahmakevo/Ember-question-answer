/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'question-answer',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: 'https://review-question-answer.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyC6L5tsTB_2d3cfKFu_0FUob4zArhNXa6A",
    authDomain: "questions-d246b.firebaseapp.com",
    databaseURL: "https://questions-d246b.firebaseio.com",
    projectId: "questions-d246b",
    storageBucket: "",
    messagingSenderId: "1042454206058"

  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com",
      'font-src': "'self'",
      'connect-src': "'self' wss://*.firebaseio.com",
      'img-src': "'self' *",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "'self' https://*.firebaseio.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
