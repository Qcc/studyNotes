var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/kevin';

var  insertDate = function(db,cb){
  var collection = db.collection('tb2');
  var data = [{'name':'kevin','age':32},{'name':'kk','age':18}];
  collection.insert(data,function(err,result){
    if(err){
      console.log(err,'insert is error');
      return;
    }
    cb(result);
  });
}
var selectDate = function(db,cb){
  var collection =db.collection('tb2');
  var whereStr = {'name':'kevin'};
  collection.find(whereStr).toArray(function(err,result){
    if(err){
      console.log(err,'select error');
      return;
    }
    cb(result);
  });
}
MongoClient.connect(DB_CONN_STR,function(err,db){
  console.log('connect seccuse!');
  //insertDate(db,function(result){
  //  console.log(result);
  //  db.close();
  //});
  selectDate(db,function(result){
    console.log(result);
    db.close();
  });
})