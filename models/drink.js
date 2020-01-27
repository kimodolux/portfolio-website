var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DrinkSchema = new Schema(
  {
    name: {type: String, required: true},
    Alcohol: {type: Schema.Types.ObjectId, ref: 'Alcohol', required: true},
    summary: {type: String, required: true},
  }
);

DrinkSchema
.virtual('url')
.get(function () {
  return '/drinks/' + this._id;
});

//Export model
module.exports = mongoose.model('Drink', DrinkSchema);