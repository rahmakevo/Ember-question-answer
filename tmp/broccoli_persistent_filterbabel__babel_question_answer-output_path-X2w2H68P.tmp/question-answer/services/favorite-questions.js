define('question-answer/services/favorite-questions', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    questions: [],

    add: function add(question) {
      this.get('questions').pushObject(question);
    }
  });
});