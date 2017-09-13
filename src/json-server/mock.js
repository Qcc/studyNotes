let Mock =require('mockjs');
let Random=Mock.Random;
module.exports = function () {
  var root = {
    licTemp:{"status":200,"errorCode":0,"message":"Success","moreInfo":"","allRecord":100,entity:[]},
    //订单管理
    orderGetPager:{"status":200,"errorCode":0,"message":"Success","moreInfo":"","entity":{count:3,list:[]}},
    //伙伴管理
    partnerManager:{"status": 200,"errorCode": 0,"message": "Success","moreInfo": "",entity: {count: 15,list: []}     
            },
        //财务菜单
            caiwuMenu: {
                "status": 200,
                "errorCode": 0,
                "message": "Success",
                "moreInfo": "",
                "entity": [{
                            "name": "PartnerManagerGroup",
                            "title": "伙伴管理",
                            "icon": "global",
                            "children": [{
                                        "name": "AgencyPriceApproval",
                                        "title": "价格审核",
                                        "icon": "edit",
                                        "children": null
                                        },
                                        {
                                            "name": "PartnerDetails",
                                            "title": "伙伴明细",
                                            "icon": "edit",
                                            "children": null
                                        }]
                            },
                            {
                              "name": "OrderManagerGroup",
                              "title": "订单管理",
                              "icon": "global",
                              "children": [
                                  {
                                      "name": "PendingOrders_Finance",
                                      "title": "待处理订单",
                                      "icon": "edit",
                                      "children": null
                                  },
                                  {
                                      "name": "HistoryOrders",
                                      "title": "历史订单",
                                      "icon": "edit",
                                      "children": null
                                  }
                              ]
                          },
                          {
                              "name": "AccountManagerGroup",
                              "title": "帐户管理",
                              "icon": "setting",
                              "children": [
                                  {
                                      "name": "MyAccount",
                                      "title": "我的帐户",
                                      "icon": "solution",
                                      "children": null
                                  }
                              ]
                          }
                        ]},
            //销售菜单
            xiaoshouMenu:{
                "status": 200,
                "errorCode": 0,
                "message": "Success",
                "moreInfo": "",
                "entity": [
                          {
                              "name": "PartnerManagerGroup",
                              "title": "伙伴管理",
                              "icon": "global",
                              "children": [
                                  {
                                      "name": "PartnerManager",
                                      "title": "伙伴管理",
                                      "icon": "edit",
                                      "children": null
                                  },
                                  {
                                      "name": "AgencyPriceManager",
                                      "title": "价格管理",
                                      "icon": "edit",
                                      "children": null
                                  },
                                  {
                                      "name": "StockQuery",
                                      "title": "库存查询",
                                      "icon": "edit",
                                      "children": null
                                  }
                              ]
                          },
                          {
                              "name": "OrderManagerGroup",
                              "title": "订单管理",
                              "icon": "global",
                              "children": [
                                  {
                                      "name": "CreateOrder",
                                      "title": "新建订单",
                                      "icon": "edit",
                                      "children": null
                                  },
                                  {
                                      "name": "PendingOrders_Sales",
                                      "title": "待处理订单",
                                      "icon": "edit",
                                      "children": null
                                  },
                                  {
                                      "name": "OrderDetails",
                                      "title": "订单明细",
                                      "icon": "edit",
                                      "children": null
                                  }
                              ]
                          },
                          {
                              "name": "AccountManagerGroup",
                              "title": "帐户管理",
                              "icon": "setting",
                              "children": [
                                  {
                                      "name": "MyAccount",
                                      "title": "我的帐户",
                                      "icon": "solution",
                                      "children": null
                                  }
                              ]
                          }
                        ]},
    
    
        //伙伴价格
        priceGetPager:{"status": 200,"errorCode": 0,"message": "Success","moreInfo": "",entity: {count: 20,list: []}}

}

    let products= ['云桌面','CTBS高级版','CTBS企业版'];
    let active =['已激活','未激活'];

    for(let i=1;i<100;i++){
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
    //orderGetPager
    for(let i=1;i<3;i++){
        let content = Random.cparagraph(0,10);
        root.orderGetPager.entity.list.push({
          id: i,
          partner: {id:i*4,
                    name:Random.clast()+Random.cfirst(),
                    address:`${Random.city()}${Random.cword(2,4)}有限公司`,
                    phone:"1356456465",
                },
          product:{productId:1,
                    productName:products[Random.integer(0,2)],
                    productVersion:"6.8.3",
                    productPrice:2500,
                    },
          createDatetime:Random.datetime(),
          amount:"10",
          price:"2300",
          user:{id:i*5,
                name:"张三",
                phone:"15878997744",
                email:"fdgd@dfsd.com",
                dp:{},
            },
          approvalDatetime:Random.datetime(),
          sum:"23000",  
          state:"审核中",
        });
    }
    
    //伙伴管理
    for(let i=0;i<20;i++){
        root.partnerManager.entity.list.push({
                          "id": i,
                           "name":Random.clast()+Random.cfirst(),
                           "address":`${Random.city()}街道`,
                           "phone":"1385656448",
                           "email":`ef${Random.integer(1,120)}@${Random.integer(1,120)}op.com`,
                           "company":`${Random.city()}${Random.cword(2,4)}有限公司`,
                           "level":"金牌代理",
                           "salesUser":{
                                      "id":2,
                                      "name":"selas",
                                      "phone":"1354564454",
                                      "email":"fgfg@dfdf.com"
                                    }
                          });
    }
    //伙伴价格管理
    for(let i=0;i<20;i++){
        root.priceGetPager.entity.list.push(
            {"partner": {
                    "id": i,
                    "name": Random.clast()+Random.cfirst(),
                    "address": `${Random.city()}街道`,
                    "phone": "1585656448",
                    "email": `em${Random.integer(1,120)}@${Random.integer(1,120)}df.com`,
                    "company": `${Random.city()}${Random.cword(2,4)}有限公司`,
                    "level": null,
                    "balance": 0,
                    "salesUser": "selas"},
                "product": {
                    productId:Random.integer(1,3),
                    productName:products[Random.integer(0,2)],
                    productVersion:"6.8.3",
                    productPrice:2500,
                },
                "value": 200,
                "state": Random.integer(-1,1)
            });
    }
    return root;
}