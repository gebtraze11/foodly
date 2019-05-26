const Restaurant = require('../../models/restaurant');

module.exports = {
    getAllRestaurants,
}

function getAllRestaurants(req, res){
    Restaurant.find({}).then(function(restaurants){
        res.status(200).json(restaurants);
    })
}