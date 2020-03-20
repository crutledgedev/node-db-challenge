const express = require('express');
const ProjectsRouter = require('../data/projects-router');
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

server.get('/', (res, req) => {
    res.status(200).json({ message: 'basecamp is up'})
})

module.exports = server;