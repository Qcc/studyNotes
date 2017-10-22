var express = require('express');
var app = express();
var data = require('./mock')();
var jsonData=JSON.stringify(data,null,4);
app.get('/licTemp',function (req,res) {
    console.log('lictemp');
    res.send(`<pre>${jsonData}</pre>`);
});

app.get('*',function (req,res) {
    console.log('not found');    
    res.send('not found');
});

var server = app.listen(3000,function () {
    console.log("port:3000");
})