var mongoose = require('mongoose');


var foodSchema = new mongoose.Schema({
    name: String,
   
})


module.exports = mongoose.model('Food', foodSchema);