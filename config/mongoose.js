const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/codeial_dev');

const db=mongoose.connection;

db.on('error', console.error.bind(console,"error connecting to mongodb"));

db.once('open',function(){
    console.log('connected to database');
})
  module.exports=db;