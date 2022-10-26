import React, { useState } from "react";

import { FaExpand, FaRegSmileBeam } from "react-icons/fa";

import "./CandidateCard.styles.scss";

import { CandidateModal } from "../CandidateModal/CandidateModal";

export const CandidateCard = ({ candidate }) => {
  const [modal, setModal] = useState({
    isOpen: true,
    candidate,
  });

  console.log("candidate", candidate);

  return (
    <div className="candidateCard-container">
      <div className="moreInfo-container">
        <div className="buttonMore-info">
          <FaExpand />
        </div>
      </div>
      <div className="mainContent-container">
        <div className="photo-container">
          <div className="buttonSmile-photo">
            <FaRegSmileBeam
              style={{
                color: "black",
                fontSize: "2rem",
              }}
            />
          </div>
        </div>
        <div className="info-container">
          <div className="section-info">
            <p className="info-container-title">Name:</p>
            <p className="info-container-content">{candidate.name}</p>
          </div>
          <div className="section-info">
            <p className="info-container-title">Email:</p>
            <p className="info-container-content">{candidate.email}</p>
          </div>
          <div className="section-info">
            <p className="info-container-title">Company:</p>
            <p className="info-container-content">
              {candidate.company.catchPhrase}
            </p>
          </div>
        </div>
      </div>
      {modal.isOpen === true ? (
        <CandidateModal candidate={modal.candidate} />
      ) : null}
    </div>
  );
};
