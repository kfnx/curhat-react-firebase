import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <Link
            to="/"
            className="brand-logo left"
            style={{ marginLeft: "20px" }}
          >
            Curhat
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)(Navbar);
