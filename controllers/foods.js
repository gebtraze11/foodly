const Food = require('../models/food');
const Restaurant = require('../models/restaurant');



module.exports = {
    newFood,
  createFood,
   
  }

  function newFood(req, res){
    res.render('restaurants/addFood');
    
  }

  function createFood(req, res){
    Restaurant.findById(req.params.id, 
      function(err, restaurant){
      restaurant.food.push(req.body);
      restaurant.save(function(err){
        res.redirect(`/restaurants/${restaurant._id}`);
      })
    })
  }

   
      