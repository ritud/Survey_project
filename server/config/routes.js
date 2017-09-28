var surveys = require('../controllers/surveys.js');

module.exports = function(app) {

  app.get('/getsurveys',function(req,res){
    console.log("ROUTES => GET ROUTE");
    surveys.getsurveys(req,res);
  })

  app.post('/create', function(req,res){
    console.log("In Routes");
    surveys.create(req, res);
  })

  app.get('/survey/:id',function(req,res){
    surveys.survey(req,res);
  })

  app.delete('/deletesurvey/:id',function(req,res){
    surveys.remove(req,res);
  })

  app.put('/update',function(req,res){
    surveys.updatesurvey(req,res);
  })
}
