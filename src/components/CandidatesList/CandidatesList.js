import React from "react";
import { useSelector } from "react-redux";

import "./CandidatesList.styles.scss";

import { CandidateCard } from "../CandidateCard/CandidateCard";

export const CandidatesList = () => {
  const list = useSelector((state) => state.candidatesList);

  return (
    <div className="candidatesList-container">
      {list.candidates.map((currentCandidate) => (
        <CandidateCard candidate={currentCandidate}></CandidateCard>
      ))}
    </div>
  );
};
