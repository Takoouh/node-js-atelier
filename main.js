const http = require('http')
const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello Worldish');

});

server.listen(3000);

console.log('Adresse du serveur :https://localhost:3000')


const helloworld = require('./hello.js');
helloworld();