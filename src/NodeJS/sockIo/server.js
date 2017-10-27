var net = require('net');

net.createServer(function(socket) {
    console.log('socket connected!')
    socket.on('data', function(data) {
        console.log('"data" event', data);
    });
    socket.on('end', function() {
        console.log('"end" event');
    });
    socket.on('close', function() {
        console.log('"close" event');
    });
    socket.on('error', function(e) {
        console.log('"error" event', e);
    })
    socket.pipe(socket);
}).listen(5678);
console.log('TCP listening on port 5678');