define('question-answer/initializers/load-bootstrap-config', ['exports', 'question-answer/config/environment', 'ember-bootstrap/config'], function (exports, _questionAnswerConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_questionAnswerConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});