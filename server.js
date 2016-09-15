var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('<h1>Hello World</h1>');
  res.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/');