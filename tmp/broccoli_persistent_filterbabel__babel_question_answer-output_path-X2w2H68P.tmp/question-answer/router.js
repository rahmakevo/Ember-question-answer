define('question-answer/router', ['exports', 'ember', 'question-answer/config/environment'], function (exports, _ember, _questionAnswerConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _questionAnswerConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('question', { path: '/question/:question_id' });
    this.route('new-question');
    this.route('about');
    this.route('favorites');
  });

  exports['default'] = Router;
});