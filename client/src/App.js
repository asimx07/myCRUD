import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NewUser from "./components/layout/NewUser";
import Email_id from "./components/layout/Email_id";
import allprofiles from "./components/layout/allprofiles";
import UpdatebyMail from "./components/layout/UpdatebyMail";
import DeletebyID from "./components/layout/DeletebyID";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={NewUser} />
              <Route exact path="/email_id" component={Email_id} />
              <Route exact path="/delete" component={DeletebyID} />

              <Route exact path="/all" component={allprofiles} />
              <Route exact path="/update" component={UpdatebyMail} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
