var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AlcoholSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 300},
    //picture: {type: ,}
  }
);


// Virtual for author's URL
AlcoholSchema
.virtual('url')
.get(function () {
  return '/alcohol/' + this._id;
});

//Export model
module.exports = mongoose.model('Alcohol', AlcoholSchema);