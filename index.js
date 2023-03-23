const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello, Jenkins!\n');
});

app.get('/newEndpoint', (req, res) => {
  res.send('My new endpoint...!\n');
});

app.listen(3000, '0.0.0.0');