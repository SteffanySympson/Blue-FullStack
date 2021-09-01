const http = require('http');
//console.log(http);

http.createServer(function(req, res) {
    res.end('<h1>Oi vc ai</h1>')
}).listen(3000);

console.log('Meu servidor ta rodando');
