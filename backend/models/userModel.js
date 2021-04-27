const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = require("../schemas/userSchema");

const userModel = mongoose.model("users", userSchema);

const createUser = (user) => userModel.create(user);

const findAllUsers = () => userModel.find();

const findUserById = (userId) => userModel.find({ _id: userId });

const updateUser = (userId, user) =>
  userModel.updateOne({ _id: userId }, { $set: user });

const deleteUser = (userId) => userModel.remove({ _id: userId });

module.exports = {
  findAllUsers,
  findUserById,
  updateUser,
  createUser,
  deleteUser,
};
