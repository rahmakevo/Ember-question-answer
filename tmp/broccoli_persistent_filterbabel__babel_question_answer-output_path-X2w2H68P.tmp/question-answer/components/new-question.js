define('question-answer/components/new-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      saveQuestion: function saveQuestion() {
        var params = {
          ask: this.get('ask'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.sendAction('saveQuestion', params);
      }
    }
  });
});