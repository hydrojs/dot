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
  if (test.status === 'skipped') return;
  this.print(this.color('.', this.statusColor[test.status]));
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
 * display test counts grouped by type
 *
 * @api private
 */

Dot.prototype.displayResult = function() {
  var failing = this.failed.length;
  var skipped = this.skipped.length;
  var total = this.tests.length;
  var pending = this.pending.length;
  var passing = total - skipped - failing;
  var time = this.tests.reduce(function(sum, test) {
    return sum + test.time;
  }, 0);

  this.println();
  this.println(''
    + this.color(passing ? passing + ' passing ' : '', 'green')
    + this.color(pending ? pending + ' pending ' : '', 'yellow')
    + this.color(skipped ? skipped + ' skipped ' : '', 'blue')
    + this.color(failing ? failing + ' failing ' : '', 'red')
    + '\033[90m(' + this.ms(time) + ')'); // grey
  this.println();
};

/**
 * Primary export.
 */

module.exports = Dot;
