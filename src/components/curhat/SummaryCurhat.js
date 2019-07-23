import React from "react";
import moment from "moment";

const SummaryCurhat = ({ curhat }) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{curhat.title}</span>
        <p>Curhatan dari {curhat.authorPseudonym}</p>
        <p className="grey-text">
          {moment(curhat.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default SummaryCurhat;
