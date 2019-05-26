var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    description: String,
    logoLink: String,
    addressLink: String
})


module.exports = mongoose.model('Restaurant', restaurantSchema);
