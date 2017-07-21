define('question-answer/tests/helpers/start-app', ['exports', 'ember', 'question-answer/app', 'question-answer/config/environment'], function (exports, _ember, _questionAnswerApp, _questionAnswerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _questionAnswerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _questionAnswerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});