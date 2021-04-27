import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateRestaurant extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCuisine = this.onChangeCuisine.bind(this);
    this.onChangePricePoint = this.onChangePricePoint.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: " ",
      cuisine: " ",
      pricePoint: "$",
      created: false,
    };
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

  onSubmit(e) {
    e.preventDefault();

    const restaurantObject = {
      name: this.state.name,
      cuisine: this.state.cuisine,
      pricePoint: this.state.pricePoint,
    };

    axios
      .post("http://localhost:4000/createRestaurant", restaurantObject)
      .then((res) => {
        console.log("CREATING", res);
        this.setState({ created: true });
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
          <h1 className="text-center display-4">Create Restaurant</h1>
          <Link to={"/restaurants"}>
            <div className="buttonStyle">
              <button className="btn btn-success">View All Restaurants</button>
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
              {this.state.created ? (
                <Link to="/restaurants">
                  <button className="btn btn-success">
                    Go back to All Restaurants
                  </button>
                </Link>
              ) : (
                <button type="submit" class="btn btn-primary">
                  Create
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
