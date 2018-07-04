var http = require('http');
http.createServer(function handler(req, res){
    res.writeHead(200, {'Content-Tpye': 'text/plain'});
    res.end("hello world\n");
}).listen(1337);
console.log("Server running at https://127.0.0.1");


