var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods')

/* GET users listing. */


router.get('/:id/addFood', foodsCtrl.newFood);
router.post('/:id', foodsCtrl.createFood);


module.exports = router;