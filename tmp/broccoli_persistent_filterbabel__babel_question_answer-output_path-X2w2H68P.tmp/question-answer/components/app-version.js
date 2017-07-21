define('question-answer/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'question-answer/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _questionAnswerConfigEnvironment) {

  var name = _questionAnswerConfigEnvironment['default'].APP.name;
  var version = _questionAnswerConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});