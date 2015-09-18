var express = require('express');
var db = require("../db/connection.js")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'd3bq' });
});

// GET BBQ Routes
router.get("/barbecues", function(req,res){
  db.barbecues.find({}, function(err, barbecues){
    if(err) return
    var response = barbecues
    res.json(response)
  })
})

module.exports = router;
