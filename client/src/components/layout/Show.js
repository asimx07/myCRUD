import React, { Component } from "react";

class Show extends Component {
  render() {
    const { profile, response } = this.props;
    console.log({ show: response });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">{response.name}</p>
            <p className="lead text-center">{response.email}</p>
            <p className="lead text-center">{response.contact}</p>
            <p className="lead text-center">{response.address}</p>
            <p className="lead text-center">{response.age}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Show;
