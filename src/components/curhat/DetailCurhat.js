import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const DetailCurhat = props => {
  console.log(props);
  const { curhat, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (curhat) {
    return (
      <div className="container section project-detail">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{curhat.title}</span>
            <p>{curhat.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>curhatan by {curhat.authorPseudonym}</div>
            <div>{moment(curhat.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">Loading project..</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const curhats = state.firestore.data.curhats;
  const curhat = curhats ? curhats[id] : null;
  return {
    curhat: curhat,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "curhats" }])
)(DetailCurhat);
