define('question-answer/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'question-answer/tests/helpers/start-app', 'question-answer/tests/helpers/destroy-app'], function (exports, _qunit, _questionAnswerTestsHelpersStartApp, _questionAnswerTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _questionAnswerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _questionAnswerTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});