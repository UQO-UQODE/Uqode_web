
var express = require('express');
var router = express.Router();
const path = require('path');
const val = require('../validation/validate').validate;
const controlGuess = require('../controllers/guess');
const controlAdmin = require('../controllers/admin');
const {check, validationResult} = require('express-validator');


/*Guess routes*/
router.get(['/','/home'], function (req, res) {
  res.render('HomePage');
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

router.post('/createUser',val('user'),controlGuess.createUser);

/*users routes */

router.get('/login', function (req, res) {
  res.render('connexion');
});

router.get('/projects', function (req, res) {
  res.render('projects');
});

/*admin routes */

router.post('/event_create', controlAdmin.createEvent);


module.exports = router;