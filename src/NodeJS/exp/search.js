var request = require('superagent');

module.exports = function search(query, fn) {
  request.get('https://api.douban.com/v2/user')
    .query({ start: 0, count: 10, q: query })
    .end(function(err, res) {
      console.log('res', res.body);
      if (res.body && Array.isArray(res.body.users)) {
        return fn(null, res.body.users);
      }
      fn(new Error('Bad twitter response'));
    });
}