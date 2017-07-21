define('question-answer/routes/question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('question', params.question_id);
    },
    actions: {
      saveAnswer: function saveAnswer(params) {
        var newAnswer = this.store.createRecord('answer', params);
        var question = params.question;
        question.get('answers').addObject(newAnswer);
        newAnswer.save().then(function () {
          return question.save();
        });
      },
      edit: function edit(question, params) {
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            question.set(key, params[key]);
          }
        });
        question.save();
      }
    }
  });
});