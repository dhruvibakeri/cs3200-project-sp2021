import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class EditReview extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeScore = this.onChangeScore.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeDatePosted = this.onChangeDatePosted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteReview = this.deleteReview.bind(this);

    this.state = {
      score: 0,
      comment: " ",
      created: " ",
      user: " ",
      restaurant: " ",
      deleted: false,
      edited: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/editReview/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          score: res.data[0].score,
          comment: res.data[0].comment,
          created: res.data[0].created,
          user: res.data[0].user,
          restaurant: res.data[0].restaurant,
        });
      })
      .catch((error) => {
        console.log(error);
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

  deleteReview() {
    axios
      .delete(
        "http://localhost:4000/deleteReview/" + this.props.match.params.id
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

    const reviewObject = {
      score: this.state.score,
      comment: this.state.comment,
      created: this.state.created,
      user: this.state.user,
      restaurant: this.state.restaurant,
    };

    axios
      .put(
        "http://localhost:4000/updateReview/" + this.props.match.params.id,
        reviewObject
      )
      .then((res) => {
        console.log("UPDATING", res);
        this.setState({ edited: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="same-line-elements">
          <h1 className="text-center display-4">Edit Review</h1>

          <Link to={"/users/editUser/" + this.state.user}>
            <div className="buttonStyle">
              <button className="btn btn-success">Go to User's page</button>
            </div>
          </Link>
          <Link to={"/restaurants/editRestaurant/" + this.state.restaurant}>
            <div className="buttonStyle">
              <button className="btn btn-success">
                Go to Restaurant's page
              </button>
            </div>
          </Link>
          <Link to="/">
            <div className="buttonStyle">
              <button className="btn btn-dark">Home Page</button>
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
            <div className="same-line-elements">
              {this.state.edited ? (
                <Link to="/reviews">
                  <button type="button" className="btn btn-success">
                    Go back to All Reviews
                  </button>
                </Link>
              ) : (
                <button type="submit" class="btn btn-primary">
                  Update
                </button>
              )}

              {this.state.deleted ? (
                <Link to="/reviews">
                  <button type="button" className="btn btn-success">
                    Go back to All Reviews
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deleteReview}
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
