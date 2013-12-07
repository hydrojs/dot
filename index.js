/**
 * External dependencies.
 */

var Formatter = require('hydro-formatter');

/**
 * Dot formatter.
 *
 * @constructor
 */

var Dot = Formatter.extend();

/**
 * Before all tests.
 *
 * @api public
 */

Dot.prototype.beforeAll = function() {
  this.println();
  this.print(this.padding);
};

/**
 * After each test.
 *
 * @param {Object} test
 * @api public
 */

Dot.prototype.afterTest = function(test) {
  if (test.skipped) return;
  var status = test.failed ? 'red' : 'green';
  this.print(this.color(status, '.'));
};

/**
 * After all tests.
 *
 * @api public
 */

Dot.prototype.afterAll = function() {
  this.println();
  this.displayResult();
  this.displayFailed();
};

/**
 * Primary export.
 */

module.exports = Dot;
