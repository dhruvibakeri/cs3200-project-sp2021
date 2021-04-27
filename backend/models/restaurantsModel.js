const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = require("../schemas/restaurantSchema");

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

const findAllRestaurants = () => restaurantModel.find();

const createRestaurant = (restaurant) => restaurantModel.create(restaurant);

const findRestaurantById = (restaurantId) =>
  restaurantModel.find({ _id: restaurantId });

const updateRestaurant = (restaurantId, restaurant) =>
  restaurantModel.updateOne({ _id: restaurantId }, { $set: restaurant });

const deleteRestaurant = (restaurantId) =>
  restaurantModel.remove({ _id: restaurantId });

module.exports = {
  findAllRestaurants,
  createRestaurant,
  findRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
