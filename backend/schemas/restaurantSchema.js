const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let restaurantSchema = new Schema(
  {
    name: {
      type: String,
    },
    cuisine: {
      type: String,
    },
    pricePoint: {
      type: String,
      enum: ["$", "$$", "$$$", "$$$$"],
      default: "$$",
    },
  },
  { collection: "restaurants" }
);

module.exports = restaurantSchema;
