var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants')

/* GET users listing. */

router.get('/', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.newRestaurant);
router.post('/', restaurantsCtrl.create);
router.get('/:id', restaurantsCtrl.menu);

module.exports = router;
