import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class ReviewsByUser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/getReviews/" + this.props.match.params.id)
      .then((res) => {
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
          <h1 className="text-center display-4">Reviews By User</h1>
          <Link to={"/users"}>
            <div className="buttonStyle">
              <button className="btn btn-success">View All Users</button>
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
