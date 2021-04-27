const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = require("../schemas/reviewSchema");

const reviewModel = mongoose.model("reviews", reviewSchema);

const findAllReviews = () => reviewModel.find();

const findReviewsByUser = (user) => reviewModel.find({ user: user });

const findReviewsForRestaurant = (restaurant) =>
  reviewModel.find({ restaurant: restaurant });

const createReview = (review) => reviewModel.create(review);

const findReviewById = (reviewId) => reviewModel.find({ _id: reviewId });

const updateReview = (reviewId, review) =>
  reviewModel.updateOne({ _id: reviewId }, { $set: review });

const deleteReview = (reviewId) => reviewModel.remove({ _id: reviewId });

module.exports = {
  findAllReviews,
  findReviewsByUser,
  findReviewsForRestaurant,
  createReview,
  findReviewById,
  updateReview,
  deleteReview,
};
