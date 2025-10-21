const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware

app.post('/echo', (req, res) => { // Post Route
    res.json({ echoed: req.body }); // Means that the req.body is nw available 
});

app.get('/', (req, res) => {
  res.send('My week 2 API!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});