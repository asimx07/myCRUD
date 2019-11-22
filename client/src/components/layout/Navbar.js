import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Amazing CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <Link className="nav-link" to="/register">
              {" "}
              New User
            </Link>
            <Link className="nav-link" to="/update">
              {" "}
              Update
            </Link>
            <Link className="nav-link" to="/delete">
              {" "}
              Delete
            </Link>
            <Link className="nav-link" to="/all">
              {" "}
              Show All
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
