
var express = require('express');
var router = express.Router();
const path = require('path');


/*Guess routes*/
router.get(['/','/home'], function (req, res) {
  res.render('HomePage');
});

router.get('/login', function (req, res) {
  res.render('connexion');
});

router.get('/faq', function (req, res) {
  res.render('faq');
});

router.get('/contact', function (req, res) {
  res.render('contact-us');
});


router.get('/registration', function (req, res) {
  res.render('registration');
});


router.get('/create', function (req, res) {
  res.render('createEvent');
});



/*users routes */

/*admin routes */


module.exports = router;


