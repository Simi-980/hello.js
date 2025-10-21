const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port;

//serve a static HTML page 
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'static', 'index.html'))
   });

app.use(express.json()); 

app.post('/', (req, res) => { 
    console.log(req.body);
    res.json({ echoed: req.body });

    app.post("/user", (req, res) => {
        const { name, email } = req.body; 
        if (!name || !email) return res.status(400).json ({ error: "Missing fields"});
        res.status(201).json({ message: `Registered: ${name} (${email})` });
    });
});

app.get("/user/:id", (req, res) =>{
    res.json({ id: req.params.id, name: 'User [id] profile'});
});

app.get("/search", (req, res) => {
    const userid = req.query.id;
    console.log(id);
    res.send(id);
});

app.get('/', (req, res) => {
  res.send('My week 2 API!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});