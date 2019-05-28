
const Restaurant = require('../models/restaurant');



module.exports = {
    newFood,
  createFood,
   
  }

  function newFood(req, res){
    Restaurant.findById(req.params.id, function(err, restaurant){
        res.render('restaurants/addFood', { title: 'Menu', restaurant});
    })  

  }

  function createFood(req, res){
    Restaurant.findById(req.params.id, function(err, restaurant){
      restaurant.menu.push(req.body);
      restaurant.save(function(err){
        res.redirect(`/restaurants/${restaurant._id}`);
      })
    })
  }