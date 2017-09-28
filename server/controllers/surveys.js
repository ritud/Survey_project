var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
module.exports = {
  create: function(req, res) {
    console.log("SERVER => CREATE FUNCTION");
    var survey = new Survey({name:req.body.name,question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,option4:req.body.option4});
    survey.save(function(err) {
      if(err){
        console.log("something went wrong while saving data in Model");
      } else {
        Survey.find({},function(err,questions){
          return res.json(questions);
        })
      }
    })
  },
  getsurveys:function(req,res){
      Survey.find({},function(err,surveys){
        return res.json(surveys);
      })
    },
  survey:function(req,res){
    console.log(req.params.id);
    Survey.findOne({_id:req.params.id},function(err,survey){
      return res.json(survey);
    })
  },
  remove:function(req,res){
    Survey.remove({_id:req.params.id},function(err){
      if(err){
        console.log("something went wrong while saving data in Model");
      } else {
        Survey.find({},function(err,surveys){
          return res.json(surveys);
        })
      }
    })
  },
  updatesurvey:function(req,res){
    Survey.updateOne({_id: req.body._id},
		{ $set: {name:req.body.name,question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,
		 option4:req.body.option4,vote1:req.body.vote1,vote2:req.body.vote2,vote3:req.body.vote3,vote4:req.body.vote4 }},function(err){
    if(err){
      console.log("ERROR OCCURED WHILE UPDATING THE DATA");
    }
    else{
      Survey.find({},function(err,surveys){
        return res.json(surveys);
      })
    }
  })
}
}
