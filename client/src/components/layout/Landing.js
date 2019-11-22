import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-3 mb-4">The Amazing CRUD</h1>
          <p className="lead"> Create | Read | Update | Delete </p>
          <hr />
          <Link to="/register" className="btn btn-lg btn-info mr-2">
            Create
          </Link>
          <Link to="/all" className="btn btn-lg btn-light mr-2">
            Read
          </Link>
          <Link to="/update" className="btn btn-lg btn-info mr-2">
            Update
          </Link>
          <Link to="/delete" className="btn btn-lg btn-light mr-2">
            Delete
          </Link>
        </div>
      </div>
    );
  }
}
export default Landing;
