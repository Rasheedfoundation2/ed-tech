import React, { useState } from 'react';

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: '',
    jobType: 'Full-time'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', formData);
    alert('Job posted successfully!');
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" onChange={handleChange} />
        <select name="jobType" onChange={handleChange} value={formData.jobType}>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJobPage;
