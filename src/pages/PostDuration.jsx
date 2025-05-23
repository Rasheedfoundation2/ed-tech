import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/PostDuration.css";

const PostDurationPage = () => {
  const [duration, setDuration] = useState('7');
  const navigate = useNavigate();
  const location = useLocation();
  const jobData = location.state?.jobData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...jobData, duration };
    console.log('Final Job Data:', finalData);
    alert(`Job will be posted for ${duration} days.`);
    // Here you would submit finalData to your server
  };

  return (
    <div className="post-duration-wrapper">
      <h2>Set Job Post Duration</h2>
      <form onSubmit={handleSubmit} className="duration-form">
        <label>
          <input
            type="radio"
            name="duration"
            value="7"
            checked={duration === '7'}
            onChange={(e) => setDuration(e.target.value)}
          />
          7 Days
        </label>

        <label>
          <input
            type="radio"
            name="duration"
            value="14"
            checked={duration === '14'}
            onChange={(e) => setDuration(e.target.value)}
          />
          14 Days
        </label>

        <label>
          <input
            type="radio"
            name="duration"
            value="30"
            checked={duration === '30'}
            onChange={(e) => setDuration(e.target.value)}
          />
          30 Days
        </label>

        <div className="duration-buttons">
          <button type="button" onClick={() => navigate(-1)} className="back-btn">Back</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostDurationPage;
