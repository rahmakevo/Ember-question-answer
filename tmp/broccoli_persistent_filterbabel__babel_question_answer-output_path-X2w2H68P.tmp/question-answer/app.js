define('question-answer/app', ['exports', 'ember', 'question-answer/resolver', 'ember-load-initializers', 'question-answer/config/environment'], function (exports, _ember, _questionAnswerResolver, _emberLoadInitializers, _questionAnswerConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _questionAnswerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _questionAnswerConfigEnvironment['default'].podModulePrefix,
    Resolver: _questionAnswerResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _questionAnswerConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});