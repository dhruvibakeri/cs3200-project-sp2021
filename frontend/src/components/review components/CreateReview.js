import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateReview extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeScore = this.onChangeScore.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeDatePosted = this.onChangeDatePosted.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeRestaurant = this.onChangeRestaurant.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      score: 0,
      comment: " ",
      created: " ",
      user: " ",
      restaurant: " ",
      allUsers: [],
      allRestaurants: [],
      createdReview: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getRestaurants").then((res) => {
      this.setState({
        allRestaurants: res.data,
      });
    });

    axios.get("http://localhost:4000/getUsers").then((res) => {
      this.setState({
        allUsers: res.data,
      });
    });
  }

  onChangeScore(e) {
    this.setState({ score: e.target.value });
  }

  onChangeComment(e) {
    this.setState({ comment: e.target.value });
  }

  onChangeDatePosted(e) {
    this.setState({ created: e.target.value });
  }

  onChangeUser(e) {
    this.setState({ user: e.target.value });
  }

  onChangeRestaurant(e) {
    this.setState({ restaurant: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const reviewObject = {
      score: this.state.score,
      comment: this.state.comment,
      created: this.state.created,
      user: this.state.user,
      restaurant: this.state.restaurant,
    };

    axios
      .post("http://localhost:4000/createReview", reviewObject)
      .then((res) => {
        console.log("CREATING", res);
        this.setState({ createdReview: true });
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
          <h1 className="text-center display-4">Create Review</h1>
          <Link to={"/reviews"}>
            <div className="buttonStyle">
              <button className="btn btn-success">View All Reviews</button>
            </div>
          </Link>
        </div>

        <div className="center-content">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="score">Review Score</label>
              <input
                type="text"
                class="form-control"
                id="score"
                value={this.state.score}
                onChange={this.onChangeScore}
              />
            </div>
            <div class="form-group">
              <label for="comment">Comment</label>
              <input
                type="text"
                class="form-control"
                id="comment"
                value={this.state.comment}
                onChange={this.onChangeComment}
              />
            </div>
            <div class="form-group">
              <label for="created">Date Posted</label>
              <input
                id="created"
                type="date"
                class="form-control"
                value={this.state.created}
                onChange={this.onChangeDatePosted}
              />
            </div>
            <div class="form-group">
              <label for="user">Created By User</label>
              <select
                id="user"
                class="form-control"
                value={this.state.user}
                onChange={this.onChangeUser}
                name="user"
              >
                {this.state.allUsers.map((data) => {
                  console.log(data);
                  return (
                    <option value={data._id}>
                      {data.firstName + data.lastName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="form-group">
              <label for="restaurant">Created For Restaurant</label>
              <select
                id="restaurant"
                class="form-control"
                value={this.state.restaurant}
                onChange={this.onChangeRestaurant}
                name="restaurant"
              >
                {this.state.allRestaurants.map((data) => {
                  console.log(data);
                  return <option value={data._id}>{data.name}</option>;
                })}
              </select>
            </div>
            <div className="same-line-elements">
              {this.state.createdReview ? (
                <Link to="/reviews">
                  <button className="btn btn-success">
                    Go back to All Reviews
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
