var express = require('express');
var app = express();

app.set('views','./views');
app.set('view engine','jade');


app.use(function (req,res,next) {
    console.log('i am Middleware');
    next();
});

app.get('/',function (req,res) {
    res.render('index',{title:'kevin',message:'沟通科技'});
});
var data ='all';
app.all('/all',function (req,res,next) {
    res.send('this is all');    
});

app.get('/main',function (req,res) {
    res.send('this is main page!');
});

app.post('/post',function (req,res) {
    res.send('this is post page!');
});

app.use('/file',express.static('public'));

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s',host,port);
});