import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container col-5">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="text-center">Sign Up</h5>
          <div className="form-group mb-3">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="form-control border-0 shadow-sm px-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control border-0 shadow-sm px-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="form-control border-0 shadow-sm px-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="form-control border-0 shadow-sm px-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <button className="btn btn-primary btn-block text-uppercase mb-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
