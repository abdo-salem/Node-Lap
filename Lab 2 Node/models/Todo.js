const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  status: {
    type: String,
    enum: ['new', 'inProgress', 'done'],
    default: 'new',
  },
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

const todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;
