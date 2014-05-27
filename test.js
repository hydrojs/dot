
var Hydro = require('hydro');
var formatter = require('./')(new Hydro);

formatter.beforeAll();

for (var i = 1; i < 51; i++) {
  var test = {
    time:1,
    title: 'test ' + i,
    error: new Error('boom'),
    fullTitle: function(){ return this.title; }
  };
  var n = Math.random();
  if (n > .99) test.status = 'pending';
  else if (n > .98) test.status = 'skipped';
  else if (n > .96) test.status = 'failed';
  else test.status = 'passed';
  formatter.tests.push(test);
  formatter[test.status].push(test);
  formatter.afterTest(test);
}

formatter.afterAll();
