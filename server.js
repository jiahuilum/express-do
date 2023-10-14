const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.send(req.headers);
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));