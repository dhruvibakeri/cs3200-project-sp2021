import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import UserViewer from "./user components/UserViewer";
import RestaurantViewer from "./restaurant components/RestaurantViewer";
import ReviewViewer from "./review components/ReviewViewer";
import EditUser from "./user components/EditUser";
import CreateUser from "./user components/CreateUser";
import ReviewsByUser from "./user components/ReviewsByUser";
import EditRestaurant from "./restaurant components/EditRestaurant";
import CreateRestaurant from "./restaurant components/CreateRestaurant";
import ReviewsForRestaurant from "./restaurant components/ReviewsForRestaurant";
import EditReview from "./review components/EditReview";
import CreateReview from "./review components/CreateReview";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/users" exact={true} component={UserViewer} />
          <Route path="/users/editUser/:id" exact={true} component={EditUser} />
          <Route path="/users/createUser" exact={true} component={CreateUser} />
          <Route
            path="/restaurants"
            exact={true}
            component={RestaurantViewer}
          />
          <Route
            path="/restaurants/editRestaurant/:id"
            exact={true}
            component={EditRestaurant}
          />
          <Route
            path="/restaurants/createRestaurant"
            exact={true}
            component={CreateRestaurant}
          />
          <Route path="/reviews" exact={true} component={ReviewViewer} />
          <Route
            path="/reviews/editReview/:id"
            exact={true}
            component={EditReview}
          />
          <Route
            path="/reviewsByUser/:id"
            exact={true}
            component={ReviewsByUser}
          />
          <Route
            path="/reviewsForRes/:id"
            exact={true}
            component={ReviewsForRestaurant}
          />
          <Route
            path="/reviews/createReview"
            exact={true}
            component={CreateReview}
          />
        </div>
      </BrowserRouter>
    );
  }
}
