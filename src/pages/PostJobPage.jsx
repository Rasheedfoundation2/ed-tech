import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/PostJobPage.css';

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    employer: '',
    website: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    description: '',
    logo: null,
  });

  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      logo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Job posted successfully!');
    console.log('Job Submitted:', formData);
  };

  const handleNextStep = () => {
    navigate('/PostDuration', { state: { jobData: formData } });
  };

  return (
    <div className="post-job-wrapper">
      <div className="form-section">
        <h2 className="form-heading">Post a Job</h2>
        <form className="post-job-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Job Title</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />

          <label>Employer Name</label>
          <input type="text" name="employer" value={formData.employer} onChange={handleChange} required />

          <label>Employer Website</label>
          <input type="url" name="website" value={formData.website} onChange={handleChange} />

          <label>Address Line 1</label>
          <input type="text" name="address1" value={formData.address1} onChange={handleChange} />

          <label>Address Line 2</label>
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} />

          <div className="city-state-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} />
            </div>
          </div>

          <label>Zip Code</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} />

          <label>Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />

          <label>Job Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />

          <label>Upload Employer Logo</label>
          <input type="file" name="logo" accept="image/*" onChange={handleFileChange} />

          <div className="button-group">
            <div className="left-buttons">
              <button type="submit">Post Job</button>
              <button type="button" onClick={() => setShowPreview(!showPreview)} className="preview-btn">
                {showPreview ? 'Hide Preview' : 'Preview Job Post'}
              </button>
            </div>
            <div className="right-buttons">
              <button type="button" className="next-btn" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </div>
        </form>
      </div>

      {showPreview && (
        <div className="preview-section">
          <h3>Job Preview</h3>
          {formData.logo && (
            <img src={URL.createObjectURL(formData.logo)} alt="Logo Preview" className="preview-logo" />
          )}
          <p><strong>Job Title:</strong> {formData.jobTitle}</p>
          <p><strong>Employer:</strong> {formData.employer}</p>
          <p><strong>Website:</strong> {formData.website}</p>
          <p><strong>Location:</strong> {formData.address1}, {formData.address2}, {formData.city}, {formData.state}, {formData.zip}, {formData.country}</p>
          <p><strong>Description:</strong> {formData.description}</p>
        </div>
      )}
    </div>
  );
};

export default PostJobPage;
