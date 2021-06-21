const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const asyncSign = promisify(jwt.sign);

const User = require('../models/User');
const create = (user) => {
  return User.create(user);
};
const getAll = () => User.find({}).exec();
const editbyId = (id, body) =>
  User.findByIdAndUpdate(id, body, { new: true }).exec();
const login = async ({ username, password }) => {
  const user = await User.findOne({ username }).exec();
  if (!user) {
    throw Error('Wrong pass and username');
  }
  const ValidPass = user.validatePassword(password);
  if (!ValidPass) {
    throw Error('Wrong pass and username');
  }
  const token = await asyncSign(
    {
      username: user.username,
      id: user.id,
    },
    'SECRET_MUST_BE_COMPLEX',
    { expiresIn: '1d' }
  );
  return { ...user.toJSON(), token };
};
const deletbyId = () => User.deleteOne(id).exec();

module.exports = {
  create,
  getAll,
  editbyId,
  login,
  deletbyId,
};
