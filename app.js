var express = require('express');
const app = express();

var homePage = require ('./routes/router');



app.use('/', homePage); 

app.use(express.static('view'));

app.listen(3000, () => {

    console.log("listen on port 3000")
});

module.exports = app ;

