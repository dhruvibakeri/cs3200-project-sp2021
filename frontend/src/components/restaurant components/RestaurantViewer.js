import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class RestaurantViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getRestaurants").then((res) => {
      this.setState({
        data: res.data,
      });
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
          <h1 className="display-4 text-center">Restaurants List</h1>
          <Link to="/restaurants/createRestaurant">
            <div className="buttonStyle">
              <button className="btn btn-success">
                Create A New Restaurant
              </button>
            </div>
          </Link>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Cuisine</th>
              <th scope="col">Price Point</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.cuisine}</td>
                  <td>{data.pricePoint}</td>
                  <td>
                    <Link to={"/restaurants/editRestaurant/" + data._id}>
                      <button className="btn btn-dark">Edit</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
