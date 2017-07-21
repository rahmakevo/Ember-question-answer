QUnit.module('JSHint - helpers/question-popularity.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'helpers/question-popularity.js should pass jshint.\nhelpers/question-popularity.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/question-popularity.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/question-popularity.js: line 17, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
