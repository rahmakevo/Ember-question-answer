define('question-answer/tests/test-helper', ['exports', 'question-answer/tests/helpers/resolver', 'ember-qunit'], function (exports, _questionAnswerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_questionAnswerTestsHelpersResolver['default']);
});