import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ReviewViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getReviews").then((res) => {
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
          <h1 className="display-4 text-center">Reviews List</h1>
          <Link to="/reviews/createReview">
            <div className="buttonStyle">
              <button className="btn btn-success">Create A New Review</button>
            </div>
          </Link>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Rating</th>
              <th scope="col">Comment</th>
              <th scope="col">Date Posted</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => {
              return (
                <tr>
                  <td>{data.score}</td>
                  <td>{data.comment}</td>
                  <td>{data.created}</td>
                  <td>
                    <Link to={"/reviews/editReview/" + data._id}>
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
