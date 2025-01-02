import React, { useEffect, useState } from 'react';
// import './TrainingSummary.css';
import { fetchTrainingData } from '../../../services/api';

export type TrainingData = {
  title: string;
  description: number;
  date: Date;
};


const TrainingSummary: React.FC = () => {
  const [trainingData, setTrainingData] = useState<TrainingData[]>([]);

  useEffect(() => {
    fetchTrainingData()
      .then(data => setTrainingData(data))  // データ取得後に状態を設定
      .catch(error => console.error("Error in useEffect:", error));  // エラーハンドリング
  }, []);

  return (
    <div className="training-summary">
      <h2>今日のトレーニング</h2>
      <ul>
        {trainingData.map((exercise, index) => (
          <li key={index}>
            <strong>{exercise.title}</strong>: {exercise.description} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingSummary;