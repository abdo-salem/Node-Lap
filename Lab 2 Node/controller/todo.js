const Todo = require('../models/Todo');
const create = (todo) => {
  return Todo.create(todo);
};
const getAll = () => Todo.find({}).exec();
const getbyId = () => Todo.findById(id).exec();
const editbyId = (id, body) =>
  Todo.findByIdAndUpdate(id, body, { new: true }).exec();
const deletbyId = () => Todo.deleteOne(id).exec();
module.exports = {
  create,
  getAll,
  getbyId,
  editbyId,
  deletbyId,
};
