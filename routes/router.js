
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

router.get('/event', function (req, res) { //create an account
  res.render('event');
});



/*admin routes */

router.post('/event_create', controlAdmin.createEvent);

router.get('/createEventForm', function (req, res) { //create an account
  res.render('createEventForm');
});

router.get('/createProjectForm', function (req, res) { //create an account
  res.render('createProjectForm');
});


router.get('/AdminAccounts', function (req, res) { //create an account
  res.render('AdminDashboardAccount');
});

router.get('/AdminEvents', function (req, res) { //create an account
  res.render('AdminDashboardCodingEvent');
});

router.get('/AdminTeam', function (req, res) { //create an account
  res.render('AdminDashboardTeam');
});



module.exports = router;