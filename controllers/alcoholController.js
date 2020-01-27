var Drink = require('../models/drink');
var Alcohol = require('../models/alcohol');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
var debug = require('debug')('alcohol');

/* GET home page. */
exports.index = function(req, res) {   
    res.render('index', {Name: 'Welcome to the Bar'});
}; 

// Display list of all Alcohols.
exports.alcohol_list = function(req, res, next) {

    Alcohol.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_alcohol) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('alcohol_list', { title: 'Alcohol List', alcohol_list: list_alcohol});
      });
  
  };

// Display detail page for a specific Alcohol.
exports.alcohol_detail = function(req, res, next) {

    async.parallel({
       alcohol: function(callback) {
            Alcohol.findById(req.params.id)
              .exec(callback)
        },
        alcohol_drinks: function(callback) {
          Alcohol.find({ 'alcohol': req.params.id },'name')
          .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.alcohol==null) { // No results.
            var err = new Error('Alcohol not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('alcohol_detail', { name: 'Alcohol Detail', alcohol_drinks: results.alcohol_drinks } );
    });

};







