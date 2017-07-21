define('question-answer/tests/helpers/resolver', ['exports', 'question-answer/resolver', 'question-answer/config/environment'], function (exports, _questionAnswerResolver, _questionAnswerConfigEnvironment) {

  var resolver = _questionAnswerResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _questionAnswerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _questionAnswerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});