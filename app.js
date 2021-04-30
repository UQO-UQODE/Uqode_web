var express = require('express');
const app = express(); 
var routes = require ('./routes/router');
const db = require('./database/db_connect.js');
const path = require('path');

//change default res.render path for view
app.set('views', path.join(__dirname, '/view'));

app.use(express.static('view'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', routes);

app.listen(3000, () => {

    console.log("listen on port 3000")
});

module.exports = app ;

