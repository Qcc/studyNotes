var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error',function(err){
  console.log(err,'conneciton error');
});
db.once('open',function(){
  console.log('mongodb connected...');
  var kittySchema = mongoose.Schema({
    name:String
  });

  var Kitten = mongoose.model('Kitten',kittySchema);
  var silence = new Kitten({name:'Silence'});
  console.log(silence.name);
  
});