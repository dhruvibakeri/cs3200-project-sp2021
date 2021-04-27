const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let reviewSchema = new Schema(
  {
    score: {
      type: Number,
    },
    comment: {
      type: String,
    },
    created: {
      type: Date,
    },
    user: {
      type: String,
    },
    restaurant: {
      type: String,
    },
  },
  { collection: "reviews" }
);

module.exports = reviewSchema;
