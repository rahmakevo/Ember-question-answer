define('question-answer/tests/routes/new-question.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/new-question.js should pass jshint.\nroutes/new-question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/new-question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/new-question.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/new-question.js: line 8, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});