var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    fs.readFile('router.js',function (err,data) {
        if(err){
            console.log(err);
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(`<pre style="color:green">${data}</pre>`);
        }
    });
}).listen(3000);
console.log("Http服务器已经启动，请访问：http://localhost:3000");

// var EventEmitter =require('events').EventEmitter;
// var event = new EventEmitter();

// event.on('some_event',function () {
//     console.log('some_event occured!!!');
// });

// setTimeout(function () {
//     event.emit('some_event');
// },3000);

// console.log(process.argv);