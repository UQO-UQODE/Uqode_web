
var express = require('express');
var router = express.Router();
const path = require('path');
const val = require('../validation/validate').validate;
const control_guess = require('../controllers/guess');
const control_admin = require('../controllers/admin');
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

router.post('/createUser',val('user'),control_guess);


router.post('/event_create', control_admin);

  




/*users routes */

/*admin routes */


module.exports = router;


