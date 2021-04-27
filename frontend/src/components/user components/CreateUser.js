import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: " ",
      lastName: " ",
      userName: " ",
      email: " ",
      password: " ",
      dateofBirth: " ",
    };
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

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      dateOfBirth: this.state.dateofBirth,
      created: false,
    };

    axios
      .post("http://localhost:4000/createUser/", userObject)
      .then((res) => {
        console.log("CREATING", res.data);
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
          <h1 className="text-center display-4">Create A New User</h1>
          <Link to={"/users"}>
            <div className="buttonStyle">
              <button className="btn btn-success">View All Users</button>
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
              {this.state.created ? (
                <Link to="/users">
                  <button className="btn btn-success">
                    Go back to All Users
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
      </div>
    );
  }
}
