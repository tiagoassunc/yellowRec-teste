import React from "react";

import { FaExpand, FaRegSmileBeam } from "react-icons/fa";

import "./CandidateCard.styles.scss";

export const CandidateCard = ({ candidate }) => {
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
      </div>
    </div>
  );
};
