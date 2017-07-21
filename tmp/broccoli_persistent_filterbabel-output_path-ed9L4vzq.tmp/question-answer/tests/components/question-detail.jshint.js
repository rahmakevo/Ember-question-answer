define('question-answer/tests/components/question-detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/question-detail.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/question-detail.js should pass jshint.\ncomponents/question-detail.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/question-detail.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/question-detail.js: line 7, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});