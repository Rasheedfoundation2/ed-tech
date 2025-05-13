import React, { useState } from "react";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import { useJobContext } from "../context/JobContext";
import "../css/joblist.css";

function JobList() {
  const [filters, setFilters] = useState({ location: "", type: "" });
   const { jobs } = useJobContext();
  //const jobs = [
  //{ title: "Software Developer", company: "Amazon", location: "Hyderabad, India", type: "Full-Time", salary: "₹6 - ₹8 LPA" },
  //  { title: "Junior Web Developer", company: "Jio", location: "Mumbai, India",   type: "Remote", salary: "₹8 - ₹12 LPA" },
  //  { title: "Data Analyst", company: "Cognizant", location: "Pune, India",       type: "Full-Time", salary: "₹5 - ₹7 LPA" },
  //  { title: "Frontend Engineer Intern", company: "Bread Financial", location: "Remote", type: "Internship", salary: "₹15,000/month" },
  //  { title: "Backend Developer", company: "Coforge", location: "Noida, India", type: "Full-Time", salary: "₹6 - ₹9 LPA" },
  //];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (filters.location === "" || job.location === filters.location) &&
      (filters.type === "" || job.type === filters.type)
  );

  return (
    <div className="main-layout">
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <div className="job-results">
        <h2>Latest Job Openings</h2>
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job, i) => <JobCard key={i} {...job} />)
        )}
      </div>
    </div>
  );
}

export default JobList;
