const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello California');
});

app.get('/api/courses', (req, res) => {
  res.send([1,2,3,4]);
});

app.listen(3000, () => console.log('Listening on 3000'));
