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
        default: 5
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
// module.exports = mongoose.model('Review', reviewSchema);

// module.exports = {
//     Restaurant: mongoose.model('Restaurant', restaurantSchema),
//     Review: mongoose.model('Review', reviewSchema)
// }
