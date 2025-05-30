import React from "react";
import "./JobApplications.css";

const stages = [
  "Application Received",
  "Phone Interview",
  "In-Person Interview",
  "Rejected",
];

const applicants = [
  {
    id: 1,
    name: "Alice Johnson",
    status: "In-Person Interview",
  },
  {
    id: 2,
    name: "Bob Smith",
    status: "Phone Interview",
  },
  {
    id: 3,
    name: "Charlie Brown",
    status: "Application Received",
  },
  {
    id: 4,
    name: "Diana Prince",
    status: "Rejected",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    status: "Phone Interview",
  },
];

// Get the index of a status in stages array
const getStatusIndex = (status) => stages.indexOf(status);

const JobApplications = () => {
  return (
    <div className="job-applications-container">
      <h1>Applicant Progress Tracker</h1>
      <div className="applicants-list">
        {applicants.map((applicant) => {
          const currentIndex = getStatusIndex(applicant.status);

          return (
            <div key={applicant.id} className="applicant-card">
              <h3>{applicant.name}</h3>
              <div className="progress-bar">
                {stages.map((stage, index) => {
                  const isActive = index === currentIndex;
                  const isCompleted = index < currentIndex;

                  return (
                    <React.Fragment key={stage}>
                      <div
                        className={`stage ${isCompleted ? "completed" : ""} ${
                          isActive ? "active" : ""
                        }`}
                        title={stage}
                      >
                        {stage}
                      </div>

                      {/* Show arrow between stages except after last one */}
                      {index < stages.length - 1 && (
                        <div
                          className={`arrow ${
                            index < currentIndex ? "arrow-active" : ""
                          }`}
                        >
                          →
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="current-status">Current Status: {applicant.status}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobApplications;
