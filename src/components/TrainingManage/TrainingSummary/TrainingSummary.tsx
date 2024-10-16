import React, { useEffect, useState } from 'react';
// import './TrainingSummary.css';
import { fetchTrainingData } from '../../../services/api';

type TrainingData ={
  name: string;
  sets: number;
  reps: number;
}

const TrainingSummary: React.FC = () => {
  const [trainingData, setTrainingData] = useState<TrainingData[]>([]);

  useEffect(() => {
    fetchTrainingData().then(data => setTrainingData(data));
  }, []);

  return (
    <div className="training-summary">
      <h2>今日のトレーニング</h2>
      <ul>
        {trainingData.map((exercise, index) => (
          <li key={index}>
            <strong>{exercise.name}</strong>: {exercise.sets} セット x {exercise.reps} レップ
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingSummary;