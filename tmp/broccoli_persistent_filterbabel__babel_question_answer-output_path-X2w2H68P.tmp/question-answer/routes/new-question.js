define('question-answer/routes/new-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('question');
    },
    actions: {
      saveQuestion: function saveQuestion(params) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      }
    }
  });
});