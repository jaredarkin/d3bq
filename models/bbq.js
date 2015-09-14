var mongoose = require('mongoose');

var BbqSchema = new mongoose.Schema({
  name: String,
  address: String,
});

module.exports = mongoose.model('Bbq', BbqSchema);
