var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods')

/* GET users listing. */


router.get('/restaurants/:id/addFood', foodsCtrl.newFood);
router.post('/restaurants/:id', foodsCtrl.createFood);


module.exports = router;