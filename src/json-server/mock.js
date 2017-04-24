let Mock =require('mockjs');
let Random=Mock.Random;
const allRecord =100;
module.exports = function () {
    var root = {
            licTemp:{"status":200,"errorCode":0,"message":"Success","moreInfo":"",allRecord:allRecord,entity:[]},
        }
    let products= ['云桌面','CTBS高级版','CTBS企业版'];
    let active =['已激活','未激活'];
    for(let i=1;i<allRecord;i++){
        let content = Random.cparagraph(0,10);
        root.licTemp.entity.push({
            id:i, //id
            key: i, //key
            cdkey: Random.guid().slice(4,23).toUpperCase(), //授权码
            customer: `${Random.city()}${Random.cword(2,4)}有限公司`, //客户公司名称
            product:products[Random.integer(0,2)], //产品
            trial: Random.datetime(), //授权结束日期
            license:Random.integer(1,120), //站点数
            active:active[Random.integer(0,1)], //是否已经激活
        });
    }    
    return root;
}