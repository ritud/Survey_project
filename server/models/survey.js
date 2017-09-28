// require mongoose
var mongoose = require('mongoose');
// create the schema
var SurveySchema = new mongoose.Schema({
  name:{type:String,required:true},
  question: {type:String,required:true},
  option1:{type:String,required:true},
  option2:{type:String,required:true},
  option3:{type:String,required:true},
  option4:{type:String,required:true},
  vote1:{type:Number,default:0},
  vote2:{type:Number,default:0},
  vote3:{type:Number,default:0},
  vote4:{type:Number,default:0},
  created_at:{type:Date,default:Date.now()}
})
// register the schema as a model
var Survey = mongoose.model('Survey', SurveySchema);
