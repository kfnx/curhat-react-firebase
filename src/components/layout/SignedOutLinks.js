import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink style={{ padding: "0px 6px", fontSize: "0.9em" }} to="/signup">
          <b>Buat Akun</b>
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{ padding: "0px 6px", marginRight: "15px", fontSize: "0.9em" }}
          to="/signin"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
