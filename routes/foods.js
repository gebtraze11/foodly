var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods')
var helper = require('../utils/isAdmin');

/* GET users listing. */


router.get('/restaurants/:id/addFood', helper.isAdmin, foodsCtrl.newFood);
router.post('/restaurants/:id', helper.isAdmin, foodsCtrl.createFood);


module.exports = router;