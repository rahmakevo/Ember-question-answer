define('question-answer/components/question-preview', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    answerPopularity: _ember['default'].computed('question.answers', function () {
      return this.get('question.answers.[].length');
    })
  });
});