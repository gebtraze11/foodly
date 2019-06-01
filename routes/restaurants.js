var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants');
var helper = require('../utils/isAdmin');

/* GET users listing. */

router.get('/', restaurantsCtrl.index)
router.get('/new', helper.isAdmin, restaurantsCtrl.newRestaurant);
router.post('/', helper.isAdmin, restaurantsCtrl.create);
router.get('/:id', restaurantsCtrl.menu);

module.exports = router;
