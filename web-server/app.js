const http = require('http');
const fs = require('fs');

// Handle paths
http.createServer(function(req, res) {
  if (req.url === '/') {
    console.log('Hitting the home path');
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  if (req.url === '/api') {
    res.writeHead(200, {
      'Content': 'application/json'
    });
    const obj = {
      firstName: 'John',
      lastName: 'Doe'
    };
    res.end(JSON.stringify(obj));
  };
  res.writeHead(404);
  res.end();
}).listen(1337, '127.0.0.1');
