import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UserViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getUsers").then((res) => {
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
          <h1 className="display-4 text-center">Users List</h1>
          <Link to="/users/createUser">
            <div className="buttonStyle">
              <button className="btn btn-success">Create A New User</button>
            </div>
          </Link>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date of Birth</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => {
              return (
                <tr>
                  <td>{data.userName}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.dateOfBirth}</td>
                  <td>
                    <Link to={"/users/editUser/" + data._id}>
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
