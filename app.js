
var express = require('express');
const app = express(); 
var routes = require ('./routes/router');
//const db2 = require('./database/db_connect_V2.js');
const path = require('path');
//const val = require('validation/validate');

//change default res.render path for view
app.set('views', path.join(__dirname, '/view'));

app.use(express.static('view'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connection to the database
//db.connect();

//app.use(val);
app.use('/', routes);

/*
Create the events
nom, startDate, endDate, description, locationId
*/


app.listen(3000, () => {

    console.log("listen on port 3000")
});

module.exports = app ;

