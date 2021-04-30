
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



/*users routes */

/*admin routes */


module.exports = router;


