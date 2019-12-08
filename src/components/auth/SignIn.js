import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
        <br></br>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="text-center">Sign In</h5>
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
            <button className="btn btn-primary btn-block text-uppercase mb-2">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
