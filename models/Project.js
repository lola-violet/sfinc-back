const { Schema, model } = require('mongoose');


// Schema to create Student model
const projectSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
      },
      location: {
        type: String,
      },
      description: {
        type: String,
      },
      challenge: {
        type: String,
      },
      solution: {
        type: String,
      },
      results: {
        type: String,
      },
    //   assignments: [assignmentSchema],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const Project = model('project', projectSchema);
  
  module.exports = Project;