import React, { useState } from 'react';
import { useRecruitersJobContext } from '../../context/RecruitersJobContext'; // adjust path as needed
import '../../css/recruiters/PostJobPage.css'; // keep your original styling

const PostJobPage = () => {
  const [form, setForm] = useState({
    company: '',
    title: '',
    salary: '',
    location: '',
    type: '',
  });

  const [showPreview, setShowPreview] = useState(false);
  const { addJob } = useRecruitersJobContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(form);
    alert('Job submitted!');
    setForm({
      company: '',
      title: '',
      salary: '',
      location: '',
      type: '',
    });
    setShowPreview(false);
  };

  return (
    <div className="post-job-wrapper">
      <div className="post-form-section">
        <h2 className="post-h2">Post a Job</h2>
        <form className="post-job-form" onSubmit={handleSubmit}>
          <label className="post-label">Company</label>
          <input className="post-input" type="text" name="company" value={form.company} onChange={handleChange} required />

          <label className="post-label">Position</label>
          <input className="post-input" type="text" name="position" value={form.position} onChange={handleChange} required />

          <label className="post-label">Salary</label>
          <input className="post-input" type="text" name="salary" value={form.salary} onChange={handleChange} />

          <label className="post-label">Experience Required</label>
          <input className="post-input" type="text" name="experience" value={form.experience} onChange={handleChange} />

          <label className="post-label">Job Type</label>
          <input className="post-input" type="text" name="type" value={form.type} onChange={handleChange} />

          <div className="post-button-group">
            <div className="post-left-buttons">
              <button className="post-button" type="submit">Post Job</button>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="post-preview-btn"
              >
                {showPreview ? 'Hide Preview' : 'Preview Job Post'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {showPreview && (
        <div className="post-preview-section">
          <h3 className="post-h3">Job Preview</h3>
          <p><strong>Company:</strong> {form.company}</p>
          <p><strong>Position:</strong> {form.position}</p>
          <p><strong>Salary:</strong> {form.salary}</p>
          <p><strong>Experience Required:</strong> {form.experience}</p>
          <p><strong>Job Type:</strong> {form.type}</p>
        </div>
      )}
    </div>
  );
};

export default PostJobPage;
