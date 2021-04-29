const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('view'));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, './view/HomePage.html'));

});
  

app.listen(port, () => {
    console.log(`listen on port ${port}`)
});
