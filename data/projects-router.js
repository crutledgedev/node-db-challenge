const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (res, req) => {
    res.send(200).json({ message: 'basecamp is up'})
})




module.exports = router;