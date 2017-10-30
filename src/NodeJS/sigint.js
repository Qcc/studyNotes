var  http = require('http');
process.on('SIGINT',function(){
    console.log('Got Ctrl-C!');
    server.close();
});

var  server = http.createServer(function(req,res){
res.end('hello');
});

server.listen(8000);

