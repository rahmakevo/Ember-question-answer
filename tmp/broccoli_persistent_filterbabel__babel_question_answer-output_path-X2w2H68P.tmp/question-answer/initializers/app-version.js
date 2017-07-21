define('question-answer/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'question-answer/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _questionAnswerConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_questionAnswerConfigEnvironment['default'].APP.name, _questionAnswerConfigEnvironment['default'].APP.version)
  };
});