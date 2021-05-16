
const CodingEvent = require('../models/codingEvent');
const connect_db = require('../database/db_connect_V3');
const { DataTypes } = require('sequelize');

const createEvent = (req, res)  => {

  console.log("create an event: "+ req.body.eventName);

  var connection = connect_db();
  const codingEvent = CodingEvent(connection,DataTypes);

  codingEvent.create({

      eventName: req.body.name,
      startDate:  req.body.startDate,
      endDate:  req.body.endDate,
      description:  req.body.description,
      location_id: 1
  })
  .then(() =>{
      connection.close();
  })
  .then(()=>{
      res.render('HomePage');
  })
  .catch((err) =>{
      console.log(`DB ERROR: ${err}`);
      res.render('error');
  });

/*
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
*/  
};

exports.createEvent = createEvent;