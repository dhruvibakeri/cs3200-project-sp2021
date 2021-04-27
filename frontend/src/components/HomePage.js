import React, { Component } from "react";
import { Link } from "react-router-dom";
import users from "../images/users.png";
import restaurants from "../images/restaurants.png";
import reviews from "../images/reviews.png";

export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 bgUsers">
          <div className="center-content">
            <img width="100%" src={users}></img>
          </div>
          <div className="center-content">
            <Link to="/users">
              <button className="btn btn-dark btn-lg">View All Users</button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 bgRestaurants">
          <div className="center-content">
            <img width="100%" src={restaurants}></img>
          </div>
          <div className="center-content">
            <Link to="/restaurants">
              <button className="btn btn-dark btn-lg">
                View All Restaurants
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 bgReviews">
          <div className="center-content">
            <img width="100%" src={reviews}></img>
          </div>
          <div className="center-content">
            <Link to="/reviews">
              <button className="btn btn-dark btn-lg">View All Reviews</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
