var mongojs = require("mongojs")



// // // mongojs for local hosting
//
// var dbUrl = "d3bq"
// var collections = ["barbecues"]
// var db = mongojs(dbUrl, collections)



 // mongojs for heroku use

var mongoURI = process.env.MONGOLAB_URI;
var localURI = 'mongodb://localhost/barbecues';
var db = mongojs( mongoURI || localURI, ['barbecues']);



module.exports = db
