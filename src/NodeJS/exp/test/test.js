// var memdb = require('..');
// var assert = require('assert');
// describe('memdb', function() {
//   describe('.save(doc)', function() {
//     it('shoule save the document', function() {
//       var pet = { name: 'Tobi' };
//       memdb.save(pet);
//       var ret = memdb.first({ name: 'Tobi' });
//       assert(ret == pet);
//     });
//   });
// });

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1, 2, 3].indexOf(4));
//     });
//   });
// });
// add.test.js
var add = require('../add.js');
var assert = require('assert');

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    assert.equal(add(1, 1), 2, '1+1应该等于2');
  });
});