const Sequelize = require('sequelize');

const connect = ()=>{
  //console.log('test');  
  return new Sequelize('uqode_db', 'root', '', {
    host: 'localhost',
    dialect:  'mysql',
  });
  
}

module.exports = connect;

