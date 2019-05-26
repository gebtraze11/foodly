var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/api/restaurants');

router.get('/restaurants', restaurantsCtrl.getAllRestaurants);

module.exports = router;