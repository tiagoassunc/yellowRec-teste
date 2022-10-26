import React from "react";
import { useSelector } from "react-redux";

import "./CandidateModal.styles.scss";

export const CandidateModal = (candidateId) => {
  const list = useSelector((state) => state.candidatesList);

  console.log("candidateId", candidateId);

  return (
    <div className="modal-container">
      <div className="candidate-modal"> teste</div>
    </div>
  );
};
