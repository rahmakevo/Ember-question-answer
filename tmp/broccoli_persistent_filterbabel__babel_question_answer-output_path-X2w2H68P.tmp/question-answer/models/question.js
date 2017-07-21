define('question-answer/models/question', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    ask: _emberData['default'].attr(),
    author: _emberData['default'].attr(),
    notes: _emberData['default'].attr(),
    answers: _emberData['default'].hasMany('answer', { async: true }),

    favoriteQuestions: _ember['default'].inject.service(),
    favorited: _ember['default'].computed('favoriteQuestions.questions.[]', function () {
      return this.get('favoriteQuestions.questions').contains(this);
    })
  });
});