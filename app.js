<<<<<<< HEAD
const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/db_connect')

//console.log(env.parsed.DATABASE);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

=======
var express = require('express');
const app = express(); 
var homePage = require ('./routes/router');
var connexion = require ('./routes/connexionRoute');

>>>>>>> main
app.use(express.static('view'));

app.use('/', homePage); 

<<<<<<< HEAD
//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './view/HomePage.html'));
});
=======
app.use('/co', connexion); 
>>>>>>> main

app.listen(3000, () => {

    console.log("listen on port 3000")
});

module.exports = app ;

