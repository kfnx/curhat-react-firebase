import React from "react";
import { Link } from "react-router-dom";
import { Navbar as NaviBar, Nav } from "react-bootstrap";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <NaviBar bg="light" expand="lg">
      <NaviBar.Brand href="#home">React-Bootstrap</NaviBar.Brand>
      <NaviBar.Toggle aria-controls="basic-navbar-nav" />
      <NaviBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{links}</Nav>
      </NaviBar.Collapse>
    </NaviBar>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
