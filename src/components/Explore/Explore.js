import React from "react";

import "./Explore.styles.scss";

import { CandidatesList } from "../CandidatesList/CandidatesList";

export const Explore = () => {
  return (
    <div className="explore-container">
      <div className="yellowRec-container">
        <div className="list-title">Recruiting can be easier!</div>
        <div className="list-description">
          💛 Recruit quickly and right with Yellow.
        </div>
      </div>
      <CandidatesList />
    </div>
  );
};
