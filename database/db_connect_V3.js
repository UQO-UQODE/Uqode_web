const Sequelize = require('sequelize');

const connect = ()=>{
  return new Sequelize('uqode_db', 'root', '', {
    host: 'localhost',
    dialect:  'mysql',
  });
  
}

module.exports = connect;

