const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

app.post('/', (req, res) => { 
    console.log(req.body);
    res.json({ echoed: req.body });

});

app.get("/user/:id", (req, res) =>{
    const id = req.params.id 
    res.send("User[id]profile");
});

app.get('/', (req, res) => {
  res.send('My week 2 API!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});