import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class EditRestaurant extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCuisine = this.onChangeCuisine.bind(this);
    this.onChangePricePoint = this.onChangePricePoint.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);

    this.state = {
      name: " ",
      cuisine: " ",
      pricePoint: " ",
      deleted: false,
      edited: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/editRestaurant/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data[0].name,
          cuisine: res.data[0].cuisine,
          pricePoint: res.data[0].pricePoint,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeCuisine(e) {
    this.setState({ cuisine: e.target.value });
  }

  onChangePricePoint(e) {
    this.setState({ pricePoint: e.target.value });
  }

  deleteRestaurant() {
    axios
      .delete(
        "http://localhost:4000/deleteRestaurant/" + this.props.match.params.id
      )
      .then((res) => {
        console.log("successfully deleted!");
        this.setState({ deleted: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const restaurantObject = {
      name: this.state.name,
      cuisine: this.state.cuisine,
      pricePoint: this.state.pricePoint,
    };

    axios
      .put(
        "http://localhost:4000/updateRestaurant/" + this.props.match.params.id,
        restaurantObject
      )
      .then((res) => {
        this.setState({ edited: true });
        console.log("UPDATING", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="same-line-elements">
          <Link to="/">
            <div className="buttonStyle">
              <button className="btn btn-dark">Home Page</button>
            </div>
          </Link>
          <h1 className="text-center display-4">Edit Restaurant</h1>
          <Link to={"/reviewsForRes/" + this.props.match.params.id}>
            <div className="buttonStyle">
              <button className="btn btn-success">
                Reviews For this Restaurant
              </button>
            </div>
          </Link>
        </div>

        <div className="center-content">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="name">Name of Restaurant</label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div class="form-group">
              <label for="cuisine">Cuisine</label>
              <input
                type="text"
                class="form-control"
                id="cuisine"
                value={this.state.cuisine}
                onChange={this.onChangeCuisine}
              />
            </div>
            <div class="form-group">
              <label for="pricePoint">pricePoint</label>
              <select
                id="pricePoint"
                class="form-control"
                value={this.state.pricePoint}
                onChange={this.onChangePricePoint}
                name="pricePoint"
              >
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
              </select>
            </div>
            <div className="same-line-elements">
              {this.state.edited ? (
                <Link to="/restaurants">
                  <button type="button" className="btn btn-success">
                    Go back to All Restaurants
                  </button>
                </Link>
              ) : (
                <button type="submit" class="btn btn-primary">
                  Update
                </button>
              )}

              {this.state.deleted ? (
                <Link to="/restaurants">
                  <button type="button" className="btn btn-success">
                    Go back to All Restaurants
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deleteRestaurant}
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>

        <br />
        <br />
      </div>
    );
  }
}
