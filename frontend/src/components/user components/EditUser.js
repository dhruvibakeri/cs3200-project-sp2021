import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      firstName: " ",
      lastName: " ",
      userName: " ",
      email: " ",
      password: " ",
      dateofBirth: " ",
      edited: false,
      deleted: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/editUser/" + this.props.match.params.id)
      .then((res) => {
        console.log(res.data[0].dateOfBirth);
        this.setState({
          firstName: res.data[0].firstName,
          lastName: res.data[0].lastName,
          userName: res.data[0].userName,
          email: res.data[0].email,
          password: res.data[0].password,
          dateofBirth: res.data[0].dateOfBirth,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  onChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  onChangeUserName(e) {
    this.setState({ userName: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeDOB(e) {
    this.setState({ dateofBirth: e.target.value });
  }

  deleteUser() {
    axios
      .delete("http://localhost:4000/deleteUser/" + this.props.match.params.id)
      .then((res) => {
        console.log("Usersuccessfully deleted!");
        this.setState({ deleted: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      dateofBirth: this.state.dateofBirth,
    };

    axios
      .put(
        "http://localhost:4000/updateUser/" + this.props.match.params.id,
        userObject
      )
      .then((res) => {
        this.setState({ edited: true });
        console.log("UPDATING", res.data);
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
          <h1 className="text-center display-4">Edit User</h1>
          <Link to={"/reviewsByUser/" + this.props.match.params.id}>
            <div className="buttonStyle">
              <button className="btn btn-success">Reviews By this User</button>
            </div>
          </Link>
        </div>

        <div className="center-content">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </div>
            <div class="form-group">
              <label for="userName">Username</label>
              <input
                type="text"
                class="form-control"
                id="userName"
                value={this.state.userName}
                onChange={this.onChangeUserName}
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input
                type="date"
                class="form-control"
                id="dob"
                value={this.state.dateofBirth}
                onChange={this.onChangeDOB}
              />
            </div>
            <div className="same-line-elements">
              {this.state.edited ? (
                <Link to="/users">
                  <button type="button" className="btn btn-success">
                    Go back to All Users
                  </button>
                </Link>
              ) : (
                <button type="submit" class="btn btn-primary">
                  Update
                </button>
              )}

              {this.state.deleted ? (
                <Link to="/users">
                  <button type="button" className="btn btn-success">
                    Go back to All Users
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deleteUser}
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
