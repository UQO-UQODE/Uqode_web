
var express = require('express');
var router = express.Router();
const path = require('path');
const val = require('../validation/validate');
const control_guess = require('../controllers/guess');
const control_admin = require('../controllers/admin');


/*Guess routes*/
router.get(['/','/home'], function (req, res) {
  res.render('HomePage');
});

router.get('/login', function (req, res) {
  res.render('connexion');
});


router.get('/registration', function (req, res) { //create an account
  res.render('registration');
});

router.get('/contact-us', function (req, res) {
  res.render('contact-us');
});

router.post('/createUser', control_guess);


router.post('/event_create', control_admin);

  




/*users routes */

/*admin routes */


module.exports = router;


