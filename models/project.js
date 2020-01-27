var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
  {
    name: {type: String, required: true},
    tools: [String],
    summary: {type: String, required: true},
  }
);

ProjectSchema
.virtual('url')
.get(function () {
  return '/project/' + this.name;
});

//Export model
module.exports = mongoose.model('Project', ProjectSchema);