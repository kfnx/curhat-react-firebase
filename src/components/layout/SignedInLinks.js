import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/action/authActions";

const SignedInLinks = props => {
  const profileInitials = props.profile.pseudonym;
  return (
    <ul className="right">
      <li>
        <NavLink style={{ padding: "0px 6px", fontSize: "0.8em" }} to="/create">
          <b>Tulis Curhat</b>
        </NavLink>
      </li>
      <li>
        <a
          style={{ padding: "0px 6px", fontSize: "0.8em" }}
          onClick={props.signOut} href="/signin"
        >
          Logout
        </a>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating pink lighten-1"
          style={{ margin: "-2px 15px 0px 8px" }}
        >
          {profileInitials ? profileInitials[0] : "YOU"}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
