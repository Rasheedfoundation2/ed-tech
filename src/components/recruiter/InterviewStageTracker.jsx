import React, { useState } from 'react';
import InterviewStage from './InterviewStage';

const InterviewStageTracker = ({ stageRefs, currentStage, setCurrentStage }) => {

  const [data, setData] = useState({
    1: { score: '', remarks: '' },
    2: { score: '', remarks: '' },
    3: { score: '', remarks: '' },
  });

  const updateStage = (stage, field, value) => {
    setData(prev => ({
      ...prev,
      [stage]: { ...prev[stage], [field]: value },
    }));
  };

  const completeStage = (stage) => {
    if (stage < 3) setCurrentStage(stage + 1);
  };

  return (
    <div className="stage-tracker">
      {[1, 2, 3].map(stage => (
        <div ref={stageRefs[stage - 1]} key={stage}>
          <InterviewStage
            stage={stage}
            disabled={stage > currentStage}
            data={data[stage]}
            onChange={updateStage}
            onComplete={() => completeStage(stage)}
          />
        </div>
      ))}
    </div>
  );
};

export default InterviewStageTracker;
