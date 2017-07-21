define('question-answer/tests/components/favorite-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/favorite-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/favorite-list.js should pass jshint.\ncomponents/favorite-list.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/favorite-list.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});