const app = require('express')();
const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Primer servidor con Node.Js');
});
app.get('/', (req, res) => {
  res.send('Hello this changes are uploaded on the instance!\n');
});

app.get('/newEndpoint', (req, res) => {
  res.send('My new endpoint...!\n');
});

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
app.listen(3000, 'localhost');