const Restaurant = require('../models/restaurant')
// const {Restaurant, Review} = require('../models/restaurant')


module.exports = {
    create,
    update,
    deleteReview
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

function update(req, res){
    Restaurant.findOne({'menu._id': req.params.foodId}, function(err, restaurant){
        var foodId = req.params.foodId
        var reviewId = req.params.reviewId
        var review = restaurant.menu.id(foodId).reviews.id(reviewId);
        review.comment = req.body.comment;
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
    //   review.remove()
        restaurant.save()
           
        res.redirect(`/restaurants/${restaurant.id}`)
    });
}
