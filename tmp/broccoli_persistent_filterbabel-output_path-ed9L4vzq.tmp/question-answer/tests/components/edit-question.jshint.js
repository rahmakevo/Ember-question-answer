define('question-answer/tests/components/edit-question.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/edit-question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/edit-question.js should pass jshint.\ncomponents/edit-question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/edit-question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/edit-question.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/edit-question.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});