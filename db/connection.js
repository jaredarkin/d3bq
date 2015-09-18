var mongojs = require("mongojs")

// var dbUrl = "d3bq"
// var collections = ["barbecues"]

var mongoURI = process.env.MONGOLAB_URI;
var localURI = 'mongodb://localhost/barbecues';
var db = mongojs( mongoURI || localURI, ['barbecues']);


// var db = mongojs(dbUrl, collections)

module.exports = db
