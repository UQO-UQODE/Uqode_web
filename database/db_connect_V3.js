const Sequelize = require('sequelize');

const connect = ()=>{
  return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:  process.env.DB_DBMS,
  });
  
}

module.exports = connect;

