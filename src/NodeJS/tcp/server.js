var net = require('net');
var count =0;
var users = {};
var server = net.createServer(function(conn){
    console.log('\033[90m  new connection!\033[39m');
    conn.write(
        '> welcome to \033[92mnode-chat\033[39m!\n\n'
        + '> ' + count + 'other people are connected at this time.'
        + '> please write your name and press enter: '
    );
    count++;
    var nickname;
    conn.setEncoding('utf8');
    function boradcast(msg,exceptMyself){
        for(var i in users){
            if(!exceptMyself || i != nickname){
                users[i].write(msg);
            }
        }
    }
    conn.on('data',function(data){
        data = data.replace('\r\n','');
        if(!nickname){
            if(users[data]){
                conn.write('\033[93mnickname already is use. try again:\033[39m');
                return;
            }else{
                nickname = data;
                users[nickname]=conn;
                for(var i in users){
                    users[i].write('\033[90m'+nickname+'joined the room\033[39m\n');
                }
            }
        }else{
            for(var i in users){
                if(i != nickname){
                    users[i].write('\033[96m'+nickname+'\033[39m'+data+'\n');
                }
            }
        }
        console.log(data);
    });
    conn.on('close',function(){
        count--;
        delete users[nickname];
        console.log('a user exit!');
    });
});


server.listen(3000,function(){
    console.log('\033[96m  server listening on *:3000\033[39m');
});
