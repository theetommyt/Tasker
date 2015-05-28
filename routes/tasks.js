var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

/* GET all tasks */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks){
    res.json(tasks);
  });
});

///// GET /api/tasks/:id
router.get('/:id', function(req, res, next){
  Task.findById(req.params.id, function(err, task){
    res.json(task);
  });
});

/// POST new
router.post('/', function(req, res, next){
  console.log(req.body);
  Task.create(req.body, function(err, task){
    res.json(task);
  });
});

router.put('/:id', function(req, res, next){
  Task.findByIdAndUpdate(req.params.id, req.body, function(err, task){
    res.json({"message": "Your task updated"});
  });
});


/////Delete by ID
router.delete('/:id', function(req, res, next){
  Task.findByIdAndRemove(req.params.id, req.body, function(err, task){
    res.send("Your task is gone ninja!");
  });
} );

module.exports = router;
