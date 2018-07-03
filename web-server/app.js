const http = require('http');
const fs = require('fs');

// Send data using pipe
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content': 'text/html'
  });
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(1337, '127.0.0.1');


// Read data as html file
// http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content': 'text/html'
//   });
//   let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
//   let message = 'Hello World...';
//   html = html.replace('{Message}', message);
//   res.end(html);
// }).listen(1337, '127.0.0.1');
