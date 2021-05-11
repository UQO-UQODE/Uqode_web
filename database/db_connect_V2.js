
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        database : process.env.DB,
        password : process.env.DB_PASSWORD
    },
    debug: true
  });
  console.log("connect to the db");

  knex.insert({title: "test" })
  .into('permission')
  .then(function(lastId) {
    console.log(lastId[0]);
    knex.destroy();
}).catch(function(err) {
    console.error("error: " + err);
  });

  console.log("allo");
  
