const Restaurant = require('../models/restaurant')

module.exports = {
    create,
    // update
}

function create(req, res){
    Restaurant.findOne({'menu._id': req.params.id}, function(err, restaurant){
        var food = restaurant.menu.id(req.params.id)
        req.body.username = req.user.name;
        food.reviews.push(req.body)
        
        food.setAverageRating();
        console.log(food.averageRating);

        restaurant.save(function(err, savedRestaurant) {
            
            res.redirect(`/restaurants/${restaurant.id}`)
        });
    })
}

// function update(req, res){
//     Restaurant.findOne({'menu.reviews._id': req.params.id}, function(err, restaurant){
//         var review = restaurant.menu.id(foodId).reviews.reviewId;
//         restaurant.menu.review.
//     })
// }