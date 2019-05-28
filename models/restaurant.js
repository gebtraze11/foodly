var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    username: String,
    comment: String,
    rating: Number
})

var foodSchema = new mongoose.Schema({
    name: String,
    averageRating: {
        type: Number,
        default: null
    },
    reviews: [reviewSchema]
})

foodSchema.methods.setAverageRating = function () {
    let sum = 0;
    this.reviews.forEach(function(r) { sum += r.rating })
    return this.averageRating = sum / this.reviews.length;
 
}

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
