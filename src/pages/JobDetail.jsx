import { useParams, Link } from 'react-router-dom';
import jobs from '../data/jobs';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="job-detail">
      <h1>{job.title}</h1>
      <p><strong>{job.company}</strong> ⭐ {job.rating}</p>
      <p>📍 {job.location}</p>
      <p>🕓 {job.posted} | 🧑‍💼 Openings: {job.openings}</p>
      <p>👥 Applicants: {job.applicants}</p>
      <h3>Description</h3>
      <p>{job.description}</p>
      <div className="actions">
        <button className="save-btn">Save</button>
        <button className="apply-btn">Apply</button>
      </div>
      <Link to="/" className="back-link">← Back to Listings</Link>
    </div>
  );
};

export default JobDetail;
