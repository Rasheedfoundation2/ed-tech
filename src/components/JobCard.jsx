import React from "react";
import "../css/JobCard.css";

const JobCard = ({ title, company, location, type, salary }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="details">
        <span>{location}</span> | <span>{type}</span>
      </p>
      <p className="salary">{salary}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobCard;
