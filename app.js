
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
app.post('/event_create', (req, res)  => {

    console.log("trying to create an event")
    console.log("nom: "+ req.body.eventName);
    console.log("debut: "+req.body.startDate);
    console.log("fin: "+ req.body.endDate);
    console.log("description: "+ req.body.description);
    console.log("locationId: "+ req.body.location);

    const eventName =req.body.eventName;
    const startDate =req.body.startDate;
    const endDate =req.body.endDate;
    const description =req.body.description;
    const location =req.body.location;
    
    const createEventQuery = "INSERT INTO codingEvent (eventName, startDate, endDate, description, location_id) VALUES(?, ?, ?, ?, ?)"
    db.query(createEventQuery, [eventName, startDate, endDate, description, location], (err, results, fields) => {

            if(err){
                console.log("failed to insert new event" + err)
                res.sendStatus(500)
                return
            }

            console.log("inserted a new event");
            res.end()
    })
    
});


app.listen(3000, () => {

    console.log("listen on port 3000")
});

module.exports = app ;

