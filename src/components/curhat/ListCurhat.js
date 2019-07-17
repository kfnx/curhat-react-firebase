import React from "react";
import SummaryCurhat from "./SummaryCurhat";
import { Link } from "react-router-dom";

const ListCurhat = ({ curhats }) => {
  return (
    <div className="project-list section">
      {curhats &&
        curhats.map(curhat => {
          return (
            <Link to={"/curhat/" + curhat.id} key={curhat.id}>
              <SummaryCurhat curhat={curhat} />
            </Link>
          );
        })}
    </div>
  );
};

export default ListCurhat;
