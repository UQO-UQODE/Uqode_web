

/*This file is connecting to the database */


const mysql = require('mysql');
const env = require('dotenv').config();

var connection = null;

//db setup
const connect = () => { 
  var connection = mysql.createConnection({
    host     : env.parsed.DB_HOST,
    user     : env.parsed.DB_USER,
    database : env.parsed.DB,
    password : env.parsed.DB_PASSWORD
  });
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    //console.log('connected as id ' + connection.threadId);
  });

  console.log(`connect to the database ${env.parsed.DB} on ${env.parsed.DB_HOST}` );
}

exports.connect = connect;

if(connection)
  exports.connection = connection;
