var express = require('express');
var router = express.Router();

var passport = require('passport');
var usersController = require('../controllers/users');

/* GET home page. */
router.get('/', usersController.index)

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/foodlycallback', passport.authenticate(
  'google',
  {
    successRedirect : '/restaurants',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
