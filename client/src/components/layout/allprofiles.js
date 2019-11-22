import React, { Component } from "react";
import axios from "axios";
class allprofiles extends Component {
  // initially data is empty in state
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // when component mounted, start a GET request
    // to specified URL
    axios
      .get("/api/profile/all")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log({ errors: err.response.data }));
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.data.map(function(item, key) {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  //   constructor() {
  //     super();
  //     this.state = {
  //       name: "",
  //       email: "",
  //       contact: "",
  //       address: "",
  //       age: "",
  //       errors: {}
  //     };
  //   }
  //   componentDidMount() {
  //     axios
  //       .get("/api/profile/all")
  //       .then(res => {
  //         console.log(res.data);
  //         this.setState({ result: res.data });
  //       })
  //       .catch(err => console.log({ errors: err.response.data }));
  //     //     const newUser = {
  //     //     name: this.state.name,
  //     //     email: this.state.email,
  //     //     contact: this.state.contact,
  //     //     address: this.state.address,
  //     //     age: this.state.age
  //     //   };
  //   }

  //   render() {
  //     const result = this.state.result;
  //     return (
  //       <div className="profile">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-md-12">{result}</div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
}
export default allprofiles;
