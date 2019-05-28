var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    username: String,
    comment: String,
    rating: Number
})

var foodSchema = new mongoose.Schema({
    name: String,
    reviews: [reviewSchema]
})

var restaurantSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    menu: [foodSchema],
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    description: String,
    logoLink: String,
    addressLink: String
})


module.exports = mongoose.model('Restaurant', restaurantSchema);
