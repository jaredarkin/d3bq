var mongojs = require("mongojs")

var dbUrl = "d3bq"
var collections = ["barbecues"]

var db = mongojs(dbUrl, collections)

module.exports = db
