import React, { useEffect, useState } from 'react';
import { fetchTrainingDetail } from '../../../services/api';

type TrainingDetailProps ={
  videoUrl: string;
  description: string;
  precautions: string;
}

const TrainingDetail: React.FC<{ exercise: string }> = ({ exercise }) => {
  const [detail, setDetail] = useState<TrainingDetailProps | null>(null);

  useEffect(() => {
    fetchTrainingDetail(exercise).then(data => setDetail(data));
  }, [exercise]);

  if (!detail) return <div>Loading...</div>;

  return (
    <div className="training-detail">
      <h2>{exercise}の詳細</h2>
      <video src={detail.videoUrl} controls />
      <p>{detail.description}</p>
      <p><strong>注意事項:</strong> {detail.precautions}</p>
    </div>
  );
};

export default TrainingDetail;