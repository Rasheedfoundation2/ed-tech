
import "../css/JobCard.css";

// components/JobCard.js
import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="logo-wrapper">
        {job.logo && (
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="company-logo"
          />
        )}
      </div>
      <h4>{job.title}</h4>
      <p>{job.company}</p>
      <p>{job.location} | {job.type}</p>
      <p className="salary">{job.salary}</p>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
