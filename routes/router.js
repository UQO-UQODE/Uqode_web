
var express = require('express');
var router = express.Router();
const path = require('path');
const val = require('../validation/validate');
const control_guess = require('../controllers/guess');


/*Guess routes*/
router.get(['/','/home'], function (req, res) {
  res.render('HomePage');
});

router.get('/login', function (req, res) {
  res.render('connexion');
});

router.post('/createUser', control_guess);

/*users routes */

/*admin routes */


module.exports = router;


