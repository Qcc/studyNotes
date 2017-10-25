var assert = require('assert');
var Todo = require('../server');
var todo = new Todo();
var testsCompleted = 0;

function deleteTest() {
  todo.add('Delete me');
  assert.equal(todo.getCount(), 1, '1 item should exist');
  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'No items should exits');
  testsCompleted++;
}

function addTest() {
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(), 0, '1 item should exist');
  testsCompleted++;
}

function doAsyncTest(cb) {
  todo.doAsync(function(value) {
    assert.ok(value, 'Callback should be passed true');
    testsCompleted++;
    cb();
  });
}

function throwsTest(cb) {
  assert.throws(todo.add, /requires/);
  testsCompleted++;
}

deleteTest();
addTest();
throwsTest();
doAsyncTest(function() {
  console.log('Complated ' + testsCompleted + ' tests');
});