var express = require("express");
var app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist')));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log("SERVER / Server.js")
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})
