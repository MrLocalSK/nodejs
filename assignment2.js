const express = require('express')
const data = require('./input.json')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send(data)
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});