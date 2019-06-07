const Restaurant = require('../models/restaurant')
// const {Restaurant, Review} = require('../models/restaurant')


module.exports = {
    create,
    update,
    deleteReview
}

function create(req, res){
    Restaurant.findById( req.params.restId, function(err, restaurant){
        var food = restaurant.menu.id(req.params.foodId)
        req.body.username = req.user.name;
        food.reviews.push(req.body)
        
        food.setAverageRating();
        console.log(food.averageRating);

        restaurant.save(function(err, savedRestaurant) {
            
            res.redirect(`/restaurants/${restaurant.id}`)
        });
    })
}

function update(req, res){
    Restaurant.findOne({'menu._id': req.params.foodId}, function(err, restaurant){
        console.log(req.body)
        var foodId = req.params.foodId
        var reviewId = req.params.reviewId
        var review = restaurant.menu.id(foodId).reviews.id(reviewId);
        review.comment = req.body.comment;
        review.rating = req.body.rating;
        restaurant.save()
        res.redirect(`/restaurants/${restaurant.id}`)
    });
}


function deleteReview(req, res){
    Restaurant.findOne({'menu._id': req.params.foodId}, function(err, restaurant){
        var foodId = req.params.foodId
        var reviewId = req.params.reviewId
        var review = restaurant.menu.id(foodId).reviews.id(reviewId);
        console.log(review.comment)
        review.remove()
  
        restaurant.save()
           
        res.redirect(`/restaurants/${restaurant.id}`)
    });
}
