const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ data: 'This is my Data!!!' });
});

app.listen(8080, () => {
  console.log('Server Started!!!');
});
