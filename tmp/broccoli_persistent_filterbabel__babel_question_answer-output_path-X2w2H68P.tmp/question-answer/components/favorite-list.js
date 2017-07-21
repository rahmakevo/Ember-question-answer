define('question-answer/components/favorite-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    favoriteQuestions: _ember['default'].inject.service()

  });
});