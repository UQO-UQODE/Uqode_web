
var db = require('./db_connect.js');


db.query('SELECT * FROM codingevent ', function (error, results, fields) {

    console.log(results);
 
});





