const express = require("express");
const app = express();
const cors = require("cors");
let bodyParser = require("body-parser");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/yelp_reviews", {
  useNewUrlParser: true,
});

const router = express.Router();

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/", router);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

// ------------------------------- USERS DAO -------------------------------
let usersDao = require("./models/userModel");

router.route("/getUsers").get(function (req, res) {
  usersDao.findAllUsers().then((users) => {
    res.send(users);
  });
});

router.route("/editUser/:id").get((req, res) => {
  usersDao.findUserById(req.params.id).then((user) => {
    res.send(user);
  });
});

router.route("/updateUser/:id").put((req, res) => {
  usersDao.updateUser(req.params.id, req.body).then((user) => {
    res.send(user);
  });
});

router.route("/createUser").post((req, res) => {
  usersDao.createUser(req.body).then((user) => {
    res.send(user);
  });
});

router.route("/deleteUser/:id").delete((req, res) => {
  usersDao.deleteUser(req.params.id).then((user) => {
    res.send(user);
  });
});

// ------------------------------- RESTAURANTS DAO -------------------------------
let restaurantsDao = require("./models/restaurantsModel");

router.route("/getRestaurants").get(function (req, res) {
  restaurantsDao.findAllRestaurants().then((restaurants) => {
    res.send(restaurants);
  });
});

router.route("/editRestaurant/:id").get((req, res) => {
  restaurantsDao.findRestaurantById(req.params.id).then((restaurant) => {
    res.send(restaurant);
  });
});

router.route("/updateRestaurant/:id").put((req, res) => {
  restaurantsDao
    .updateRestaurant(req.params.id, req.body)
    .then((restaurant) => {
      console.log(restaurant);
      res.send(restaurant);
    });
});

router.route("/createRestaurant").post((req, res) => {
  restaurantsDao.createRestaurant(req.body).then((restaurant) => {
    res.send(restaurant);
  });
});

router.route("/deleteRestaurant/:id").delete((req, res) => {
  restaurantsDao.deleteRestaurant(req.params.id).then((restaurant) => {
    res.send(restaurant);
  });
});

// ------------------------------- REVIEWS DAO -------------------------------

let reviewsDao = require("./models/reviewsModel");

router.route("/getReviews").get(function (req, res) {
  reviewsDao.findAllReviews().then((reviews) => {
    res.send(reviews);
  });
});

router.route("/getReviews/:user").get((req, res) => {
  reviewsDao.findReviewsByUser(req.params.user).then((reviews) => {
    res.send(reviews);
  });
});

router.route("/getReviewsForRes/:restaurant").get((req, res) => {
  reviewsDao.findReviewsForRestaurant(req.params.restaurant).then((reviews) => {
    res.send(reviews);
  });
});

router.route("/editReview/:id").get((req, res) => {
  reviewsDao.findReviewById(req.params.id).then((review) => {
    res.send(review);
  });
});

router.route("/updateReview/:id").put((req, res) => {
  reviewsDao.updateReview(req.params.id, req.body).then((review) => {
    res.send(review);
  });
});

router.route("/createReview").post((req, res) => {
  reviewsDao.createReview(req.body).then((review) => {
    res.send(review);
  });
});

router.route("/deleteReview/:id").delete((req, res) => {
  reviewsDao.deleteReview(req.params.id).then((review) => {
    res.send(review);
  });
});
