define('question-answer/components/question-detail', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    favoriteQuestions: _ember['default'].inject.service(),

    actions: {
      favorite: function favorite(question) {
        this.get('favoriteQuestions').add(question);
      }
    }
  });
});