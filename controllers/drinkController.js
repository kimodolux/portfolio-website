var Alcohol = require('../models/alcohol');
var Drink = require('../models/drink');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
var debug = require('debug')('drink');

//Display list of all drinks

exports.drink_list = function(req, res, next){
    
    Drink.find('name')
    .populate({}, 'alcohol')
    .exec(function(err, list_drink){
        if(err) { return next(err); }
        res.render('drink_list', { title: 'Drink List', drink_list: list_drink });
    });
};

exports.drink_detail = function(req, res, next){
    async.parallel({
        drink: function(callback) {
            Drink.findById(req.params.id)
              .populate('alcohol')
              .exec(callback);
        }
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.drink==null) { // No results.
            var err = new Error('Drink not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('drink_detail', {drink: results.drink} );
    });
}   