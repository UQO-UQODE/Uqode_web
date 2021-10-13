
var express = require('express');
var router = express.Router();
const path = require('path');
const validation = require('../validation/validate').validate;
const auth = require('../validation/auth');
const controlGuess = require('../controllers/guess');
const controlAdmin = require('../controllers/admin');
const {check, validationResult} = require('express-validator');

/*Guess routes*/
router.get(['/','/home'], controlGuess.getHome);
router.get('/faq', controlGuess.getFaq);
router.get('/contact-us', controlGuess.getContactUs);
router.post('/createUser',auth.signup, controlGuess.createUser);
router.route('/login')
  .get(controlGuess.getLogin)
  .post(controlGuess.logUser)

/*users routes */

router.get('/projects', function (req, res) {
  res.render('projects');
});

router.get('/event', function (req, res) {
  res.render('event');
});

/*admin routes */
/*
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
*/


module.exports = router;