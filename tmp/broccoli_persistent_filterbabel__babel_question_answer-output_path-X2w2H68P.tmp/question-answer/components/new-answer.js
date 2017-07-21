define('question-answer/components/new-answer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      saveAnswer: function saveAnswer() {
        var params = {
          author: this.get('author'),
          content: this.get('content'),
          question: this.get('question')
        };
        this.sendAction('saveAnswer', params).then(function () {
          this.set('author', '');
          this.set('content', '');
        });
      }
    }
  });
});