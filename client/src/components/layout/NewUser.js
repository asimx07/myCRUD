import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contact: "",
      address: "",
      age: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      address: this.state.address,
      age: this.state.age
    };
    console.log({ msg: newUser });
    axios
      .post("/api/profile/register", newUser)
      .then(res => {
        console.log(res.data);
        // this.props.history.push("/User-Added");
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
        //this.props.history.push("/Not-Found");
      });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Record</h1>
              <p className="lead text-center">Enter User Record</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="contact"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.contact
                    })}
                    placeholder="Phone Number"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.onChange}
                  />
                  {errors.contact && (
                    <div className="invalid-feedback">{errors.contact}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="address"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.address
                    })}
                    placeholder="Address line"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="age"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.age
                    })}
                    placeholder="Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                  {errors.age && (
                    <div className="invalid-feedback">{errors.age}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewUser;
