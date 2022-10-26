import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./CandidatesList.styles.scss";

import { CandidateCard } from "../CandidateCard/CandidateCard";

export const CandidatesList = () => {
  const list = useSelector((state) => state.candidatesList);

  const { v4: uuid } = require("uuid");

  return (
    <div className="candidatesList-container">
      {list.candidates.map((currentCandidate) => (
        <CandidateCard
          key={uuid()}
          candidate={currentCandidate}
        ></CandidateCard>
      ))}
    </div>
  );
};
