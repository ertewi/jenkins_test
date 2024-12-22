const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('123456789 This is a test application.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
