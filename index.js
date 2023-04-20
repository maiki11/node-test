const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello this changes are uploaded on the instance, test 22!\n');
});

app.get('/newEndpoint', (req, res) => {
  res.send('My new endpoint!\n');
});

app.listen(80, '0.0.0.0');