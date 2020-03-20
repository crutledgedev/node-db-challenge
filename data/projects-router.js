const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessage: 'Error recovering data.' });
    });
  });
  
  router.get('/:id', validateProjectId, (req, res) => {
    Projects.getProjectById(req.params.id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Error retreiving project from database.'});
    });
});

 router.get('/:id/resources', validateProjectId, (req, res) => {
    Projects.getResources(req.params.id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: 'Error retreiving resources from database.' });
    });
  });



  router.get('/:id/tasks', validateProjectId, (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessage: 'Error retreiving tasks from database.' });
    });
  });






  //middleware for for ID validation

function validateProjectId(req, res, next) {
    let id = req.params.id;
    Projects.getProjectById(id)
      .then(project => {
        if(!project){
            res.status(404).json({ errorMessage: "Invalid project ID." })
        } else {
            next();
        }
      })
      .catch(err => {
        console.log(err)
      })
  };

module.exports = router;