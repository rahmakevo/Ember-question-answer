define('question-answer/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    author: _emberData['default'].attr(),
    content: _emberData['default'].attr(),
    entry: _emberData['default'].belongsTo('question', { async: true })
  });
});