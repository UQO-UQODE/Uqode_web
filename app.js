const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('view'));

app.get('/', (req, res) => {

    res.sendFile('/HomePage.html')
   // res.render('/HomePage.html')
   console.log('dans app.get')
});
  

app.listen(port, () => {
    console.log(`listen on port ${port}`)
});
