
var express = require('express');
var router = express.Router();
const path = require('path');

// connexion route
router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname,'/../view/connexion.html'));
})

module.exports = router;
