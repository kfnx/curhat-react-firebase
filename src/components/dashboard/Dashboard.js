import React, { Component } from "react";
import Notifications from "./Notifications";
import ListCurhat from "../curhat/ListCurhat";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { curhats, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <ListCurhat curhats={curhats} />
          </div>
          <div className="col s12 m4">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    curhats: state.firestore.ordered.curhats,
    auth: state.firebase.auth
  };
};

// export default connect(mapStateToProps)(Dashboard);
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "curhats" }])
)(Dashboard);
