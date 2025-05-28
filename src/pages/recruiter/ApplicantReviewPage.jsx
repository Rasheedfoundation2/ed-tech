import React, { useRef,useState } from 'react';
import ApplicantDetails from '../../components/recruiter/ApplicantDetails';
import ResumeViewer from '../../components/recruiter/ResumeViewer';
import InterviewStatusBar from '../../components/recruiter/InterviewStatusBar';
import InterviewStageTracker from '../../components/recruiter/InterviewStageTracker';
import '../../css/recruiters/ApplicantReviewPage.css'

const ApplicantReviewPage = () => {
  const dummyApplicant = {
  name: 'John Doe',
  description: 'A full-stack developer passionate about AI and education.',
  coverLetter: `Dear Hiring Team,\nI am excited to apply for the position at your company. With over 5 years of experience in full-stack development and a passion for building scalable systems, I believe I would be a valuable asset to your team.\n\nThank you for your consideration.`,
};
  const stageRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <div className="page-container">
      <ApplicantDetails applicant={dummyApplicant} />
      <ResumeViewer />
      <InterviewStatusBar stageRefs={stageRefs}   currentStage={currentStage} />
      <InterviewStageTracker stageRefs={stageRefs}   currentStage={currentStage}
        setCurrentStage={setCurrentStage}/>
    </div>
  );
};

export default ApplicantReviewPage;
