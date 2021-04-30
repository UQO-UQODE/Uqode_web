

/*This file is connecting to the database */


const mysql = require('mysql');
const env = require('dotenv').config();

//db setup

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

//console.log(` connect to the database with: ${env.parsed.DB_HOST}, ${env.parsed.DB_USER},${env.parsed.DB_PASSWORD},` );

//query test
/*
var sql = "INSERT INTO permission (title) VALUES ('je suis une permission') ";
connection.query(sql);
*/

module.exports = connection;
