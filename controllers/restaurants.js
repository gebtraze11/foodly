const Restaurant = require('../models/restaurant');

module.exports = {
  index,
  newRestaurant,
  create,
  menu,
 
}


function index(req, res){
  Restaurant.find({}, function (err, restaurants){
    res.render('restaurants/index',{
      restaurants: restaurants
    })
  })
}

function newRestaurant(req, res){
  res.render('restaurants/new');
  
}
function create(req, res){
  for (let key in req.body){
    if(req.body[key] === '')
    delete req.body[key];
  }
  var restaurant = new Restaurant(req.body);
  restaurant.save(function(err){
    if(err) console.log(err);
    res.redirect('/restaurants/new');
  })
}

function menu(req, res){
  Restaurant.findById(req.params.id, function(err, restaurant){
    res.render('restaurants/menu', { title: 'Menu', restaurant})
  })
}