var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews')


router.post('/restaurants/:restId/food/:foodId/reviews', reviewsCtrl.create)
router.put('/reviews/:foodId/:reviewId', reviewsCtrl.update)
router.delete('/reviews/:foodId/:reviewId', reviewsCtrl.deleteReview)


module.exports = router;