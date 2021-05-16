
var express = require('express');
var router = express.Router();
const path = require('path');
const val = require('../validation/validate').validate;
const controlGuess = require('../controllers/guess');
const controlAdmin = require('../controllers/admin');
const {check, validationResult} = require('express-validator');
/*
function test(){
  console.log('the test');
  return [
    check('email').isEmail(),
    check('email').exists()
  ]

}*/
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

router.get('/registration', function (req, res) { //create an account
  res.render('registration');
});

router.get('/contact-us', function (req, res) {
  res.render('contact-us');
});

router.get('/projects', function (req, res) {
  res.render('projects');
});

router.post('/createUser',val('user'),controlGuess.createUser);



router.post('/event_create', controlAdmin.createEvent);

  




/*users routes */

/*admin routes */


module.exports = router;


