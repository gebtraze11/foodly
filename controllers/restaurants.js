const Restaurant = require('../models/restaurant');

module.exports = {
  index,
  newRestaurant,
  create,
  menu,
 
}


function index(req, res){
  if(!req.query.search)
    req.query.search = '';

  if (!req.query.page)
  req.query.page=1;

  const regex = new RegExp(`${req.query.search}`, 'i');
  console.log(regex);

  Restaurant.find({name: {$regex: regex}})
  .then(restaurants => {

    const length = restaurants.length;

    const page = parseInt(req.query.page)-1;
    restaurants = restaurants.splice(page*5, 5);
    res.render('restaurants/index', {
      restaurants: restaurants,
      page: parseInt(req.query.page),
      maxPage: Math.ceil(length/5),
      user: req.user
    })
    
  }).catch(err => console.log(err));
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