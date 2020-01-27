var express = require('express');
var router = express.Router();

var alcohol_controller = require('../controllers/alcoholController');
var drink_controller = require('../controllers/drinkController');

router.get('/', alcohol_controller.index);

//Drink List
router.get('/drink', drink_controller.drink_list);

//Alcohol List
router.get('/alcohol', alcohol_controller.alcohol_list);

//Drink Detail Page
router.get('/drink/:id', drink_controller.drink_detail);

//Alcohol Detail Page
router.get('/alcohol/:id', alcohol_controller.alcohol_detail);

module.exports = router;