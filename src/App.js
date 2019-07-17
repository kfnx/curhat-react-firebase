import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import DetailCurhat from "./components/curhat/DetailCurhat";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateCurhat from "./components/curhat/CreateCurhat";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/curhat/:id" component={DetailCurhat} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateCurhat} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
