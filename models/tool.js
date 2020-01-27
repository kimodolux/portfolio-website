var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ToolSchema = new Schema(
  {
    name: {type: String, required: true},
  }
);

//Export model
module.exports = mongoose.model('Tool', ToolSchema);