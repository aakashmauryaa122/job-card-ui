import React, { useState } from "react";
import "./JobCard.css";

const JobCard = ({ user }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="job-card">
      <div className="top-section">
        <img
          src={`https://logo.clearbit.com/${user.company.website}`}
          alt={user.company.name}
          className="company-logo"
        />

        <button
          className={`save-button ${isSaved ? "saved" : ""}`}
          onClick={handleSave}
        >
          {isSaved ? "Saved" : "Save"}
          <span className="material-symbols-outlined save-icon">bookmark</span>
        </button>
      </div>

      <h4 className="user-company">{user.company.name}</h4>
      <h2 className="user-info">{user.name}</h2>

      <div className="job-details">
        <span className="badge job-type">Full-time</span>
        <span className="badge experience-level">Senior level</span>
      </div>

      <hr />

      <div className="salary-location-wrapper">
        <div>
          <div className="user-salary">${user.salary}/hr</div>
          <div className="city-location">
            {user.address.street}, {user.address.city}
          </div>
        </div>

        <div className="button">
          <button
            className="apply-button"
            onClick={() => window.open(`https://${user.website}`, "_blank")}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
