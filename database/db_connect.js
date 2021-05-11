

/*This file is connecting to the database */


const mysql = require('mysql');
require('dotenv').config();

var connection = null;

//db setup
const connect = () => { 
  var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    database : process.env.DB,
    password : process.env.DB_PASSWORD
  });
  connection.connect(function(err) {
    if (err) {
      console.error(`error connecting to the database ${process.env.DB} `);
      return;
    }
    console.log(`connect to the database ${process.env.DB} on ${process.env.DB_HOST} with id: ${connection.threadId}` );
  });
  return connection;
}

exports.connect = connect;
exports.connection = connection;
