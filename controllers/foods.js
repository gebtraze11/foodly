const Food = require('../models/food');
const Restaurant = require('../models/restaurant');


module.exports = {
    newFood,
  createFood,
   
  }

  function newFood(req, res){
    res.render('restaurants/menuNew');
    
  }

  function createFood(req, res){
    for (let key in req.body){
      if(req.body[key] === '')
      delete req.body[key];
    }
    var food = new Food(req.body);
    food.save(function(err){
      if(err) console.log(err);
      res.redirect(`/restaurants/${restaurant._id}`);
    })
  }