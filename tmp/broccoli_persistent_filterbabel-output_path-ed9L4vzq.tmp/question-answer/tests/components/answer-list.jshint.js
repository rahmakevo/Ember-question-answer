define('question-answer/tests/components/answer-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/answer-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/answer-list.js should pass jshint.\ncomponents/answer-list.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/answer-list.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});