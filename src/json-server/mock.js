let Mock =require('mockjs');
let Random=Mock.Random;

module.exports =function () {
    var data = {
        licTemp:[],
        
    }
    for(let i=0;i<100;i++){
        let content = Random.cparagraph(0,10);
        data.licTemp.push({
            id:i,
            title:Random.cword(8,20),
            desc:content.substr(0,40),
            tag:Random.cword(2,6),
            views:Random.integer(100,500),
            images:Random.image('88x31',Random.color(),Random.integer(1000,9999))
        });
    }
    return data;
}