const { createServer } = require('server');
const { buildClient } = require('client');

buildClient(); // build client bundle

const server = createServer(); // start server

server.listen(process.env.PORT); 
