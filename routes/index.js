var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/projects/eyetracker', function(req, res) {
  res.render('eyetracker');
});

module.exports = router;
