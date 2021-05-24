
const express = require('express');
const routes = require('./routes');
const connectDB = require('./db')
const cors = require('cors');


const server = express();
const port = 5000;
server.use(express.json());
server.use(cors())


connectDB()

server.use('/api/v1',routes)

server.listen(port,()=> console.log (`server is running at port ${port}......`))