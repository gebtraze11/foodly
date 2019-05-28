var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews')


router.post('/food/:id', reviewsCtrl.create)
// router.put('/reviews/:foodID/:reviewID', reviewsCtrl.update)


module.exports = router;