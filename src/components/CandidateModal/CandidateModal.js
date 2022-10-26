import React, { useState } from "react";

import { FaRegTimesCircle } from "react-icons/fa";

import "./CandidateModal.styles.scss";

export const CandidateModal = ({ candidate, closeModal }) => {
  const [activeType, setActiveType] = useState("candidate");

  const getCandidateInfo = () => {
    return (
      <div className="completeInfo">
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">Name:</p>
          <p className="completeInfo-container-content">{candidate.name}</p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">Email:</p>
          <p className="completeInfo-container-content">{candidate.email}</p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">User name:</p>
          <p className="completeInfo-container-content">{candidate.username}</p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">Phone</p>
          <p className="completeInfo-container-content">{candidate.phone}</p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">City</p>
          <p className="completeInfo-container-content">
            {candidate.address.city}
          </p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">Website</p>
          <p className="completeInfo-container-content">{candidate.website}</p>
        </div>
      </div>
    );
  };

  const getCompanyInfo = () => {
    return (
      <div className="completeInfo">
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">Company Name:</p>
          <p className="completeInfo-container-content">
            {candidate.company.name}
          </p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">Company Atuation:</p>
          <p className="completeInfo-container-content">
            {candidate.company.bs}
          </p>
        </div>
        <div className="section-CompleteInfo">
          <p className="completeInfo-container-title">More About:</p>
          <p className="completeInfo-container-content">
            {candidate.company.catchPhrase}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="modal-container">
      <div className="candidate-modal">
        <div className="type-handler">
          <button
            className="type-handler-bttn"
            onClick={() => {
              setActiveType("candidate");
            }}
          >
            👩🏾Candidate
          </button>
          <button
            className="type-handler-bttn"
            onClick={() => {
              setActiveType("company");
            }}
          >
            🏢Company
          </button>
        </div>
        {activeType === "candidate" ? getCandidateInfo() : getCompanyInfo()}
        <div className="candidate-modal-close">
          <button
            className="close-container"
            onClick={() => {
              closeModal();
            }}
          >
            <FaRegTimesCircle
              style={{
                color: "#fad502",
                fontSize: "3.25rem",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
