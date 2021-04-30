const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/db_connect')

//console.log(env.parsed.DATABASE);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('view'));


//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './view/HomePage.html'));
});

app.listen(3000, () => {
    console.log(`listen on port 3000`)
});
