
var express = require('express');
var router = express.Router();
const path = require('path');

// Home page route.

router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname,'/../view/HomePage.html'));
  })




module.exports = router;


