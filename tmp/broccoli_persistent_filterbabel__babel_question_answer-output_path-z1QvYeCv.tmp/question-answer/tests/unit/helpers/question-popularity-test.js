define('question-answer/tests/unit/helpers/question-popularity-test', ['exports', 'question-answer/helpers/question-popularity', 'qunit'], function (exports, _questionAnswerHelpersQuestionPopularity, _qunit) {

  (0, _qunit.module)('Unit | Helper | question popularity');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _questionAnswerHelpersQuestionPopularity.questionPopularity)([42]);
    assert.ok(result);
  });
});