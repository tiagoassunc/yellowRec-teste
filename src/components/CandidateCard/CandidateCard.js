import React from "react";

import "./CandidateCard.styles.scss";

export const CandidateCard = ({ candidate }) => {
  console.log("candidate", candidate);

  return <div className="candidateCard-container">{candidate.name}</div>;
};
