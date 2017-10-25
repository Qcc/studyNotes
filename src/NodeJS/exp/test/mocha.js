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

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});