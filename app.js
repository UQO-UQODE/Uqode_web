var express = require('express');
const app = express(); 
var homePage = require ('./routes/router');
var connexion = require ('./routes/connexionRoute');

app.use(express.static('view'));

app.use('/', homePage); 

app.use('/co', connexion); 

app.listen(3000, () => {

    console.log("listen on port 3000")
});

module.exports = app ;

