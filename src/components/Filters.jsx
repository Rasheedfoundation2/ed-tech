import React from "react";
import "../css/Filters.css";

const Filters = ({ filters, onFilterChange }) => {
    return (
        <div className="filters-box">
            <h3>Filter Jobs</h3>
            <label>Location</label>
            <select name="location" value={filters.location} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
            </select>

            <label>Job Type</label>
            <select name="type" value={filters.type} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
            </select>
            <label>Experience</label>
            <select name="experience" value={filters.experience} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="Fresher">Fresher</option>
                <option value="Mid">Mid-Level</option>
                <option value="Senior">Senior</option>
            </select>

            <label>Salary</label>
            <select name="salary" value={filters.salary} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="0-5">₹0 - ₹5L</option>
                <option value="5-10">₹5L - ₹10L</option>
                <option value="10+">₹10L+</option>
            </select>

            <label>Company Type</label>
            <select name="companyType" value={filters.companyType} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="Startup">Startup</option>
                <option value="MNC">MNC</option>
            </select>
        </div>


    );
};

export default Filters;
