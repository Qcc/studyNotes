var express = require('express');
var app = express();
app.set('views','./views');
app.set('view engine','jade');
app.use(express.static('public'));

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s',host,port);
});